const generateService = require('../services/generateService');
const path = require('path');

// 사용자 입력을 처리하여 웹사이트 생성
exports.handleChatInput = async (req, res, next) => {
  try {
    console.log('Controller - handleChatInput called with data:', req.body);
    const { websiteType, features, mood, content, pageName } = req.body;
    const useremail = "test@example.com"; // 인증된 사용자의 이메일 대신 임시로 사용

    const templates = await generateService.getTemplates();
    console.log('Templates retrieved:', templates);

    const templateSelection = await generateService.selectTemplate({ websiteType, features, mood, content }, templates);
    console.log('Template selected:', templateSelection);

    let generatedPagePath;
    if (templateSelection.analysis === "No appropriate template!") {
      const srs = await generateService.generateSRS({ websiteType, features, mood, content });
      const code = await generateService.generateCode({ srs, websiteType, features });
      const result = await generateService.createPage({ websiteType, features, mood, content }, code, pageName, useremail);
      generatedPagePath = result.pagePath;
    } else {
      const copiedTemplatePath = await generateService.copyTemplate({ websiteType, features, mood, content }, templateSelection.analysis, useremail, pageName);
      const modifiedTemplateContent = await generateService.modifyTemplate(copiedTemplatePath, { websiteType, features, mood, content });
      generatedPagePath = copiedTemplatePath;
    }

    if (!generatedPagePath) {
      throw new Error('Generated page path is undefined.');
    }

    const relativePageUrl = `/copied_userTemplates/${path.basename(generatedPagePath)}`;
    res.json({ pageUrl: relativePageUrl });
  } catch (error) {
    console.error('Controller - handleChatInput error:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message });
    }
  }
};

// 사용자가 제공한 입력 기반으로 SRS 생성
exports.generateSRS = async (req, res) => {
  try {
    console.log('Controller - generateSRS called with data:', req.body);
    const { websiteType, features, mood, content } = req.body;
    const srs = await generateService.generateSRS({ websiteType, features, mood, content });
    res.status(200).json({ srs });
  } catch (error) {
    console.error('Controller - generateSRS error:', error);
    res.status(500).json({ error: "Error generating SRS" });
  }
};

// SRS 기반으로 코드 생성
exports.generateCode = async (req, res) => {
  try {
    console.log('Controller - generateCode called with data:', req.body);
    const { srs, websiteType, features } = req.body;
    const code = await generateService.generateCode({ srs, websiteType, features });
    res.status(200).json({ code });
  } catch (error) {
    console.error('Controller - generateCode error:', error);
    res.status(500).json({ error: "Error generating code" });
  }
};

// 생성된 코드 기반으로 페이지 생성
exports.createPage = async (req, res) => {
  try {
    console.log('Controller - createPage called with data:', req.body);
    const { code, pageName } = req.body;
    const result = await generateService.createPage({ code, pageName });
    res.status(200).json(result);
  } catch (error) {
    console.error('Controller - createPage error:', error);
    res.status(500).json({ error: "Error creating page" });
  }
};
