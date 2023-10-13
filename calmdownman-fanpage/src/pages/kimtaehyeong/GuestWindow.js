import styled, { css } from "styled-components";

const GuestAll = styled.div`
  background-color: skyblue;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px;
`;

const GuestSmall = styled.div`
  background-color: blue;
  color: white;
  font-size: 20px;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 20px;
  &:hover {
    background-color: green;
    width: 110px;
    height: 110px;
    border-radius: 120px;
    transition: 0.5s;
  }
`;

const GuestLarge = styled.div`
  background-color: green;
  width: 110px;
  height: 110px;
  border-radius: 120px;
  transition: 0.5s;
`;

export { GuestAll, GuestSmall, GuestLarge };
