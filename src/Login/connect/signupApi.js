import React, { useState } from "react";
import axios from "axios";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [college, setCollege] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();

    const userData = {
      name,
      stuNum: studentNumber,
      college,
      password,
    };

    try {
      const response = await axios.post(
        "http://43.201.190.119:8081/auth/signup",
        userData
      );

      console.log(response.data);
    } catch (error) {
      console.error("회원가입 실패:", error);
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      }
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름"
      />
      <input
        type="text"
        value={studentNumber}
        onChange={(e) => setStudentNumber(e.target.value)}
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
      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignUpForm;
