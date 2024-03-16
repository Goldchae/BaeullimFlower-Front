import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLogin from "../Login/MainLogin";
import SignUp from "../Login/SignUp";
import NotFound from "../NotFound";
import Certification from "../Login/Certification";
import Done from "../Login/Done";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLogin />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Certification" element={<Certification />}></Route>
          <Route path="/Done" element={<Done />}></Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default LoginPage;
