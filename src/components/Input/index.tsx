import React from "react";
import styled from "styled-components";

interface IStyledInput {
  error?: boolean;
}

export const StyledInput = styled.input<IStyledInput>`
  border: ${(props) =>
    props.error
      ? `1px solid ${props.theme.colors.red}`
      : "1px solid transparent"};
  padding: 16px;
  border-radius: 4px;
  font-family: inherit;
  color: ${(props) => props.theme.colors.black};
`;

interface IInput {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password" | "email";
  name?: string;
  error?: boolean;
}

export default function Input({
  error,
  onChange,
  placeholder = "Insert text",
  type = "text",
}: IInput) {
  return (
    <StyledInput
      error={error}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
}
