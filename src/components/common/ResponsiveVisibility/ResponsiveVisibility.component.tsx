import { ReactElement, useMemo } from 'react'

import { DEFAULT_RESPONSIVE_VISIBILITY } from '@src/constants'

import { PreviewProps } from '@src/types/preview'

import PreviewResponsive from '../PreviewResponsive/PreviewResponsive.component'

import { InlineWrapper, Wrapper } from './ResponsiveVisibility.styles'

interface Props extends PreviewProps {
  visibility?: { value: string }[] | string[]
  isPreview?: boolean
  children: ReactElement
  isInline?: boolean
}

const ResponsiveVisibility = ({
  visibility,
  responsiveVisibility,
  isPreview,
  isInline,
  children
}: Props) => {
  const values = useMemo(
    () =>
      (responsiveVisibility || visibility || DEFAULT_RESPONSIVE_VISIBILITY)?.map(
        (item: { value: string } | string) => (typeof item === 'string' ? item : item.value)
      ),
    [responsiveVisibility, visibility]
  )

  if (isPreview) {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <PreviewResponsive visibility={values}>{children}</PreviewResponsive>
  }

  if (isInline) {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <InlineWrapper values={values}>{children}</InlineWrapper>
  }

  // eslint-disable-next-line react/react-in-jsx-scope
  return <Wrapper values={values}>{children}</Wrapper>
}

export default ResponsiveVisibility
