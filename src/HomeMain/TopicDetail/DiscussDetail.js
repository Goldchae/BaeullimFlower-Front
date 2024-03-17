import React from "react";
import "./DiscussDetail.css";
import PHeader from "../Petitions/Pheader"; // Assuming this is the top navigation component
import Footer from "../footer";

function DiscussDetail() {
  return (
    <div className="DiscussDetail-page-container">
      <PHeader title="논의중인 소리" />

      <div className="DiscussDetail-content">
        <div className="discuss-bar">
          <img
            src="/image/TopicDetail/discuss_status.png"
            className="discuss-group"
            alt="Status"
          />
        </div>

        <div className="DiscussDetail-info">
          <div className="info-top">
            <h2 className="info-title">학적 프로젝트 일부허용 건의</h2>
            <div className="stamp">논의완료 5일전</div>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DiscussDetail;
