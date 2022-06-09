import { Tabs } from 'antd'
import styled from 'styled-components'

export const TabWrapper = styled(Tabs)<{
  activeColor?: string
  tabLabelStyle?: {
    color?: string
    fontSize?: string
    fontWeight?: string
    fontFamily?: string
  }
}>`
  .jitera-tabs-ink-bar {
    ${(props) => (props?.activeColor ? `background-color: ${props.activeColor}` : '')}
  }
  .jitera-tabs-tab.jitera-tabs-tab-active .jitera-tabs-tab-btn {
    ${(props) => (props?.activeColor ? `color: ${props.activeColor}` : '')}
  }
  .jitera-tabs-tab {
    ${(props) => (props?.tabLabelStyle?.color ? `color: ${props.tabLabelStyle.color};` : '')}
    ${(props) =>
      props?.tabLabelStyle?.fontSize ? `font-size: ${props.tabLabelStyle.fontSize};` : ''}
    ${(props) =>
      props?.tabLabelStyle?.fontWeight ? `font-weight: ${props.tabLabelStyle.fontWeight};` : ''}
    ${(props) =>
      props?.tabLabelStyle?.fontFamily ? `font-family: ${props.tabLabelStyle.fontFamily};` : ''}
  }
`
