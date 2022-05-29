import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../../components/Header'
import styled from 'styled-components'

const Background = styled.div`
  width: 100%;
  flex: 1;
  background: url('src/images/Signup-414.png');
  background-size: cover;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 44px;

  position: absolute;
  left: 12px;
  right: 12px;
  top: 50px;
  bottom: 50px;

  background: rgba(29, 29, 29, 0.75);
  border-radius: 42px;

  color: ${(props) => props.theme.colors.white};
`

const Paragraph = styled.p`
  text-align: center;
`

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.secondary};
`

export default function SignUp() {
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
        <Paragraph>Already have an account? <StyledLink to='/login'>Log in here</StyledLink></Paragraph>
      </Frame>
    </Background>
  )
}
