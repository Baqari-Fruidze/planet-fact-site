import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "@uidotdev/usehooks";
import data from "../data.json";
import { Tdata } from "../types/Typed";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Tsizes } from "../types/Sizes";
import source from "/assets/icon-source.svg";
import Footer from "../components/Footer";
import { TImg } from "../types/Img";
import Structure from "../components/Structure";
import Surface from "../components/Surface";
import { MarginTopBottom } from "../types/MarginTopBottom";

export default function Home({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  useEffect(() => {
    const foo = data.find((el) => el.name === location.pathname.slice(1));
    if (!foo) {
      navigate("/earth");
    }
  }, []);
  const NumberToShow = useMediaQuery("only screen and (min-width : 48rem)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 48rem) and (max-width : 90rem)"
  );
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767px)");
  const isLargeDevice = useMediaQuery("only screen (min-width : 1441px)");
  const [overview, setOverview] = useState<string>("overview");
  const location = useLocation();
  const finded = data.find(
    (el) => el.name.toLowerCase() === location.pathname.slice(1)
  );

  return (
    <>
      {show ? null : (
        <Parent>
          <MiddleMainCon>
            <OverviewStructureSurface>
              <Overview
                onClick={() => setOverview("overview")}
                state={overview}
                color={finded?.color}
              >
                {NumberToShow ? <span>01</span> : null}
                <p>Overview</p>
              </Overview>
              <Structuree
                onClick={() => setOverview("structure")}
                state={overview}
                color={finded?.color}
              >
                {NumberToShow ? <span>02</span> : null} <p>Structure</p>
              </Structuree>
              <Surfacee
                onClick={() => setOverview("surface")}
                state={overview}
                color={finded?.color}
              >
                {NumberToShow ? <span>03</span> : null} <p>Surface</p>
              </Surfacee>
            </OverviewStructureSurface>
            {overview === "overview" ? (
              <>
                <Img
                  src={finded?.images.planet}
                  alt=""
                  size={
                    isSmallDevice
                      ? finded?.size.mobile
                      : isMediumDevice
                      ? finded?.size.tablet
                      : finded?.size.desktop
                  }
                  margin={
                    isSmallDevice
                      ? finded?.marginTopBottom?.mobile
                      : isMediumDevice
                      ? finded?.marginTopBottom?.tablet
                      : finded?.marginTopBottom?.desktop
                  }
                />
                <InfoCon>
                  <HOne>{finded?.name}</HOne>
                  <Para>{finded?.overview.content}</Para>
                  <Span>
                    <ATag href={finded?.overview.source}>Wikipedia</ATag>
                    <img src={source} alt="" />
                  </Span>
                </InfoCon>
              </>
            ) : overview === "structure" ? (
              <Structure finded={finded} />
            ) : (
              <Surface finded={finded} />
            )}
          </MiddleMainCon>
          <Footer finded={finded} />
        </Parent>
      )}
    </>
  );
}
const ATag = styled.a`
  opacity: 0.5;
  color: #fff;
  font-family: Spartan;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  text-decoration-line: underline;
`;
const Span = styled.span`
  text-align: center;
  color: #fff;
  font-family: Spartan;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`;
const Para = styled.p`
  color: #fff;
  text-align: center;
  font-family: Spartan;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 1rem;
`;
const HOne = styled.h1`
  color: #fff;
  text-align: center;
  font-family: Antonio;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
`;
const InfoCon = styled.div`
  display: flex;
  flex-direction: column;
`;
const Img = styled.img<{ size: TImg | undefined; margin: string | undefined }>`
  margin-right: auto;
  margin-left: auto;
  margin-top: ${(props) => props.margin};
  margin-bottom: ${(props) => props.margin};
  width: ${(props) => props.size?.width};
  height: ${(props) => props.size?.height};
`;
const Surfacee = styled.div<{ state: string; color: string }>`
  padding-bottom: 1.7rem;
  border-bottom: ${({ state, color }) =>
    state.includes("surface") ? `4px solid ${color}` : null};
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
    opacity: ${(props) => (props.state.includes("surface") ? "1" : "0.5")};
  }
`;
const Structuree = styled.div<{ state: string; color: string }>`
  padding-bottom: 1.7rem;
  border-bottom: ${({ state, color }) =>
    state.includes("structure") ? `4px solid ${color}` : null};
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
    opacity: ${(props) => (props.state.includes("structure") ? "1" : "0.5")};
  }
`;
const Overview = styled.div<{ state: string; color: string }>`
  padding-bottom: 1.7rem;
  border-bottom: ${({ state, color }) =>
    state.includes("overview") ? `4px solid ${color}` : null};
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
    opacity: ${(porps) => (porps.state.includes("overview") ? "1" : "0.5")};
  }
`;
const OverviewStructureSurface = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem 0.05rem 1rem;
  border-bottom: 1px solid grey;
  /* margin-bottom: 3rem; */
`;
const MiddleMainCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.8rem;
`;
const Parent = styled.div`
  height: 100vh;
  padding: 2rem 2.4rem 4.7rem;
  background: #070724;
`;
