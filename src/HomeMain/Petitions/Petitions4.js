import React, { useState } from "react";
import "./Petitions4.css";
import PHeader from "./Pheader";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";

const Petitions4 = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(null);

  const buttons = [
    {
      id: 1,
      title: "학생지원",
      description: "취업/현장실습지원,학술지원,행사지원,상담지원,고시지원,등",
      icon: "/image/icons/1.png", // 아이콘 경로
    },
    {
      id: 2,
      title: "학생활동",
      description:
        "학생회,중앙동아리, 서보터즈, 언론활동, 사회봉사, 멘토링, 등",
      icon: "/image/icons/2.png",
    },
    {
      id: 3,
      title: "생활지원",
      description:
        "식당, 기숙사, 휘트니스/체육센터, 편의시설, 대학건강센터, 등",
      icon: "/image/icons/3.png", // 아이콘 경로
    },
    {
      id: 4,
      title: "행정지원",
      description:
        "입학 및 학사운영, 학교 관련 제도, 학사 운영 전반에 관한 업무,등",
      icon: "/image/icons/4.png", // 아이콘 경로
    },
    {
      id: 5,
      title: "대학",
      description: "각 대학별 특수 청원",
      icon: "/image/icons/5.png", // 아이콘 경로
    },
    {
      id: 6,
      title: "기타",
      description: "그 외의 교내 관련 청원",
      icon: "/image/icons/6.png", // 아이콘 경로
    },
  ];

  const handleButtonClick = (id) => {
    setSelected(id);
  };

  const handleSubmit = () => {
    // 신청 로직
    alert(`등록되었습니다.`);
    navigate("/HomeMainPage");
  };

  return (
    <div className="p1-app-container">
      <PHeader title="분야" />
      <div className="p4-main-container">
        <div className="p4-main-login-holder">
          <div className="button-list">
            {buttons.map((button) => (
              <div
                className="button-item"
                onClick={() => handleButtonClick(button.id)}
              >
                <div className="left">
                  <div
                    className="icon"
                    style={{ backgroundImage: `url(${button.icon})` }}
                  ></div>
                  <div className="content">
                    <h2>{button.title}</h2>
                    <p>{button.description}</p>
                  </div>
                </div>
                <div className="right">
                  <div
                    className={`checkmark-container ${
                      selected === button.id ? "checked" : ""
                    }`}
                  >
                    {/* SVG나 Font Icon을 사용해 체크 표시를 넣을 수 있음 */}
                    <span className="checkmark">✓</span>
                  </div>
                </div>
              </div>
            ))}
            <button
              className="submit-button"
              onClick={handleSubmit}
              disabled={!selected}
            >
              신청하기
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Petitions4;
