import React, { useState } from "react";
import "./petition.css"; // Make sure to create a SubmitForm.css file for styles
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";

const Petition = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isAgreed) {
      // Handle the submit action here
      console.log("Form submitted");
    } else {
      // You can alert the user to agree to the conditions before submitting
      alert("Please agree to the conditions before submitting.");
    }
  };
  const navigate = useNavigate();

  const PhandleClick = () => {
    if (isAgreed) {
      navigate("/Petitions1");
    }
  };

  return (
    <div>
      <div className="p-main-container">
        <div className="p-main-holder">
          <div className="petition-image">
            <img alt="안내글" src="/image/main/petition.png" />
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="submit-form">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
          />
          <span className="checkbox-label">동의합니다.</span>
        </label>

        <button
          type="submit"
          className="submit-button"
          disabled={!isAgreed}
          onClick={PhandleClick}
        >
          청원하기
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Petition;
