import React, { useState } from "react";
import styled from "styled-components";
import { object, string, ValidationError } from "yup";
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

const StyledError = styled.p`
  color: ${(props) => props.theme.colors.red};
  margin: 0;
  font-size: 12px;
  font-weight: 600;
`;

interface ILoginForm {
  onSubmit?: (email: string, password: string) => void;
}

const loginSchema = object({
  password: string().required("Don't forget your password 😢"),
  email: string().email().required("Email is required"),
});

export default function LoginForm({ onSubmit }: ILoginForm) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<ValidationError | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    try {
      await loginSchema.validate({ email, password });
      onSubmit?.(email, password);
    } catch (error) {
      if (error instanceof ValidationError) setError(error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        placeholder="Email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        error={error?.path === "email"}
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        error={error?.path === "password"}
      />
      {error?.message && <StyledError>{error.message}</StyledError>}
      <Button variant="primary">Log In</Button>
    </StyledForm>
  );
}
