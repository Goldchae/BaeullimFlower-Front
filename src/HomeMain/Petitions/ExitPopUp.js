import React, { useState } from "react";
import "./ExitPopUp.css";
import { useNavigate } from "react-router-dom";

function Popup({ onConfirm, onCancel }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <p>의견 내기를 취소하고 나가시겠습니까?</p>
        <button className="btn-cancel" onClick={onCancel}>
          아니오
        </button>
        <button className="btn-confirm" onClick={onConfirm}>
          네
        </button>
      </div>
    </div>
  );
}

function ExitPopUp() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };
  const navigate = useNavigate();
  const handleConfirmAction = () => {
    navigate("/HomeMainPage");
  };

  return (
    <div className="App">
      <button onClick={handleOpenPopup}>X</button>
      {isPopupVisible && (
        <Popup onConfirm={handleConfirmAction} onCancel={handleClosePopup} />
      )}
    </div>
  );
}

export default ExitPopUp;
