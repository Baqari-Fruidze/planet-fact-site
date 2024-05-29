import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "@uidotdev/usehooks";
import data from "../data.json";
import { Tdata } from "../Typed";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const NumberToShow = useMediaQuery("only screen and (min-width : 48rem)");
  const [overview, setOverview] = useState<string[]>(["overview"]);
  const location = useLocation();
  console.log(location.pathname);

  return (
    <Parent>
      <MiddleMainCon>
        {data.map((planet) => {
          return (
            <>
              <OverviewStructureSurface>
                <Overview>
                  {NumberToShow ? <span>01</span> : null}
                  <p>Overview</p>
                </Overview>
                <Structure>
                  {NumberToShow ? <span>02</span> : null}
                  <p>Structure</p>
                </Structure>
                <Surface>
                  {NumberToShow ? <span>03</span> : null}
                  <p>Surface</p>
                </Surface>
              </OverviewStructureSurface>
              <img src={planet.name} alt="" />
            </>
          );
        })}
      </MiddleMainCon>
    </Parent>
  );
}
const Img = styled.img``;
const Surface = styled.div`
  padding-bottom: 1.7rem;
  border-bottom: 4px solid #6d2ed5;
  & p {
    color: #fff;
    text-align: center;
    font-family: Spartan;
    font-size: 9px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.929px;
    text-transform: uppercase;
    opacity: 0.5;
  }
`;
const Structure = styled.div`
  padding-bottom: 1.7rem;
  border-bottom: 4px solid #6d2ed5;
  & p {
    color: #fff;
    text-align: center;
    font-family: Spartan;
    font-size: 9px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.929px;
    text-transform: uppercase;
    opacity: 0.5;
  }
`;
const Overview = styled.div`
  padding-bottom: 1.7rem;
  border-bottom: 4px solid #6d2ed5;
  & p {
    color: #fff;
    text-align: center;
    font-family: Spartan;
    font-size: 9px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.929px;
    text-transform: uppercase;
  }
`;
const OverviewStructureSurface = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem 0.05rem 1rem;
  border-bottom: 1px solid grey;
  margin-bottom: 3rem;
`;
const MiddleMainCon = styled.div`
  display: flex;
  flex-direction: column;
`;
const Parent = styled.div`
  padding: 2rem 2.4rem 4.7rem;
  background: #070724;
`;
