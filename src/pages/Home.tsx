import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

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
  align-items: stretch;
  padding: 60px 44px;

  position: absolute;
  width: 100%;
  left: 0px;
  bottom: 0px;

  background: rgba(231, 229, 229, 0.8);
  backdrop-filter: blur(4px);
  border-radius: 42px 42px 0px 0px;
`

export function Home() {
  return (
    <Background>
      <Frame>
        <Button variant='primary'>Log In</Button>
        <Button variant='secondary'>Sign Up</Button>
      </Frame>
    </Background>
  )
}
