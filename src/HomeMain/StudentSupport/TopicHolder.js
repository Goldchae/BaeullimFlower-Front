import React, { useState } from "react";
import Topic from "./Topic";
import "./TopicHolder.css";

const TopicData = [
  {
    id: 1,
    category: "상생지원",
    title: "진행중1 건의",
    startDate: "2024.03.15",
    endDate: "2024.03.31",
    daysRemaining: 15,
    agreementPercent: 40,
    status: "진행중",
  },
  {
    id: 2,
    category: "상생지원",
    title: "완료 건의",
    startDate: "2024.03.15",
    endDate: "2024.03.31",
    daysRemaining: 15,
    agreementPercent: 40,
    status: "완료",
  },
  {
    id: 3,
    category: "상생지원",
    title: "진행중2 건의",
    startDate: "2024.03.15",
    endDate: "2024.03.31",
    daysRemaining: 15,
    agreementPercent: 40,
    status: "진행중",
  },
  {
    id: 4,
    category: "상생지원2",
    title: "논의중 건의",
    startDate: "2024.03.15",
    endDate: "2024.03.31",
    daysRemaining: 15,
    agreementPercent: 40,
    status: "논의중",
  },
];

const TopicHolder = () => {
  const [filteredTopics, setFilteredTopics] = useState(TopicData);
  const [activeStatus, setActiveStatus] = useState("all"); // 'all', '진행중', '논의중', '완료'

  const filterTopics = (status) => {
    setActiveStatus(status);
    if (status === "all") {
      setFilteredTopics(TopicData);
    } else {
      setFilteredTopics(TopicData.filter((topic) => topic.status === status));
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
        {/* Pagination component/logic will go here */}
        <span> {"< 1 2 3 >"} </span>
      </div>
    </div>
  );
};
export default TopicHolder;
