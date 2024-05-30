import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "@uidotdev/usehooks";
import data from "../data.json";
import { Tdata } from "../Typed";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const foo = data.find((el) => el.name === location.pathname);
    if (!foo) {
      navigate("/earth");
    }
  }, []);
  const NumberToShow = useMediaQuery("only screen and (min-width : 48rem)");
  const [overview, setOverview] = useState<string>("overview");
  const location = useLocation();
  console.log(location.pathname);
  const finded = data.find(
    (el) => el.name.toLowerCase() === location.pathname.slice(1)
  );
  console.log(finded);

  return (
    <Parent>
      <MiddleMainCon>
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
        <Img src={finded?.images.planet} alt="" mobSize={finded?.size.mobile} />
      </MiddleMainCon>
    </Parent>
  );
}
const Img = styled.img<mobSize:{width:string}>``;
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
