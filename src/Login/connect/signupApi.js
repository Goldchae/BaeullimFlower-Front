import React, { useState } from "react";
import axios from "axios";

function SignupForm() {
  const [name, setName] = useState("");
  const [stuNum, setStuNum] = useState("");
  const [college, setCollege] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const endpoint = "http://example.com/auth/signup";

    axios
      .post(endpoint, { name, stuNum, college, password })
      .then((response) => {
        // 처리 로직
        console.log("Signup success:", response.data);
      })
      .catch((error) => {
        // 오류 처리 로직
        console.error("Signup error:", error);
      });
  };

  return (
    <div>
      {/* 입력 필드와 버튼을 렌더링 */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름"
      />
      <input
        type="text"
        value={stuNum}
        onChange={(e) => setStuNum(e.target.value)}
        placeholder="학번"
      />
      <input
        type="text"
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        placeholder="단과대학"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
      />
      <button onClick={handleSignup}>회원가입</button>
    </div>
  );
}

export default SignupForm;
