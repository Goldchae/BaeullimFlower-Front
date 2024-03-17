import React, { useState } from "react";
import "./Mypage.css";
import MyPageNav from "./MyPageNav";
import Footer from "../HomeMain/footer";
import TopicHolder from "../HomeMain/TopicHolder";
import { useNavigate } from "react-router-dom";

const Mypage = ({ userName }) => {
  return (
    <div>
      <MyPageNav title="나의 소리" />
      <div className="Mp-main-container">
        <div className="Mp-main-login-holder">
          <div className="my-voice-container">
            {/* <div className="user-name">{userName} 님</div> */}
            <div className="user-name">정은체 님</div>
            <button className="grey-button">MY</button>

            <div className="titleHolder">
              <hr />
              <div className="title">나의 소리</div>
              <hr />
              <div className="title">동의한 소리</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mypage;
