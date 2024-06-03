import React from "react";
import data from "../data.json";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function TabletAndDesktopHeader() {
  return (
    <Container>
      {data.map((el, index) => (
        <Link to={`/${el.name.toLowerCase()}`} key={index}>
          {el.name}
        </Link>
      ))}
    </Container>
  );
}
const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 3.3rem;
  & > a {
    text-decoration: none;
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
