import React from "react";
import "./HotTopic.css";
import { useNavigate } from "react-router-dom";

const ProgressBar = ({ percent }) => (
  <div className="hot-progress-bar-background">
    <div
      className="hot-progress-bar-fill"
      style={{ width: `${percent}%` }}
    ></div>
  </div>
);

const HotTopic = ({
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

      default:
        path = "/ProceedDetail";
        break;
    }
    navigate(path);
  };

  const progressPercent =
    ((new Date(endDate) - new Date()) /
      (new Date(endDate) - new Date(startDate))) *
    100;

  return (
    <div className="hot-topic" onClick={handleNavigate}>
      <div className="hot-topic-header">
        <div className="hot-topic-category">{category}</div>
        <div className="hot-topic-days-remaining">D-{daysRemaining}</div>
      </div>
      <div className="hot-topic-title">{title}</div>
      <div className="hot-topic-date">{`${startDate} ~ ${endDate}`}</div>
      <div className="hot-progress-bar">
        <div
          className="hot-progress"
          style={{ width: `${agreementPercent}%` }}
        ></div>
      </div>
      <div className="hot-topic-discount-percent">동의 {agreementPercent}%</div>
    </div>
  );
};

export default HotTopic;
