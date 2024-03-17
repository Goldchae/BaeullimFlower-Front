import React from "react";
import "./CompleteDetail.css";
import PHeader from "../Petitions/Pheader";
import Footer from "../footer";

function CompleteDetail() {
  return (
    <div className="CompleteDetail-page-container">
      <PHeader title="완료된 소리" />

      <div className="CompleteDetail-content">
        <div className="complete-bar">
          <img
            src="/image/TopicDetail/complete_status.png"
            className="complete-group"
            alt="Status"
          />
        </div>

        <div className="CompleteDetail-info">
          <div className="info-top">
            <h2 className="info-title">해커톤 지원 건의</h2>
          </div>
          <div className="info-details">
            <span className="info-label">분야 | 학생지원</span>
            <span className="info-date">기간 | 2024.03.15 - 2024.03.31</span>
            <div className="info-progress-container bottom">
              <span className="info-participants">121명 / 100</span>
            </div>
          </div>
          <div className="info-description">
            <div className="info-box">
              <div className="info-row">
                <div className="info-label2">청원인</div>
                <div className="info-content">홍**</div>
              </div>
              <div className="info-row">
                <div className="info-label2">청원취지</div>
                <div className="info-content">
                  해커톤 등 다양한 프로그램 지원
                </div>
              </div>
              <div className="info-row">
                <div className="info-label2">청원 내용</div>
                <div className="info-content">
                  학교 측에서는 해커톤 같은 프로그램을 더욱 장려하고
                  지원해주십시오!
                </div>
              </div>
            </div>
          </div>
          <div className="petition-result">
            <div className="petition-subtitle">청원처리결과</div>
            <div className="result-row">
              <div className="result-label">완료 날짜</div>
              <div className="result-content">2024.04.20</div>
            </div>
            <div className="result-row">
              <div className="result-label">결과 내용</div>
              <div className="result-content">
                1회 이화톤을 지원해드리겠습니다. 감사합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CompleteDetail;
