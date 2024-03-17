import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./SignUp.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    setIsEmailValid(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isFormValid = () => {
    return email && password && isEmailValid;
  };

  return (
    <div className="main-container">
      <div className="su-main-login-holder">
        <br />
        <div className="signup-form">
          <h1>간편한 회원가입을</h1>
          <h1>진행합니다.</h1>
          <br />
          <br />
          <div className="input-group">
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              onBlur={validateEmail}
              className={isEmailValid ? "valid" : ""}
              placeholder="이메일"
            />
            <button
              onClick={validateEmail}
              className={`check-button ${isEmailValid ? "valid" : ""}`}
            >
              중복확인
            </button>
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="비밀번호"
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Link to="/Certification">
            <button className={`next-button ${isFormValid() ? "valid" : ""}`}>
              다음
            </button>
          </Link>
          <Link to="/">
            <h6>뒤로가기</h6>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
