import React from "react";
import "./CompleteDetail.css";
import PHeader from "../Petitions/Pheader"; // Assuming this is the top navigation component
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
            <h2 className="info-title">학점 포기제 일부허용 건의</h2>
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
                  학점포기로 인한 학생들의 윤택한 삶 보장
                </div>
              </div>
              <div className="info-row">
                <div className="info-label2">청원 내용</div>
                <div className="info-content">
                  학점포기하게 해주시던 교수님을 자를 권리를 보장해주시던
                  학생들이 등록금을 내면서 나름 노예가 아닌 삶을 살고 있다
                  생각할 것 같습니다. 어려우시면 등록금 네고 가시죠.
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
                교수들은 학생 버킷리스트를 보장해드리며 학점포기도 관찰하고
                있었습니다. 다만 어려워서인지 등록금 네고 가시죠.
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
