import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Certification.css";

function Certification() {
  return (
    <div className="main-container">
      <div className="main-login-holder">
        <br />
        <h1>학생증</h1>
        <h1>인증이 필요해요.</h1>
        <br />
        <br />
        <div className="card-image">
          <img alt="학생증" src="/image/login/card.png" />
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
        <Link to="/Done" className="custom-button-link">
          <div className="custom-button">인증하기</div>
        </Link>

        <Link to="/">
          <h6>뒤로가기</h6>
        </Link>
      </div>
    </div>
  );
}

export default Certification;
