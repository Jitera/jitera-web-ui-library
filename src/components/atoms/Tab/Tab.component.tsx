import React, { useMemo, Children } from 'react'

import { Tabs, TabsProps } from 'antd'

import { PreviewProps } from '@src/types/preview'

import { ComponentProps } from '@src/types/component'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

import { TabWrapper } from './Tab.styles'

const { TabPane } = Tabs

export interface TabProps extends PreviewProps, ComponentProps<TabsProps> {
  tabs?: { key?: string; title?: string }[]
  activeColor?: string
  tabType?: TabsProps['type']
  tabLabelStyle?: {
    color?: string
    fontSize?: string
    fontWeight?: string
    fontFamily?: string
  }
}

const Tab = React.forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  const { style, tabType, tabs, children, className, responsiveVisibility, ...rest } = props

  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  const items = useMemo(() => {
    if (!children) {
      return
    }
    // eslint-disable-next-line consistent-return
    return Children.map(children, (child, index) => {
      const tab = tabs?.[index]
      const title = tab?.title || `Tab ${index}`
      return (
        <TabPane tab={title} key={tab?.key || `${title}_${index}`}>
          {child}
        </TabPane>
      )
    })
  }, [children, tabs])
  return (
    <div style={style} className={classNames} ref={ref}>
      <TabWrapper type={tabType} {...rest}>
        {items}
      </TabWrapper>
    </div>
  )
})

export { Tab }
