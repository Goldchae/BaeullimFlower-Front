import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import StartPage from "../startPage/StartPage";
//import LoginPage from "./LoginPage";
import MainLogin from "../Login/MainLogin";
import SignUp from "../Login/SignUp";
import NotFound from "../NotFound";
import Certification from "../Login/Certification";
import Done from "../Login/Done";
import TopNavBar from "../HomeMain/TopNavBar";
import SignupForm from "../Login/connect/signupApi";
import Petitions1 from "../HomeMain/Petitions/Petitions1";
import Petitions2 from "../HomeMain/Petitions/Petitions2";
import Petitions3 from "../HomeMain/Petitions/Petitions3";
import Petitions4 from "../HomeMain/Petitions/Petitions4";
import LoginUp from "../Login/LoginUp/LoginUp";
import Mypage from "../MyPage/Mypage";
import ProceedDetail from "../HomeMain/TopicDetail/ProceedDetail";
import DiscussDetail from "../HomeMain/TopicDetail/DiscussDetail";
import CompleteDetail from "../HomeMain/TopicDetail/CompleteDetail";
import StudentSupport from "../HomeMain/StudentSupport/StudentSupport";
import SignupApi from "../Login/connect/signupApi"; //

const Start = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/MainLogin");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  // StartPage 컴포넌트만 렌더링합니다.
  return <StartPage />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/LoginUp" element={<LoginUp />} />
        <Route path="/MainLogin" element={<MainLogin />} />
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/LoDiscussDetailginUp" element={<LoginUp />}></Route>
        <Route path="/Certification" element={<Certification />}></Route>
        <Route path="/Done" element={<Done />}></Route>
        <Route path="/HomeMainPage" element={<TopNavBar />}></Route>
        <Route path="/student-support" element={<Start />}></Route>
        <Route path="/test" element={<SignupApi />}></Route>
        <Route path="/Petitions1" element={<Petitions1 />}></Route>
        <Route path="/Petitions2" element={<Petitions2 />}></Route>
        <Route path="/Petitions3" element={<Petitions3 />}></Route>
        <Route path="/Petitions4" element={<Petitions4 />}></Route>
        <Route path="/Mypage" element={<Mypage />}></Route>
        <Route path="/ProceedDetail" element={<ProceedDetail />}></Route>
        <Route path="/DiscussDetail" element={<DiscussDetail />}></Route>
        <Route path="/CompleteDetail" element={<CompleteDetail />}></Route>
        <Route path="/StudentSupport" element={<StudentSupport />}></Route>
        {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
