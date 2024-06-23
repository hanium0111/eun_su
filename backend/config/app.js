require('dotenv').config(); // 환경 변수 로드를 최상단에 위치시킵니다.
const express = require('express');
const session = require('express-session');
const cors = require('cors');  // cors 모듈 추가
const path = require('path'); // path 모듈 추가
const passport = require('./passport'); // 모듈화된 Passport 설정 불러오기
const loginRoutes = require('../routes/loginRoutes'); // 로그인 라우트 불러오기
const generateRoutes= require("../routes/generateRoutes"); //챗 라우트 불러오기
const dashboardRoutes = require('../routes/dashboardRoutes'); //대시 보드 라우트 불러오기

const app = express();

app.use(cors({
  origin: 'http://localhost:3001', // React 개발 서버 주소
  credentials: true // 세션 및 쿠키를 사용하기 위해 필요
}));

// 세션 및 Passport 설정
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // 프로덕션에서는 true로 설정 (HTTPS)
}));



app.use(passport.initialize());
app.use(passport.session());
// JSON 및 URL 인코딩된 본문 파싱 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 정적 파일 제공
app.use('/static', express.static(path.join(__dirname, '../../frontend/public')));
app.use('/copied_templates', express.static(path.join(__dirname, '../../copied_usertemplates')));

// 라우트 설정
app.use('/auth', loginRoutes);
app.use('/generate', generateRoutes); // 생성 라우트 추가
app.use('/dashboard',dashboardRoutes); //대시보드 라우트 추가

module.exports = app;