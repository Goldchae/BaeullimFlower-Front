import React from "react";
import "./MidNavigator.css";

function MidNavigator({ onBackClick }) {
  return (
    <div className="mid-nav">
      <button className="back-button" onClick={onBackClick}>
        <img
          src="/image/StudentSupport/Vector.png"
          alt="Back"
          className="back-icon"
        />
      </button>
      <div className="mid-nav-title">학생지원</div>
    </div>
  );
}

export default MidNavigator;
