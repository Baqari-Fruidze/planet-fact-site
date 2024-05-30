import React from "react";
import { Tdata } from "../types/Type";
import styled from "styled-components";

export default function Structure({ finded }: { finded: Tdata | undefined }) {
  return (
    <>
      <img src={finded?.images.internal} alt="" />
      <Hone>hello world</Hone>
    </>
  );
}
const Hone = styled.h1`
  color: red;
`;
