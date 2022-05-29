import React from "react";
import styled from "styled-components";

type align = "left" | "center" | "right";

interface IStyledHeader {
  align: align;
}

const StyledHeader = styled.h1<IStyledHeader>`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 28px;
  text-align: ${(props) => props.align};
`;

interface IHeader {
  children: React.ReactNode;
  align?: align;
}

export default function Header({ children, align = "center" }: IHeader) {
  return <StyledHeader align={align}>{children}</StyledHeader>;
}
