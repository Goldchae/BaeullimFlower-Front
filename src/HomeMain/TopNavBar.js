// TopNavBar.js
import React, { useState } from "react";
import "./TopNavBar.css";
import PublicNews from "./PublicNews";

const TopNavBar = () => {
  const [activeTab, setActiveTab] = useState("public-news");

  const renderContent = () => {
    switch (activeTab) {
      case "public-news":
        return <PublicNews />;
      case "create-petition":
        return <div>청원을 생성하는 페이지입니다.</div>;
      default:
        return <div>선택된 탭이 없습니다.</div>;
    }
  };

  return (
    <div>
      <header className="top-nav-bar">
        <div className="title-container">
          <h1 className="title">이화신문고</h1>
        </div>
        <nav className="nav-links">
          <button
            className="nav-button"
            onClick={() => setActiveTab("public-news")}
          >
            공개소식
          </button>
          <button
            className="nav-button"
            onClick={() => setActiveTab("create-petition")}
          >
            청원하기
          </button>
        </nav>
      </header>
      <main>{renderContent()}</main>
    </div>
  );
};

export default TopNavBar;
