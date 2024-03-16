import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Done.css";

function Certification() {
  return (
    <div className="main-container">
      <div className="main-login-holder">
        <br />
        <br />
        <br />
        <div className="centercenter">
          <div className="check-image">
            <img alt="체크" src="/image/login/check.png" />
          </div>
        </div>
        <br />
        <div className="done-text">
          <h1> 가입이 완료되었습니다</h1>
        </div>
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link to="/Done" className="custom-button-link">
          <div className="custom-button">시작하기</div>
        </Link>

        <Link to="/">
          <h6>뒤로가기</h6>
        </Link>
      </div>
    </div>
  );
}

export default Certification;
