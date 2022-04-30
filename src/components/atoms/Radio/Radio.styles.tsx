import styled from 'styled-components'

import { RadioStateColor } from '@src/types/component'
import { DEFAULT_PRIMARY_COLOR } from '@src/constants/color'

export const RadioWrapper = styled.div<RadioStateColor>`
  .jitera-radio-inner {
    border-color: ${(props) => props.inactiveColor || DEFAULT_PRIMARY_COLOR};
  }
  .jitera-radio-wrapper:hover .jitera-radio,
  .jitera-radio:hover .jitera-radio-inner,
  .jitera-radio-input:focus + .jitera-radio-inner {
    border-color: ${(props) => props.activeColor || DEFAULT_PRIMARY_COLOR};
  }
  .jitera-radio-checked::after {
    border-color: ${(props) => props.activeColor || DEFAULT_PRIMARY_COLOR};
  }
  .jitera-radio-checked .jitera-radio-inner {
    border-color: ${(props) => props.activeColor || DEFAULT_PRIMARY_COLOR};
  }
  .jitera-radio-inner::after {
    background-color: ${(props) => props.activeColor || DEFAULT_PRIMARY_COLOR};
  }
  .jitera-radio-wrapper span:last-child {
    ${(props) => props.labelStyle}
  }
`
