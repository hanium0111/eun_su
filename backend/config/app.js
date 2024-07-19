// 애플리케이션 전역 설정
// 환경변수로드 .env파일 사용
require('dotenv').config();

// 모듈 및 라우트 불러오기
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const passport = require('./passport');
const loginRoutes = require('../routes/loginRoutes');
const generateRoutes = require('../routes/generateRoutes');
const dashboardRoutes = require('../routes/dashboardRoutes');
const templateRoutes = require('../routes/templateRoutes'); // 추가된 부분

// express 어플 설정
const app = express();

// cors 설정 - 리액트와 통신
app.use(cors({
  origin: 'http://localhost:3000', // React 개발 서버 주소
  credentials: true // 세션 및 쿠키를 사용하기 위해 필요
}));

// 세션 및 Passport 설정
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // 프로덕션에서는 true로 설정 (HTTPS)
}));

app.use(passport.initialize());
app.use(passport.session());

// JSON 및 URL 인코딩된 본문 파싱 미들웨어
// 클라이언트에서 서버로 전송되는 json 및 url 데이터를 파싱위한 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 미들웨어를 사용하여 요청된 URL을 디코딩
app.use((req, res, next) => {
  req.url = decodeURIComponent(req.url);
  next();
});

// 정적 파일 제공
const copiedTemplatesPath = path.resolve(__dirname, '../../copied_userTemplates');
const createdPagesPath = path.resolve(__dirname, '../../created_userPages');
const frontendPath = path.resolve(__dirname, '../../frontend/public');

app.use('/static', express.static(frontendPath));
app.use('/copied_userTemplates', express.static(copiedTemplatesPath)); // 추가된 부분
app.use('/created_userPages', express.static(createdPagesPath));

// 기본 경로 핸들러 추가
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

// 라우트 설정
app.use('/auth', loginRoutes); // '/auth' 라우트로 시작하는 요청은 loginRoutes에서 처리한다
app.use('/generate', generateRoutes); // 생성 라우트 추가
app.use('/dashboard', dashboardRoutes); // 대시보드 라우트 추가
app.use('/templates', templateRoutes); // '/templates' 라우트로 시작하는 요청은 templateRoutes에서 처리

// 모듈을 내보냄
module.exports = app;
