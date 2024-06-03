import React from "react";
import styled from "styled-components";
import { Tdata } from "../types/Type";

export default function Footer({ finded }: { finded: Tdata | undefined }) {
  return (
    <Foot>
      <Cons>
        <p>ROTATION TIME</p>
        <span>{finded?.rotation}</span>
      </Cons>
      <Cons>
        <p>REVOLUTION TIME</p>
        <span>{finded?.revolution}</span>
      </Cons>
      <Cons>
        <p>radius</p>
        <span>{finded?.radius}</span>
      </Cons>
      <Cons>
        <p>AVERAGE TEMP.</p>
        <span>{finded?.temperature}</span>
      </Cons>
    </Foot>
  );
}

const Cons = styled.div`
  border: 1px solid grey;
  padding: 0.9rem 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 48rem) {
    align-items: flex-start;
    gap: 0.6rem;
    width: 100%;
    flex-direction: column;
    padding: 1.6rem 0 1.9rem 1.5rem;
  }
  & > p {
    color: #fff;
    font-family: Spartan;
    font-size: 8px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px; /* 200% */
    letter-spacing: 0.727px;
    text-transform: uppercase;
    @media (min-width: 48rem) {
      opacity: 0.5;
      color: #fff;
      font-family: Spartan;
      font-size: 8px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px; /* 200% */
      letter-spacing: 0.727px;
      text-transform: uppercase;
    }
  }
  & > span {
    color: #fff;
    text-align: right;
    font-family: Antonio;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.75px;
    text-transform: uppercase;
    @media (min-width: 48rem) {
      color: #fff;
      font-family: Antonio;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.9px;
      text-transform: uppercase;
    }
  }
`;
const Foot = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  @media (min-width: 48rem) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
