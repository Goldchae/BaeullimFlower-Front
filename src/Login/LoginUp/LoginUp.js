import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginUp.css";
import { useNavigate } from "react-router-dom";

function LoginUp() {
  const navigate = useNavigate();

  const loginClick = () => {
    navigate("/HomeMainPage");
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const validateUsername = () => {
    // 여기에 사용자 이름 유효성 검사 로직 구현
    // 단순 예시를 위해 모든 입력을 유효한 것으로 가정
    setIsUsernameValid(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isFormValid = () => {
    return username && password && isUsernameValid;
  };

  return (
    <div className="loginup-container">
      <div className="loginup-holder">
        <div className="loginup-form">
          <h1>반가워요!</h1>
          <h2>학번으로 로그인해주세요.</h2>
          <div className="input-group">
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              onBlur={validateUsername}
              className={isUsernameValid ? "valid" : ""}
              placeholder="학번"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="비밀번호"
            />
          </div>
          <div className="actionup-group">
            <label className="checkbox-container">
              자동 로그인
              <input type="checkbox" />
            </label>
            <Link to="/reset-password">
              <h6>비밀번호를 잊으셨나요?</h6>
            </Link>
          </div>
          <button
            className={`loginup-button ${isFormValid() ? "valid" : ""}`}
            onClick={loginClick}
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginUp;
