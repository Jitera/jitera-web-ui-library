import { ReactElement } from 'react'

import { ResponsiveDevices, ResponsiveSize } from '../../../constants/responsive'

interface Props {
  children: ReactElement
  visibility?: string[]
}

const PreviewResponsive = ({ visibility, children }: Props) => {
  // handle use case old data
  if (!visibility) {
    return children
  }

  // eslint-disable-next-line unicorn/prefer-query-selector
  const previewFrameWidth = document.getElementById('preview-frame')?.offsetWidth || 0

  if (previewFrameWidth >= ResponsiveSize.SMALL && previewFrameWidth < ResponsiveSize.MEDIUM) {
    if (visibility?.includes(ResponsiveDevices.MOBILE)) {
      return children
    }
    // eslint-disable-next-line react/react-in-jsx-scope
    return <div />
  }

  if (previewFrameWidth >= ResponsiveSize.MEDIUM && previewFrameWidth < ResponsiveSize.LARGE) {
    if (visibility?.includes(ResponsiveDevices.TABLET)) {
      return children
    }
    // eslint-disable-next-line react/react-in-jsx-scope
    return <div />
  }

  if (previewFrameWidth >= ResponsiveSize.LARGE) {
    if (visibility?.includes(ResponsiveDevices.DESKTOP)) {
      return children
    }
    // eslint-disable-next-line react/react-in-jsx-scope
    return <div />
  }

  return children
}

export default PreviewResponsive
