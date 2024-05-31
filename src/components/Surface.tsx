import React from "react";
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
  const isLargeDevice = useMediaQuery("only screen (min-width : 1441px)");
  return (
    <>
      <ImageContainer>
        <Image
          src={finded?.images.planet}
          alt=""
          size={
            isSmallDevice
              ? finded?.size.mobile
              : isMediumDevice
              ? finded?.size.tablet
              : finded?.size.desktop
          }
        />
      </ImageContainer>

      <ImageCenter
        src={finded?.images.geology}
        alt=""
        sizeSecond={
          isSmallDevice
            ? finded?.sizeSurface.mobile
            : isMediumDevice
            ? finded?.sizeSurface.tablet
            : finded?.sizeSurface.desktop
        }
      />
      <InfoCon>
        <HOne>{finded?.name}</HOne>
        <Para>{finded?.geology.content}</Para>
        <Span>
          Source : <ATag href={finded?.geology.source}>Wikipedia</ATag>
          <img src={source} alt="" />
        </Span>
      </InfoCon>
    </>
  );
}
const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6.7rem;
`;
const ImageCenter = styled.img<{ sizeSecond: TImg }>`
  transform: translateY(-16%);
  left: 42%;
  top: 31%;
  position: absolute;
  margin: 0 auto;
  width: ${(props) => props.sizeSecond.width};
  height: ${(props) => props.sizeSecond.height};
`;
const Image = styled.img<{ size: TImg | undefined }>`
  width: ${(props) => props.size?.width};
  height: ${(props) => props.size?.height};
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
  line-height: 25px; /* 208.333% */
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
