import React, { useState } from "react";
import axios from "axios";

const SignUpForm = () => {
  // 상태 관리를 위한 useState 훅 사용
  const [name, setName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [college, setCollege] = useState("");
  const [password, setPassword] = useState("");

  // 회원가입 처리 함수
  const handleSignUp = async (event) => {
    event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

    // 입력 값으로 회원가입 데이터 객체 생성
    const userData = {
      name,
      stuNum: studentNumber,
      college,
      password,
    };

    try {
      // axios를 사용해 POST 요청
      const response = await axios.post(
        "http://43.201.190.119:8081/auth/signup",
        userData
      );

      // 성공 시 응답 로그 출력 및 추가 처리
      console.log(response.data);
      // 여기에 로그인 후 처리를 작성하면 됩니다.
    } catch (error) {
      console.error("회원가입 실패:", error);
      if (error.response) {
        // 서버에서 응답을 받은 경우, 응답의 상태 코드와 메시지를 로그로 남깁니다.
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
