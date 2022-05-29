import React from 'react'
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
  height: 400px;
  width: 100%;
  left: 0px;
  bottom: 0px;

  background: rgba(231, 229, 229, 0.8);
  backdrop-filter: blur(4px);
  border-radius: 42px 42px 0px 0px;
`

const Actions = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${StyledButton}:first-child {
    margin-bottom: 28px;
  }
`

const Paragraph = styled.p`
  text-align: center;
`

export function Home() {
  return (
    <Background>
      <Frame>
        <div>
          <Header>Beckton Barkside</Header>
          <Paragraph>
            Community for the dog lovers of Beckton Parkside
          </Paragraph>
        </div>
        <Actions>
          <Button variant='primary'>Log In</Button>
          <Button variant='secondary'>Sign Up</Button>
        </Actions>
      </Frame>
    </Background>
  )
}
