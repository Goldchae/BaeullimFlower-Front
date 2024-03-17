import React, { useEffect } from "react";
import "./ExitPopUp.css"; // 팝업의 스타일을 정의한 CSS 파일

function ExitPopUp({ onClose }) {
  // This function will be called to close the popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="exit-popup-overlay">
      <div className="exit-popup">
        <p>벗 덕분에 </p>
        <p>소리가 더 모였어요!</p>
      </div>
    </div>
  );
}

export default ExitPopUp;
