import React from "react";
import "./Topic.css";

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
}) => {
  return (
    <div className="topic-container">
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
