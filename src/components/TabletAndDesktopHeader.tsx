import React from "react";
import data from "../data.json";
import styled from "styled-components";

export default function TabletAndDesktopHeader() {
  return (
    <Container>
      {data.map((el) => (
        <span>{el.name}</span>
      ))}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  & > span {
    color: #fff;
    font-family: Spartan;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 227.273% */
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;
