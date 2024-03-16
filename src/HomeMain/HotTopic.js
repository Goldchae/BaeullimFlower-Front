import React from "react";
import "./HotTopic.css";

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
}) => {
  const progressPercent =
    ((new Date(endDate) - new Date()) /
      (new Date(endDate) - new Date(startDate))) *
    100;

  return (
    <div className="hot-topic">
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
