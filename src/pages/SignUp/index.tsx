import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Header from "../../components/Header";
import { StyledForm } from "../MainMenu/LoginForm";
import styled from "styled-components";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password, passwordConfirm);
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
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
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
