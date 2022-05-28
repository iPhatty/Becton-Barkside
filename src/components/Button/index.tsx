import React from 'react'
import styled, { DefaultTheme } from 'styled-components'

type Variants = 'default' | 'primary' | 'secondary'

interface IStyledButton {
  variant: Variants
}

interface ThemeProps extends IStyledButton {
  theme: DefaultTheme
}

function setVariantStyles(props: ThemeProps) {
  switch (props.variant) {
    case 'primary':
      return {
        'background-color': props.theme.colors.primary,
        color: props.theme.colors.white,
      }
    case 'secondary':
      return {
        'background-color': props.theme.colors.secondary,
      }
    default:
      return { 'background-color': props.theme.colors.grey }
  }
}

const StyledButton = styled.button<IStyledButton>`
  ${(props) => ({ ...setVariantStyles(props) })};
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 42px;
`

interface IButton {
  variant?: Variants
  children: React.ReactNode
}

export default function Button({ children, variant = 'default' }: IButton) {
  return <StyledButton variant={variant}>{children}</StyledButton>
}
