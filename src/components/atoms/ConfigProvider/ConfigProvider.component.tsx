import React from 'react'
import { ConfigProvider } from 'antd'
import { ConfigProviderProps } from 'antd/lib/config-provider'

import { PREFIX_COMPONENT_CLASSNAME, PREFIX_ICON_CLASSNAME } from '../../../constants'

export interface JiteraConfigProviderProps
  extends Omit<ConfigProviderProps, 'prefixCls' | 'iconPrefixCls'> {}

const JiteraConfigProvider: React.FC<JiteraConfigProviderProps> = ({ children, ...props }) => (
  <ConfigProvider
    {...props}
    prefixCls={PREFIX_COMPONENT_CLASSNAME}
    iconPrefixCls={PREFIX_ICON_CLASSNAME}
  >
    {children}
  </ConfigProvider>
)

export { JiteraConfigProvider }
