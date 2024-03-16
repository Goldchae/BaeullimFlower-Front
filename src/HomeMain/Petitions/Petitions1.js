import React, { useState } from "react";
import "./Petitions1.css";
import PHeader from "./Pheader";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";

function Petitions1() {
  const navigate = useNavigate();
  const nextClick = () => {
    navigate("/Petitions2");
  };

  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 이메일과 동의 여부를 처리하는 로직
  };

  return (
    <div className="p1-app-container">
      <PHeader title="의견내기" />

      <div className="p1-main-container">
        <div className="p1-main-login-holder">
          <div className="personal-info-form">
            <form onSubmit={handleSubmit}>
              <section className="info">
                <h1>개인정보</h1>
                <div className="input-group">
                  <label>이름</label>
                  <span>정은체</span>
                </div>
                <div className="input-group">
                  <label>학번</label>
                  <span>2271056</span>
                </div>
              </section>

              <section className="email-consent">
                <h2>진행 상황 및 결과 이메일 수신</h2>
                <p className="warning">
                  *입력하는 각종 이메일 주소를 빠뜨리지마세요.
                </p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일"
                  required
                />
                <p className="description">
                  청원 카테고리를 위해 아래와 같이 개인정보를 수집, 이용하고자
                  합니다. 내용을 자세히 읽으신 후 동의 여부를 결정하여 주십시오.
                </p>
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                  />
                  <label htmlFor="agree">확인했습니다</label>
                </div>
              </section>

              <button type="submit" onClick={nextClick}>
                다음
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Petitions1;
