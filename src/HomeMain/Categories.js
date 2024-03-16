import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css"; // Categories 컴포넌트에 대한 스타일시트

const Categories = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 history 객체 사용

  const handleCategoryClick = (path) => {
    navigate(path); // 지정된 경로로 이동
  };

  return (
    <div className="categories">
      <div
        className="category"
        onClick={() => handleCategoryClick("/student-support")}
      >
        <div className="icon"></div>
        <div className="label">학생지원</div>
      </div>
      <div
        className="category"
        //onClick={() => handleCategoryClick("/student-activity")}
      >
        <div className="icon"></div>
        <div className="label">학생활동</div>
      </div>
      <div
        className="category"
        //onClick={() => handleCategoryClick("/living-support")}
      >
        <div className="icon"></div>
        <div className="label">생활지원</div>
      </div>
      <div
        className="category"
        //onClick={() => handleCategoryClick("/university")}
      >
        <div className="icon"></div>
        <div className="label">대학</div>
      </div>
    </div>
  );
};

export default Categories;
