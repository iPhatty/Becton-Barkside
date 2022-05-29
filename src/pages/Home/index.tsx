import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button, { StyledButton } from '../../components/Button'
import Header from '../../components/Header'

const Background = styled.div`
  width: 100%;
  flex: 1;
  background: url('src/images/Home-414.png');
  background-size: cover;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 44px;

  position: absolute;
  min-height: 400px;
  width: 100%;
  left: 0px;
  bottom: 0px;

  background: rgba(231, 229, 229, 0.8);
  backdrop-filter: blur(4px);
  border-radius: 42px 42px 0px 0px;
`

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${StyledButton}:first-child:not(:last-child) {
    margin-bottom: 28px;
  }
`

const Paragraph = styled.p`
  text-align: center;
`

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
`

export function Home() {
  return (
    <Background>
      <Outlet />
    </Background>
  )
}

export function MainMenu() {
  const navigate = useNavigate()
  return (
    <Frame>
      <header>
        <Header>Beckton Barkside</Header>
        <Paragraph>Community for the dog lovers of Beckton Parkside</Paragraph>
      </header>
      <Actions>
        <Button variant='primary' onClick={() => navigate('/login')}>
          Log In
        </Button>
        <Button variant='secondary'>Sign Up</Button>
      </Actions>
    </Frame>
  )
}

export function Login() {
  return (
    <Frame>
      <header>
        <Header>Welcome Back</Header>
      </header>
      <Actions>
        <Button variant='primary'>Log In</Button>
      </Actions>
      <Paragraph>
        No account? <StyledLink to="/sign-up">Sign up here</StyledLink>
      </Paragraph>
    </Frame>
  )
}
