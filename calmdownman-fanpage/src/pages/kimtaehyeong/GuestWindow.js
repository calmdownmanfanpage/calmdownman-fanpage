import React, { useState } from "react";
import styled, { css } from "styled-components";
import Course from "./GuestWiki/Course";

const GuestWindow = () => {
  const ClubSmall = styled.button`
    background-color: ${({ active }) => (active ? "red" : "blue")};
    color: white;
    font-size: 20px;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 20px;
    transition: 0.5s;
    &:hover {
      background-color: green;
      width: 120px;
      height: 120px;
    }
  `;

  const GuestSmall = styled.button`
    background-color: ${({ active }) => (active ? "red" : "skyblue")};
    color: white;
    font-size: 20px;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 20px;
    transition: 0.5s;
    &:hover {
      background-color: green;
      width: 120px;
      height: 120px;
    }
  `;

  const [content1, setContent1] = useState(false);
  const [content2, setContent2] = useState(false);

  const handleClickButton = (e) => {
    const { name } = e.target;
    if (name === "button1") {
      setContent1(true);
      setContent2(false);
    } else if (name === "button2") {
      setContent1(false);
      setContent2(true);
    } else if (name === "원래대로") {
      setContent1(false);
      setContent2(false);
    }
  };

  console.log(content1, content2);

  return (
    <div>
      <ClubSmall name="button1" onClick={handleClickButton} active={content1}>
        연습단체1
      </ClubSmall>
      <ClubSmall name="button2" onClick={handleClickButton} active={content2}>
        연습단체2
      </ClubSmall>
      <p>---임시구분선---</p>
      <GuestSmall active={content1}>인원1</GuestSmall>
      <GuestSmall active={content1 || content2}>인원2</GuestSmall>
      <GuestSmall active={content2}>인원3</GuestSmall>
      <p>---임시구분선---</p>
      <GuestSmall name="원래대로" onClick={handleClickButton}>
        원래대로
      </GuestSmall>
    </div>
  );
};

export default GuestWindow;
