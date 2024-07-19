import React, { useState } from 'react';
import { Box, VStack, Text, Input, Button, Link } from '@chakra-ui/react';
import '../assets/styles/css/PromptInput.css';

function PromptInput() {
  const [websiteType, setWebsiteType] = useState('');
  const [features, setFeatures] = useState('');
  const [mood, setMood] = useState('');
  const [content, setContent] = useState('');
  const [pageName, setPageName] = useState('');
  const [generatedPageUrl, setGeneratedPageUrl] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      websiteType,
      features,
      mood,
      content,
      pageName,
    };

    console.log('Submitting data:', data);

    fetch('http://localhost:5000/generate/process-requirements', { // 백엔드의 전체 경로 사용
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include', // 세션 쿠키를 포함하여 요청
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Response data:', data);
      setGeneratedPageUrl(data.pageUrl);
      alert('요구사항이 성공적으로 제출되었습니다!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('요구사항 제출에 실패했습니다.');
    });
  };

  return (
    <Box className="min-h-screen bg-gray-100 p-6">
      <VStack spacing={4} align="stretch">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center">
          Website Builder
        </Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <Box>
              <Text fontSize="lg" fontWeight="medium">
                페이지 이름을 입력하세요
              </Text>
              <Input
                value={pageName}
                onChange={(e) => setPageName(e.target.value)}
                placeholder="예: myPage, homepage"
              />
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="medium">
                어떤 홈페이지를 만들고 싶나요?
              </Text>
              <Input
                value={websiteType}
                onChange={(e) => setWebsiteType(e.target.value)}
                placeholder="예: 블로그, 온라인 스토어, 포트폴리오"
              />
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="medium">
                어떤 기능을 넣고 싶나요?
              </Text>
              <Input
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
                placeholder="예: 검색, 회원가입, 채팅"
              />
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="medium">
                어떤 분위기가 좋을까요?
              </Text>
              <Input
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="예: 모던, 클래식, 미니멀리즘"
              />
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="medium">
                어떤 내용이 포함되었으면 좋을까요?
              </Text>
              <Input
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="예: 블로그 글, 제품 목록, 포트폴리오 작품"
              />
            </Box>
            <Button type="submit" colorScheme="blue" width="full">
              제출
            </Button>
          </VStack>
        </form>
        {generatedPageUrl && (
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              페이지가 생성되었습니다:
            </Text>
            <Link href={`http://localhost:5000${generatedPageUrl}`} color="blue.500" isExternal>
              여기를 클릭하여 새 페이지를 확인하세요
            </Link>
          </Box>
        )}
      </VStack>
    </Box>
  );
}

export default PromptInput;
