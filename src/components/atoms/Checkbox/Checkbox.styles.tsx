import styled from 'styled-components'

import { CheckboxStateColor } from '@src/types/component'

export const CheckboxWrapper = styled.div<CheckboxStateColor>`
  && {
    .jitera-checkbox-inner {
      border-color: ${(props) => props.inactiveColor || props.theme.primaryColor};
    }
    .jitera-checkbox-wrapper:hover .jitera-checkbox,
    .jitera-checkbox:hover .jitera-checkbox-inner,
    .jitera-checkbox-input:focus + .jitera-checkbox-inner {
      border-color: ${(props) => props.activeColor || props.theme.primaryColor};
    }
    .jitera-checkbox-checked::after {
      border-color: ${(props) => props.activeColor || props.theme.primaryColor};
    }
    .jitera-checkbox-checked .jitera-checkbox-inner {
      border-color: ${(props) => props.activeColor || props.theme.primaryColor};
      background-color: ${(props) => props.activeColor || props.theme.primaryColor};
    }
    .jitera-checkbox-inner::after {
      background-color: ${(props) => props.activeColor || props.theme.primaryColor};
      border-color: ${(props) => props.checkColor || '#fff'};
    }
    .jitera-checkbox-wrapper span:last-child {
      ${(props) => props.labelStyle}
    }
  }
`
