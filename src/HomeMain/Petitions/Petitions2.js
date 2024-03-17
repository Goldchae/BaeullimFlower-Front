import React, { useState } from "react";
import "./Petitions2.css";
import PHeader from "./Pheader";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";

function Petitions2() {
  const navigate = useNavigate();
  const nextClick = () => {
    navigate("/Petitions3");
  };

  const [opinionTitle, setOpinionTitle] = useState("");
  const [opinionContent, setOpinionContent] = useState("");
  const [attachedFiles, setAttachedFiles] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      opinionTitle,
      opinionContent,
      attachedFiles,
    };

    //  `formData` 서버로 보내는
    console.log("Form submitted", formData);

    // Redirect to the next page if needed
    // history.push('/next-page');
  };

  const handleFileChange = (event) => {
    setAttachedFiles([...event.target.files]);
  };

  return (
    <div className="p2-app-container">
      <PHeader title="의견내기" />

      <div className="p2-main-container">
        <div className="p2-main-login-holder">
          <div className="feedback-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="opinionTitle">의견 제목</label>
                <input
                  type="text"
                  id="opinionTitle"
                  value={opinionTitle}
                  onChange={(e) => setOpinionTitle(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="opinionContent">의견 내용</label>
                <textarea
                  id="opinionContent"
                  value={opinionContent}
                  onChange={(e) => setOpinionContent(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="attachedFiles">첨부 파일</label>
                <input
                  type="file"
                  id="attachedFiles"
                  multiple
                  onChange={handleFileChange}
                />
              </div>
              <button type="submit" onClick={nextClick}>
                완료
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Petitions2;
