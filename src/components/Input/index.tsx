import React from 'react'
import styled from 'styled-components'

export const StyledInput = styled.input`
  border: none;
  padding: 16px;
  border-radius: 4px;
  font-family: inherit;
  color: ${(props) => props.theme.colors.black};
`

interface IInput {
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  type?: 'text' | 'password' | 'email'
  name?: string
}

export default function Input({
  onChange,
  placeholder = 'Insert text',
  type = 'text',
}: IInput) {
  return (
    <StyledInput onChange={onChange} placeholder={placeholder} type={type} />
  )
}
