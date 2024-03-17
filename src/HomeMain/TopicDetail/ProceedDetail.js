import React, { useState } from "react";
import "./ProceedDetail.css";
import PHeader from "../Petitions/Pheader"; // Assuming this is the top navigation component
import Footer from "../footer";
import ExitPopUp from "./ExitPopUp.js";
import { useNavigate } from "react-router-dom";

function ProceedDetail() {
  const [buttonText, setButtonText] = useState("동의합니다");
  const [showExitPopup, setShowExitPopup] = useState(false);

  const handleAgreeAndNext = () => {
    // Show the exit popup without changing the state of agreement
    setShowExitPopup(true);
  };

  const handleClosePopup = () => {
    setShowExitPopup(false);
    // Change the button text and style after the popup closes
    setButtonText("이미 동의한 소리입니다");
  };

  return (
    <div className="ProceedDetail-page-container">
      <PHeader title="진행중인 소리" />

      <div className="ProceedDetail-content">
        <div className="status-bar">
          {/* Image here representing the status. Make sure the image has transparent padding if necessary. */}
          <img
            src="/image/TopicDetail/status_group.png"
            className="status-group"
            alt="Status"
          />
        </div>

        <div className="ProceedDetail-info">
          <h2 className="info-title">학적 프로젝트 일부 수정 건의</h2>
          <div className="info-details">
            <span className="info-label">분야 | 학생지원</span>
            <span className="info-date">기간 | 2024.03.15 - 2024.03.31</span>
            <div className="info-progress-bar">
              <div className="info-progress" style={{ width: "40%" }}></div>
            </div>
            <span className="info-participants1 right-aligned">40명/100</span>
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
        </div>
        <div className="ProceedDetail-agreement">
          <button
            className={`agree-button ${
              buttonText !== "동의합니다" ? "agreed" : ""
            }`}
            onClick={handleAgreeAndNext}
          >
            {buttonText}
          </button>
        </div>

        {showExitPopup && <ExitPopUp onClose={handleClosePopup} />}
      </div>

      <Footer />
    </div>
  );
}

export default ProceedDetail;
