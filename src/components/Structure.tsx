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
const Image = styled.img<{ size: TImg | undefined }>`
  margin: 0 auto;
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
