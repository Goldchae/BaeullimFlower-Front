import React, { useState } from "react";
import "./TopNavBar.css";
import PublicNews from "./PublicNews";
import Petition from "./petition";
import { useNavigate } from "react-router-dom";

const TopNavBar = () => {
  const navigate = useNavigate();
  const nextClick = () => {
    navigate("/Mypage");
  };
  const titleClick = () => {
    navigate("/");
  };

  const [activeTab, setActiveTab] = useState("public-news");

  const renderContent = () => {
    switch (activeTab) {
      case "public-news":
        return <PublicNews />;
      case "create-petition":
        return <Petition />;
      default:
        return <div>선택된 탭이 없습니다.</div>;
    }
  };

  return (
    <div>
      <header className="top-nav-bar">
        <div className="top-nav-title-container">
          <h1 className="top-nav-titletop" onClick={titleClick}>
            배울림꽃
          </h1>
          <div className="top-nav-icons-container">
            <img
              src="/image/icons/Bell.png"
              alt="Alarm"
              className="top-nav-icon"
            />
            <img
              src="/image/icons/User.png"
              alt="My Page"
              className="top-nav-icon"
              onClick={nextClick}
            />
          </div>
        </div>
        <nav className="top-nav-nav-links">
          <button
            className={`top-nav-nav-button ${
              activeTab === "public-news" ? "active" : ""
            }`}
            onClick={() => setActiveTab("public-news")}
          >
            공개소식
          </button>
          <button
            className={`top-nav-nav-button ${
              activeTab === "create-petition" ? "active" : ""
            }`}
            onClick={() => setActiveTab("create-petition")}
          >
            의견내기
          </button>
        </nav>
      </header>
      <main>{renderContent()}</main>
    </div>
  );
};

export default TopNavBar;
