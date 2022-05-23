import styled from 'styled-components'

export const TextWrapper = styled.span<{ hasIcon: boolean }>`
  margin-left: ${(props) => props.hasIcon && `8px`};
`
