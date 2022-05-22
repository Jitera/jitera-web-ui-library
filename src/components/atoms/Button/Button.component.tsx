import React, { useMemo } from 'react'
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd'

import { ComponentProps } from '@src/types/component'

import { PreviewProps } from '@src/types/preview'
import { Icon, IconProps } from '@components/atoms/Icon/Icon.component'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

import { TextWrapper } from './Button.styles'

export interface ButtonProps extends PreviewProps, ComponentProps<Omit<AntButtonProps, 'type'>> {
  iconProps?: IconProps
  buttonType?: AntButtonProps['type']
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    buttonType = 'primary',
    responsiveVisibility,
    iconProps,
    className,
    children,
    ...rest
  } = props

  const buttonIcon = useMemo(() => {
    if (!iconProps) {
      return
    }
    // eslint-disable-next-line consistent-return
    return <Icon {...iconProps} />
  }, [iconProps])

  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  return (
    <AntButton type={buttonType} icon={buttonIcon} {...rest} className={classNames} ref={ref}>
      <TextWrapper hasIcon={!!buttonIcon}>{children}</TextWrapper>
    </AntButton>
  )
})

export { Button }
