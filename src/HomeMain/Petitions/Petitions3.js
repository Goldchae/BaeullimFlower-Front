import React, { useState } from "react";
import "./Petitions3.css";
import PHeader from "./Pheader";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";

function Petitions3() {
  const navigate = useNavigate();
  const nextClick = () => {
    navigate("/Petitions4");
  };

  return (
    <div className="p3-app-container">
      <PHeader title="의견내기" />

      <div className="p3-main-container">
        <div className="p3-main-login-holder">
          <div className="form-container">
            <div className="title">정보</div>
            <div className="info-box">
              <div className="field">
                <span className="label">이름</span>
                <span className="value">정은체</span>
              </div>
              <div className="field">
                <span className="label">학번</span>
                <span className="value">2271056</span>
              </div>
              <div className="field">
                <span className="label">이메일</span>
                <span className="value">Ewha45@ewha.ac.kr</span>
              </div>
            </div>
            <br />
            <div className="title">의견 내용</div>
            <div className="opinion-box">
              <div className="field">
                <span className="value">햄스터 양육 지원비 보장</span>
              </div>
              <div className="opinion-content">
                햄스터 양육 지원비 보장해주신다면 학생들의 행복도가 높아질
                것으로 예상됩니다.
              </div>
            </div>
            <div className="ai-label">
              {" "}
              <img alt="ai" src="/image/main/ai.png" />
            </div>
            <br />
            <button className="submit-button" onClick={nextClick}>
              신청하기
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Petitions3;
