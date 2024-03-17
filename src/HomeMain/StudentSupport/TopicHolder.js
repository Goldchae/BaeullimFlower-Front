import React, { useState } from "react";
import Topic from "./Topic";
import "./TopicHolder.css";
const TopicDatas = [
  {
    id: 1,
    category: "학생활동",
    title: "시험기간에 놀 권리",
    startDate: "2024.03.15",
    endDate: "2024.03.31",
    daysRemaining: 80,
    agreementPercent: 40,
    status: "진행중",
  },
  {
    id: 2,
    category: "학생지원",
    title: "해커톤 지원",
    startDate: "2024.03.15",
    endDate: "2024.03.31",
    daysRemaining: 5,
    agreementPercent: 40,
    status: "완료",
  },
  {
    id: 3,
    category: "기타",
    title: "라면 섭취권",
    startDate: "2024.03.15",
    endDate: "2024.03.31",
    daysRemaining: 30,
    agreementPercent: 90,
    status: "진행중",
  },
  {
    id: 4,
    category: "생활지원",
    title: "수면 보장권",
    startDate: "2024.03.15",
    endDate: "2024.03.31",
    daysRemaining: 20,
    agreementPercent: 20,
    status: "논의중",
  },
];
const TopicHolder = () => {
  const [filteredTopics, setFilteredTopics] = useState(TopicDatas);
  const [activeStatus, setActiveStatus] = useState("all");

  const filterTopics = (status) => {
    setActiveStatus(status);
    if (status === "all") {
      setFilteredTopics(TopicDatas);
    } else {
      setFilteredTopics(TopicDatas.filter((topic) => topic.status === status));
    }
  };

  return (
    <div className="topic-holder">
      <div className="status-buttons">
        <button
          onClick={() => filterTopics("all")}
          className={activeStatus === "all" ? "active" : ""}
        >
          전체보기
        </button>
        <button
          onClick={() => filterTopics("진행중")}
          className={activeStatus === "진행중" ? "active" : ""}
        >
          진행중
        </button>
        <button
          onClick={() => filterTopics("논의중")}
          className={activeStatus === "논의중" ? "active" : ""}
        >
          논의중
        </button>
        <button
          onClick={() => filterTopics("완료")}
          className={activeStatus === "완료" ? "active" : ""}
        >
          완료
        </button>
      </div>
      {filteredTopics.map((topic) => (
        <Topic key={topic.id} {...topic} />
      ))}
      <div className="pagination">
        <span> {"< 1 2 3 >"} </span>
      </div>
    </div>
  );
};
export default TopicHolder;
