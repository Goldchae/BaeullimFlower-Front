import React from "react";
import "./HotTopicHolder.css";
import HotTopic from "./HotTopic";

const TopicData = [
  {
    id: 1,
    category: "상생지원",
    title: "학점 포기제 건의",
    startDate: "2024.03.15",
    endDate: "2024.03.31",
    daysRemaining: 15,
    agreementPercent: 40,
  },
  {
    id: 2,
    category: "상생지원",
    title: "햄스터 입양 건의",
    startDate: "2024.03.15",
    endDate: "2024.03.31",
    daysRemaining: 15,
    agreementPercent: 40,
  },
  {
    id: 3,
    category: "상생지원",
    title: "배고픔 건의",
    startDate: "2024.03.15",
    endDate: "2024.03.31",
    daysRemaining: 15,
    agreementPercent: 40,
  },
  {
    id: 4,
    category: "상생지원2",
    title: "데드리프트 건의",
    startDate: "2024.03.15",
    endDate: "2024.03.31",
    daysRemaining: 15,
    agreementPercent: 40,
  },
];

const HotTopicHolder = () => {
  return (
    <div className="main-container">
      <div className="hot-topic-holder">
        <div className="hot-topic-title">Hot</div>
        <div className="inquiry-scroll-container">
          {TopicData.map((inquiry, index) => (
            <HotTopic
              key={index}
              category={inquiry.category}
              title={inquiry.title}
              startDate={inquiry.startDate}
              endDate={inquiry.endDate}
              daysRemaining={inquiry.daysRemaining}
              agreementPercent={inquiry.agreementPercent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotTopicHolder;
