프로젝트 구조

backend
 -config                       //db, 미들웨어 등 초기화 
 -controllers                 //routes에게 호출받고 services를 호출하여 하나의 엔드포인트에 대한 응답을 구성
 -models                     // db 생성을 위한 모델
 -routes                      // 엔드포인트에 따라 컨트롤러 호출. 프론트엔드와 통신하는 단일점
 -services                    // controllers에게 호출받음. 각종 내부 서비스 로직으로 구성
 -utils                        // 공통으로 사용될 수 있는 모듈 존재
 -server.js                   // 백엔드의 서버 실행지점

frontend
 -public                     // html파일존재
 -src
    -assets                  // image 및 css 등 
    -components         // react에 사용되는 각종 컴포넌트로 구성
    -hooks                   
    -pages                 // 컴포넌트를 조합하여 하나의 페이지 구성
    -services       
    -utils
 -App.js       
 -index.js             

copied_userTemplate   //템플릿 기반으로 생성된 파일이 저장되는 디렉터리
created_userPage     //적절한 템플릿이 없어 챠크라ui로 생성된 파일이 저장되는 디렉터리


================================================================
저희 mariadb 다운 받아야돼요 ..! 
mysql workbench 다운받으면 gui로 db 관리 가능해서 좋아요!
.env파일로 db 설정하시고, 연결되면 프로젝트 실행 시 테이블은 저절로 생겨요!
templates 테이블에는 저희가 직접 쿼리 넣어줘야돼요!
workbench에서 밑에 내용 복붙 한 후 드래그하고 ctrl+enter 누르면 실행되요! 위에부터 하나씩 실행해주세요.
=====================================================================
1.ALTER TABLE templates MODIFY createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
2.ALTER TABLE templates MODIFY updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

3.INSERT INTO templates (templateName, templatePath, category,description)
VALUES ('broadcast', '/basicTemplates/broadcast', '홍보', '어두운 파티분위기');
======================================================================
터미널 두개 열고 프로젝트 루트디렉터리에서 하나는 cd backend, 하나는 cd frontend로 이동 후
백엔드 서버는 node server.js          프론트서버는 npm start로 여시면 됩니다!        
