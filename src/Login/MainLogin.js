import React from "react";
import { Link } from "react-router-dom";
import "./MainLogin.css";

const MainLogin = () => {
  return (
    <div className="main-container">
      <div className="main-login-holder">
        <div className="main-login">
          <div className="megaphone-image">
            <img alt="메가폰" src="/image/login/megaphone.png" />
          </div>

          <div className="text-area">
            <h1>이화인의</h1>
            <h1>작은소리를</h1>
            <h1>함께 크게 외쳐주세요!</h1>
            <br />
            <p>한번보다 두 명, 두 명보다 세 명으로</p>
            <p>학교에 말하고 싶은 것을 함께하기</p>
          </div>
          <br />
          <br />
          <br />

          <div className="buttons">
            <Link to="/SignUp" className="button primary">
              가입되어있어요
            </Link>
            <Link to="/SignUp" className="button secondary">
              회원가입하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
