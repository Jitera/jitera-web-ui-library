import styled from 'styled-components'

import { ResponsiveDevices, ResponsiveSize } from '../../../constants/responsive'

export const InlineWrapper = styled.span<{ values?: string[] }>`
  @media (min-width: ${ResponsiveSize.SMALL}px) and (max-width: ${ResponsiveSize.MEDIUM - 1}) {
    display: ${(props) => (props?.values?.includes(ResponsiveDevices.MOBILE) ? 'inline' : 'none')};
  }

  @media (min-width: ${ResponsiveSize.MEDIUM}px) and (max-width: ${ResponsiveSize.LARGE - 1}) {
    display: ${(props) => (props?.values?.includes(ResponsiveDevices.TABLET) ? 'inline' : 'none')};
  }

  @media (min-width: ${ResponsiveSize.LARGE}px) {
    display: ${(props) => (props?.values?.includes(ResponsiveDevices.DESKTOP) ? 'inline' : 'none')};
  }
`

export const Wrapper = styled.div<{ values?: string[] }>`
  @media (min-width: ${ResponsiveSize.SMALL}px) and (max-width: ${ResponsiveSize.MEDIUM - 1}) {
    display: ${(props) =>
      props?.values?.includes(ResponsiveDevices.MOBILE) ? 'contents' : 'none'};
  }

  @media (min-width: ${ResponsiveSize.MEDIUM}px) and (max-width: ${ResponsiveSize.LARGE - 1}) {
    display: ${(props) =>
      props?.values?.includes(ResponsiveDevices.TABLET) ? 'contents' : 'none'};
  }

  @media (min-width: ${ResponsiveSize.LARGE}px) {
    display: ${(props) =>
      props?.values?.includes(ResponsiveDevices.DESKTOP) ? 'contents' : 'none'};
  }
`
