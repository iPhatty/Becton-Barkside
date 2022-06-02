import React, { useState } from "react";
import { Link } from "react-router-dom";
import { object, string, ValidationError } from "yup";
import { toast } from "react-toastify";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Header from "../../components/Header";
import { StyledForm } from "../MainMenu/LoginForm";
import { useAuth } from "../../utils/authContext";

const Background = styled.div`
  width: 100%;
  flex: 1;
  background: url("src/images/Signup-414.png");
  background-size: cover;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  padding: 44px;

  position: absolute;
  left: 12px;
  right: 12px;
  top: 50px;
  bottom: 50px;

  background: rgba(29, 29, 29, 0.75);
  border-radius: 42px;

  color: ${(props) => props.theme.colors.white};
`;

const Paragraph = styled.p`
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.secondary};
`;

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const auth = useAuth();

  const signupSchema = object({
    passwordConfirm: string().required("Confirm your password 😢"),
    password: string().required("Don't forget your password 😢"),
    email: string().email().required("Email is required"),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signupSchema.validate({
        email,
        password,
        passwordConfirm,
      });
      if (password !== passwordConfirm)
        return toast.error("Passwords don't match", {
          toastId: "signup-error-password-match",
        });
      await auth.signUp(email, password);
    } catch (error) {
      if (error instanceof ValidationError) {
        setError(error?.path ?? null);
        toast.error(error.message, {
          toastId: error.message,
          autoClose: 3000,
        });
      }
      if (error instanceof Error) toast.error(error.message);
    }
  };

  return (
    <Background>
      <Frame>
        <header>
          <Header>Join the Barkside</Header>
          <Paragraph>
            We will never share your personal details with third party
            organisations
          </Paragraph>
        </header>
        <StyledForm onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            error={error === "email"}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            error={error === "password"}
          />
          <Input
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            error={error === "passwordConfirm"}
          />
          <Button variant="secondary">Create account</Button>
        </StyledForm>
        <Paragraph>
          Already have an account?{" "}
          <StyledLink to="/login">Log in here</StyledLink>
        </Paragraph>
      </Frame>
    </Background>
  );
}
