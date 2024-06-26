import React from "react";
import arrowRight from "/assets/icon-chevron.svg";
import burger from "/assets/icon-hamburger.svg";
import styled from "styled-components";
import data from "../data.json";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";
import TabletAndDesktopHeader from "./TabletAndDesktopHeader";

export default function Header({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const ArrowToHide = useMediaQuery("only screen and (max-width : 48rem)");
  const BurgerToHide = useMediaQuery("only screen and (max-width : 48rem)");
  const BurgerTabletAndDesktop = useMediaQuery(
    "only screen and (min-width : 48rem)"
  );
  return (
    <Backk>
      <BurgerMain>
        <Head>
          <HOne>THE PLANETS</HOne>
          {BurgerToHide ? (
            <img src={burger} alt="" onClick={() => setShow(!show)} />
          ) : null}
        </Head>
        {show ? (
          <Planets>
            {data.map((el) => (
              <Planet name={el.name}>
                <CircelAndPlanetNameCon onClick={() => setShow(!show)}>
                  <Circle name={el.name}></Circle>
                  <Link to={`/${el.name.toLowerCase()}`}>{el.name}</Link>
                </CircelAndPlanetNameCon>
                {ArrowToHide ? <img src={arrowRight} alt="" /> : null}
              </Planet>
            ))}
          </Planets>
        ) : null}
        {BurgerTabletAndDesktop ? <TabletAndDesktopHeader /> : null}
      </BurgerMain>
    </Backk>
  );
}
const CircelAndPlanetNameCon = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  & > a {
    text-decoration: none;
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
const Circle = styled.div<{ name: string }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({ name }) =>
    name === "Mercury"
      ? "rgba(222, 244, 252, 1)"
      : name === "Venus"
      ? "rgba(247, 204, 127, 1)"
      : name === "Earth"
      ? "rgba(84, 91, 254, 1)"
      : name === "Mars"
      ? "rgba(255, 106, 69, 1)"
      : name === "Jupiter"
      ? "rgba(236, 173, 122, 1)"
      : name === "Saturn"
      ? "rgba(252, 203, 107, 1)"
      : name === "Uranus"
      ? "rgba(101, 240, 213, 1)"
      : name === "Neptune"
      ? "rgba(73, 126, 250, 1)"
      : "red"};
`;
const Planet = styled.div<{ name: string }>`
  padding: 2rem 0 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${(props) =>
    props.name !== "Neptune" ? "1px solid grey" : null};
`;
const Planets = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem 0.8rem 6rem 0;
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
  @media (min-width: 48rem) {
    justify-content: center;
    padding-bottom: 3.9rem;
  }
  @media (min-width: 90rem) {
    padding-bottom: 0.5rem;
    align-items: center;
  }
`;
const BurgerMain = styled.div`
  width: 100%;
  background: rgba(7, 7, 36, 1);
  padding: 1.6rem 2.4rem 1.75rem;
  @media (min-width: 48rem) {
    padding: 3.2rem 5.3rem 2.7rem;
    max-width: 100rem;
    margin: 0 auto;
  }
  @media (min-width: 90rem) {
    padding: 2.2rem 4.1rem 1.7rem 3.2rem;
    display: flex;
    justify-content: space-between;
    max-width: none;
    border-bottom: 1px solid grey;
  }
`;
const Backk = styled.div`
  width: 100%;
  background: rgba(7, 7, 36, 1);
`;
