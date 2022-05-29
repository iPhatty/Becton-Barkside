import React, { useState } from "react";
import styled from "styled-components";
import Button, { StyledButton } from "../../components/Button";
import Input, { StyledInput } from "../../components/Input";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${StyledInput}:not(:last-child) {
    margin-bottom: 16px;
  }
  ${StyledButton} {
    margin-top: 32px;
  }
`;

interface ILoginForm {
  onSubmit?: (email: string, password: string) => void;
}

export default function LoginForm({ onSubmit }: ILoginForm) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(email, password);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        placeholder="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="primary">Log In</Button>
    </StyledForm>
  );
}
