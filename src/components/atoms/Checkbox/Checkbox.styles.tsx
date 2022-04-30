import styled from 'styled-components'

import { CheckboxStateColor } from '@src/types/component'
import { DEFAULT_PRIMARY_COLOR } from '@src/constants/color'

export const CheckboxWrapper = styled.div<CheckboxStateColor>`
  && {
    .jitera-checkbox-inner {
      border-color: ${(props) => props.inactiveColor || DEFAULT_PRIMARY_COLOR};
    }
    .jitera-checkbox-wrapper:hover .jitera-checkbox,
    .jitera-checkbox:hover .jitera-checkbox-inner,
    .jitera-checkbox-input:focus + .jitera-checkbox-inner {
      border-color: ${(props) => props.activeColor || DEFAULT_PRIMARY_COLOR};
    }
    .jitera-checkbox-checked::after {
      border-color: ${(props) => props.activeColor || DEFAULT_PRIMARY_COLOR};
    }
    .jitera-checkbox-checked .jitera-checkbox-inner {
      border-color: ${(props) => props.activeColor || DEFAULT_PRIMARY_COLOR};
      background-color: ${(props) => props.activeColor || DEFAULT_PRIMARY_COLOR};
    }
    .jitera-checkbox-inner::after {
      background-color: ${(props) => props.activeColor || DEFAULT_PRIMARY_COLOR};
      border-color: ${(props) => props.checkColor || '#fff'};
    }
    .jitera-checkbox-wrapper span:last-child {
      ${(props) => props.labelStyle}
    }
  }
`
