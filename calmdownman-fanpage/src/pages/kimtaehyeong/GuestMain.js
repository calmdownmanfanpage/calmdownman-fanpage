import { GuestAll, ClubAll, ClubAfter } from "./GuestWindow";
import React, { useState } from "react";
import styled, { css } from "styled-components";

function GuestMain() {
  const [content, setContent] = useState();

  const handleClick = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: "1",
    second: "2",
    third: "3",
  };
  console.log(ClubAfter);
  return (
    <>
      <ClubAfter onClick={handleClick}>연습</ClubAfter>
    </>
  );
}

export default GuestMain;
