import styled from 'styled-components'

import { ResponsiveDevices, ResponsiveSize } from '../../../constants/responsive'

export const InlineWrapper = styled.span<{ values?: string[] }>`
  @media (min-width: ${ResponsiveSize.SMALL}px) {
    display: ${(props) => (props?.values?.includes(ResponsiveDevices.MOBILE) ? 'inline' : 'none')};
  }

  @media (min-width: ${ResponsiveSize.MEDIUM}px) {
    display: ${(props) => (props?.values?.includes(ResponsiveDevices.TABLET) ? 'inline' : 'none')};
  }

  @media (min-width: ${ResponsiveSize.LARGE}px) {
    display: ${(props) => (props?.values?.includes(ResponsiveDevices.DESKTOP) ? 'inline' : 'none')};
  }
`

export const Wrapper = styled.div<{ values?: string[] }>`
  @media (min-width: ${ResponsiveSize.SMALL}px) {
    display: ${(props) => (props?.values?.includes(ResponsiveDevices.MOBILE) ? 'inline' : 'none')};
  }

  @media (min-width: ${ResponsiveSize.MEDIUM}px) {
    display: ${(props) => (props?.values?.includes(ResponsiveDevices.TABLET) ? 'inline' : 'none')};
  }

  @media (min-width: ${ResponsiveSize.LARGE}px) {
    display: ${(props) => (props?.values?.includes(ResponsiveDevices.DESKTOP) ? 'inline' : 'none')};
  }
`
