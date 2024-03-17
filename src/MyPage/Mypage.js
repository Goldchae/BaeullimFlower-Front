import React from "react";
import "./Mypage.css";
import MyPageNav from "./MyPageNav";
import Footer from "../HomeMain/footer";

const Mypage = ({ userName }) => {
  return (
    <div>
      <MyPageNav title="나의 소리" />
      <div className="Mp-main-container">
        <div className="Mp-main-login-holder">
          <div className="my-voice-container">
            <div className="user-name">정은체 님</div>
            <button className="grey-button">MY</button>
            <div className="titleHolder">
              <hr />
              <div className="title">나의 소리</div>
              {/*chat GPT*/}
              <div className="my-voice-box">
                <div className="my-voice-category">학생지원</div>
                <div className="my-voice-title">학점 포기제 일부허용 건의</div>
                <div className="my-voice-dates">2024.03.15 ~ 2024.03.31</div>
                <div className="my-voice-status">
                  <div className="my-voice-count">32명/100</div>
                  <div className="status-indicator in-progress"></div>
                </div>
              </div>
              <hr />
              <div className="title">동의한 소리</div>
              <div className="my-voice-box2">
                <div className="my-voice-category2">생활지원</div>
                <div className="my-voice-title">기숙사 통금 시간 연장 건의</div>
                <div className="my-voice-dates"> 2024.03.31</div>
                <div className="my-voice-status">
                  <div className="my-voice-count">종료</div>
                  <div className="status-indicator in-progress2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mypage;
