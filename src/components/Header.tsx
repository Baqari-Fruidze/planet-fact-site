import React from "react";
import arrowRight from "/assets/icon-chevron.svg";
import burger from "/assets/icon-hamburger.svg";
import source from "/assets/icon-source.svg";
import styled from "styled-components";

export default function Header() {
  return (
    <BurgerMain>
      <Head>
        <HOne>THE PLANETS</HOne>
        <img src={burger} alt="" />
      </Head>
      <Planets>
        <Planet>
          <CircelAndPlanetNameCon>
            <Circle></Circle>
            <p>MERCURY</p>
          </CircelAndPlanetNameCon>
          <img src={arrowRight} alt="" />
        </Planet>
      </Planets>
    </BurgerMain>
  );
}
const CircelAndPlanetNameCon = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  & > p {
    color: #fff;
    text-align: center;
    font-family: Spartan;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 166.667% */
    letter-spacing: 1.364px;
    text-transform: uppercase;
  }
`;
const Circle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: rgba(222, 244, 252, 1);
`;
const Planet = styled.div`
  padding: 2rem 0 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid grey;
`;
const Planets = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem 0.8rem 0 0;
`;
const HOne = styled.h1`
  color: #fff;
  font-family: Antonio;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.05px;
  text-transform: uppercase;
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.7rem;
  border-bottom: 1px solid gray;
`;
const BurgerMain = styled.div`
  width: 100%;
  background: rgba(7, 7, 36, 1);
  padding: 1.6rem 2.4rem 6rem;
`;
