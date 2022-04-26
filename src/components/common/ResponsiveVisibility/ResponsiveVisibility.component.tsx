import { ReactElement, useMemo } from 'react'

import PreviewResponsive from '../PreviewResponsive/PreviewResponsive.component'

import { InlineWrapper, Wrapper } from './ResponsiveVisibility.styles'

interface Props {
  visibility?: { value: string }[]
  isPreview?: boolean
  children: ReactElement
  isInline?: boolean
}

const ResponsiveVisibility = ({ visibility, isPreview, isInline, children }: Props) => {
  const values = useMemo(
    () => visibility?.map((item: { value: string }) => item.value),
    [visibility]
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
