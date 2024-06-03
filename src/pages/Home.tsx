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
                    {NumberToShow ? <SrcSpan>source :</SrcSpan> : null}{" "}
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
const SrcSpan = styled.span`
  color: #fff;
  font-family: Spartan;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 208.333% */
`;
const ATag = styled.a`
  margin-left: 0.5rem;
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
  @media (min-width: 48rem) {
    text-align: left;
    color: #fff;
    font-family: Spartan;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
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
  @media (min-width: 48rem) {
    margin-bottom: 2.4rem;
    text-align: left;
    color: #fff;
    font-family: Antonio;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }
`;
const InfoCon = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 48rem) {
    grid-column: 1/2;
    grid-row: 3/5;
  }
`;
const Img = styled.img<{ size: TImg | undefined; margin: string | undefined }>`
  margin-right: auto;
  margin-left: auto;
  margin-top: ${(props) => props.margin};
  margin-bottom: ${(props) => props.margin};
  width: ${(props) => props.size?.width};
  height: ${(props) => props.size?.height};
  @media (min-width: 48rem) {
    grid-column: 1/3;
    grid-row: 1/3;
  }
`;
const Surfacee = styled.div<{ state: string; color: string | undefined }>`
  padding-bottom: 1.7rem;
  border-bottom: ${({ state, color }) =>
    state.includes("surface") ? `4px solid ${color}` : null};
  @media (min-width: 48rem) {
    border: 1px solid grey;
    background: ${(props) =>
      props.state.includes("surface") ? `${props.color}` : null};
    display: flex;
    gap: 1.7rem;
    align-items: center;
    padding: 0.8rem 0 0.8rem 2rem;
  }
  & > span {
    color: #fff;
    font-family: Spartan;
    font-size: 9px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 277.778% */
    letter-spacing: 1.929px;
    text-transform: uppercase;
  }
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
const Structuree = styled.div<{ state: string; color: string | undefined }>`
  padding-bottom: 1.7rem;
  border-bottom: ${({ state, color }) =>
    state.includes("structure") ? `4px solid ${color}` : null};
  @media (min-width: 48rem) {
    border: 1px solid grey;
    background: ${(props) =>
      props.state.includes("structure") ? `${props.color}` : null};
    display: flex;
    gap: 1.7rem;
    align-items: center;
    padding: 0.8rem 0 0.8rem 2rem;
  }
  & > span {
    color: #fff;
    font-family: Spartan;
    font-size: 9px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 277.778% */
    letter-spacing: 1.929px;
    text-transform: uppercase;
  }
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
const Overview = styled.div<{ state: string; color: string | undefined }>`
  padding-bottom: 1.7rem;
  border-bottom: ${({ state, color }) =>
    state.includes("overview") ? `4px solid ${color}` : null};
  @media (min-width: 48rem) {
    border: 1px solid grey;
    background: ${(props) =>
      props.state.includes("overview") ? `${props.color}` : null};
    display: flex;
    align-items: center;
    gap: 1.7rem;
    padding: 0.8rem 0 0.8rem 2rem;
  }
  & > span {
    color: #fff;
    font-family: Spartan;
    font-size: 9px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 277.778% */
    letter-spacing: 1.929px;
    text-transform: uppercase;
  }
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
  @media (min-width: 48rem) {
    border-bottom: none;
    flex-direction: column;
    gap: 1.6rem;
    grid-column: 2/3;
    grid-row: 3/4;
  }
`;
const MiddleMainCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.8rem;
  @media (min-width: 48rem) {
    margin-bottom: 1.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr 0.6fr 0.2fr;
    grid-column-gap: 6.9rem;
  }
`;
const Parent = styled.div`
  height: 100vh;
  padding: 2rem 2.4rem 4.7rem;
  background: #070724;
  @media (min-width: 48rem) {
    padding: 0 4rem 3.6rem 3.9rem;
  }
`;
