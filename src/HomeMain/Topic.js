import React from "react";
import "./Topic.css";
import { useNavigate } from "react-router-dom";

const ProgressBar = ({ percent }) => (
  <div className="progress-bar-background">
    <div className="progress-bar-fill" style={{ width: `${percent}%` }}></div>
  </div>
);
const Topic = ({
  category,
  title,
  startDate,
  endDate,
  daysRemaining,
  agreementPercent,
  status,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    let path;
    switch (status) {
      case "진행중":
        path = "/ProceedDetail";
        break;
      case "논의중":
        path = "/DiscussDetail";
        break;
      case "완료":
        path = "/CompleteDetail";
        break;
      // add more cases as necessary
      default:
        path = "/";
        break;
    }
    navigate(path); // Navigate to the determined path
  };

  return (
    <div className="topic-container" onClick={handleNavigate}>
      <div className="topic-category">{category}</div>
      <div className="topic-title">{title}</div>
      <div className="topic-dates">
        {startDate} ~ {endDate}
      </div>
      <div className="topic-footer">
        <span className="topic-days-remaining">{`D-${daysRemaining}`}</span>
        <span className="topic-agreement-percent">{`${agreementPercent}%`}</span>
      </div>
      <ProgressBar percent={agreementPercent} />
    </div>
  );
};

export default Topic;
