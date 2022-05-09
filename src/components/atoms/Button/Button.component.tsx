import React, { useMemo } from 'react'
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'
import { Icon, IconProps } from '@components/atoms/Icon/Icon.component'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'

export interface ButtonProps extends PreviewProps, ComponentProps<Omit<AntButtonProps, 'type'>> {
  iconProps?: IconProps
  buttonType?: AntButtonProps['type']
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { buttonType = 'primary', isPreview, responsiveVisibility, iconProps, ...rest } = props

  const buttonIcon = useMemo(() => {
    if (!iconProps) {
      return
    }
    // eslint-disable-next-line consistent-return
    return <Icon {...iconProps} />
  }, [iconProps])
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview} isInline>
      <AntButton type={buttonType} icon={buttonIcon} {...rest} ref={ref} />
    </VisibilityComponent>
  )
})

export { Button }
