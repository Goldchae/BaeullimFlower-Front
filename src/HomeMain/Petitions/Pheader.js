import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ExitPopUp from "./ExitPopUp";

const HeaderContainer = styled.header`
  color: white;
`;

const TopRow = styled.div`
  background-color: #006540; /* Adjust the color as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const BottomRow = styled.div`
  background-color: white; /* Change to white background */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem; /* Adjust padding as needed */
`;

const TopTitle = styled.h1`
  font-size: 1.5rem;
  color: white; /* White color for the text in the TopRow */
  margin: 0;
  flex-grow: 1; /* Ensure title takes the available space */
  text-align: left; /* Align to the left */
`;

const BottomTitle = styled(TopTitle)`
  color: #006400; /* Dark green color for the text in the BottomRow */
  text-align: center; /* Center align the text */
`;

const Button = styled.button`
  background: none;
  border: none;
  color: #006400; /* Green color for the buttons in the BottomRow */
  cursor: pointer;
  font-size: 1.5rem; /* Adjust the size as you prefer */

  &:focus {
    outline: none;
  }
`;

function PHeader({ title }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/HomeMainPage");
  };

  return (
    <HeaderContainer>
      <TopRow>
        <TopTitle>배울림꽃</TopTitle>
      </TopRow>
      <BottomRow>
        <Button onClick={handleBack}>⬅️</Button>
        <BottomTitle>{title}</BottomTitle>
        <ExitPopUp />
      </BottomRow>
    </HeaderContainer>
  );
}

export default PHeader;
