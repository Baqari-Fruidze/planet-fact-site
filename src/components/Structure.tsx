import { Tdata } from "../types/Type";
import styled from "styled-components";
import { useMediaQuery } from "@uidotdev/usehooks";
import { TImg } from "../types/Img";
import source from "/assets/icon-source.svg";

export default function Structure({ finded }: { finded: Tdata | undefined }) {
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 48rem) and (max-width : 90rem)"
  );
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767px)");
  return (
    <>
      <Image
        src={finded?.images.internal}
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
            : null
        }
      />
      <InfoCon>
        <HOne>{finded?.name}</HOne>
        <Para>{finded?.structure.content}</Para>
        <Span>
          Source : <ATag href={finded?.structure.source}>Wikipedia</ATag>
          <img src={source} alt="" />
        </Span>
      </InfoCon>
    </>
  );
}
const Image = styled.img<{
  size: TImg | undefined;
  margin: string | undefined | null;
}>`
  margin-top: ${(props) => props.margin};
  margin-bottom: ${(props) => props.margin};
  margin-left: auto;
  margin-right: auto;
  width: ${(props) => props.size?.width};
  height: ${(props) => props.size?.height};
  @media (min-width: 48rem) {
    grid-column: 1/3;
    grid-row: 1/3;
  }
  @media (min-width: 90rem) {
    grid-column: 1/3;
    grid-row: 1/9;
  }
`;
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
  @media (min-width: 48rem) {
    text-align: left;
    color: #fff;
    font-family: Spartan;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
  @media (min-width: 90rem) {
    margin-bottom: 2.4rem;
    color: #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Spartan;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
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
  @media (min-width: 90rem) {
    grid-column: 3/4;
    grid-row: 1/5;
    margin-bottom: 3rem;
  }
`;
