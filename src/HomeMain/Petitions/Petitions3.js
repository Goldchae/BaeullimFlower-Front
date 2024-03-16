import React, { useState } from "react";
import "./Petitions3.css";
import PHeader from "./Pheader";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";

function Petitions3() {
  const navigate = useNavigate();
  const nextClick = () => {
    //navigate("/Petitions2");
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
                <span className="value">홍길동</span>
              </div>
              <div className="field">
                <span className="label">학번</span>
                <span className="value">2012345</span>
              </div>
              <div className="field">
                <span className="label">이메일</span>
                <span className="value">Ewha45@ewha.ac.kr</span>
              </div>
            </div>
            <div className="title">의견 내용</div>
            <div className="opinion-box">
              <div className="field">
                <span className="label">의견 제목</span>
                <span className="value">
                  학점 평가로 인한 학생들의 유익한 상 보장
                </span>
              </div>
              <div className="opinion-content">
                학점 평가에 해쳐시던 교수님을 자르는 근리를 보장해주시며
                학생들이 불평등을 내면서 나름 노예가 아닌 삶을 살고 있다 생각한
                겁니다. 어렵으시면 둥글게 넘고 가세요.
              </div>
            </div>
            <button className="submit-button">신청하기</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Petitions3;
