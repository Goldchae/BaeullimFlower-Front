import React from "react";
import "./DiscussDetail.css";
import PHeader from "../Petitions/Pheader";
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
            <h2 className="info-title">수면 보장권 건의</h2>
            <div className="stamp">논의완료 5일전</div>
          </div>
          <div className="info-details">
            <span className="info-label">분야 | 생활지원</span>
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
                  수면권으로 학생들의 윤택한 삶 보장
                </div>
              </div>
              <div className="info-row">
                <div className="info-label2">청원 내용</div>
                <div className="info-content">
                  왜 우리 학교만 1교시가 8시입니까???? 저희도 9시 수업
                  보장해주십시오! 통학러들은 새벽같이 일어나도 모자랍니다ㅠ!
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
