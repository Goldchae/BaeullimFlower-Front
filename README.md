### [Ewha-thon]

# **🌸 baeullimFlower : 배울림꽃 🌸**

**_🍯 MeltingPot Team_**

기획 : 민지희

디자인: 장예림

프론트엔드 : 정은채

백엔드 : 이한나, 정소은

기술 : 박세은

## FrontEnd

---

📍기술 스택 : React, vercel

기획 분이 짜 주신 와이어프레임, 디자이너 분들이 UX/UI를 다듬어 주신 프로토타입을 보고 1차 웹 퍼블리싱 작업을 수행하였습니다. 이후 현재 백엔드 구축이 완료되어 api 연결 작업 중입니다.

## FrontEnd 결과물

---

## 🌟 배포 링크 : https://ewhathon-meltingpot-baeullimkkoch.vercel.app

‼️웹으로 접속하여 화면을 세로가 길게 봐 주시면 감사하겠습니다. ( 각 모바일 뷰 반응형 설정 미완 )

## 🌟 영상 :

<img width="80%" src="/public/gif/video.gif"/>

(약간 빠르게 편집하였습니다.)

## FrontEnd 코드 설명

---

부드러운 사용자 환경을 위해 SPA로 구성하였고 각 컴포넌트의 세분화를 시도해 재사용성을 높이려 노력하였습니다.

## 대략적인 프로젝트 구조 (src)

````📂

└─src
└─HomeMain
├─Petitions
│ ├─ExitPopUp.css
│ ├─ExitPopUp.js
│ ├─Petitions1.css
│ ├─Petitions1.js
│ ├─Petitions2.css
│ ├─Petitions2.js
│ ├─Petitions3.css
│ ├─Petitions3.js
│ ├─Petitions4.css
│ └─Petitions4.js
├─Pheader.js
└─StudentSupport
├─MidNavigator.css
├─MidNavigator.js
├─StudentSupport.js
├─Topic.css
├─Topic.js
├─TopicHolder.css
├─TopicHolder.js
├─TopNavigator.css
└─TopNavigator.js
└─TopicDetail
├─CompleteDetail.css
├─CompleteDetail.js
├─DiscussDetail.css
├─DiscussDetail.js
├─ExitPopUp.css
├─ExitPopUp.js
├─ProceedDetail.css
├─ProceedDetail.js
└─Login
├─connect
│ ├─signupApi.js
│ ├─LoginUp.css
│ └─LoginUp.js
└─MyPage
├─Mypage.css
├─Mypage.js
└─MypageNav.js
└─pages
├─HomeMainPage.js
├─LoginPage.js
└─StartPage.js
└─startPage
├─StartPage.css
└─StartPage.js
├─index.js
└─setupTests.js```
````
