import styled from 'styled-components'

import { RadioCheckboxStateColor } from '@src/types/component'

export const RadioWrapper = styled.div<RadioCheckboxStateColor>`
  .jitera-radio-inner {
    border-color: ${(props) => props.inactiveColor || '#1890ff'};
  }
  .jitera-radio-wrapper:hover .jitera-radio,
  .jitera-radio:hover .jitera-radio-inner,
  .jitera-radio-input:focus + .jitera-radio-inner {
    border-color: ${(props) => props.activeColor || '#1890ff'};
  }
  .jitera-radio-checked .jitera-radio-inner {
    border-color: ${(props) => props.activeColor || '#1890ff'};
  }
  .jitera-radio-inner::after {
    background-color: ${(props) => props.activeColor || '#1890ff'};
  }
  .jitera-radio-wrapper span:last-child {
    ${(props) => props.labelStyle}
  }
`
