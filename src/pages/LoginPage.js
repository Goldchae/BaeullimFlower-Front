import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLogin from "../Login/MainLogin";
import SignUp from "../Login/SignUp";
import NotFound from "../NotFound";
import Certification from "../Login/Certification";
import Done from "../Login/Done";
import TopNavBar from "../HomeMain/TopNavBar";
import Start from "../startPage/StartPage";
import SignupForm from "../Login/connect/signupApi";
import Petitions1 from "../HomeMain/Petitions/Petitions1";
import Petitions2 from "../HomeMain/Petitions/Petitions2";
import Petitions3 from "../HomeMain/Petitions/Petitions3";
import LoginUp from "../Login/LoginUp/LoginUp";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLogin />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/LoginUp" element={<LoginUp />}></Route>
          <Route path="/Certification" element={<Certification />}></Route>
          <Route path="/Done" element={<Done />}></Route>
          <Route path="/HomeMainPage" element={<TopNavBar />}></Route>
          <Route path="/student-support" element={<Start />}></Route>
          <Route path="/test" element={<SignupForm />}></Route>
          <Route path="/Petitions1" element={<Petitions1 />}></Route>
          <Route path="/Petitions2" element={<Petitions2 />}></Route>
          <Route path="/Petitions3" element={<Petitions3 />}></Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default LoginPage;
