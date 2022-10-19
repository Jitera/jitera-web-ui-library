import styled from 'styled-components'
import { Drawer as AntDrawer } from 'antd'

export const StyledDrawer = styled(AntDrawer)`
  && {
    .jitera-drawer-content-wrapper {
      box-shadow: inherit;
    }
    .jitera-drawer-content {
      background-color: inherit;
    }
    .jitera-drawer-body {
      padding: inherit;
      font-size: inherit;
      line-height: inherit;
      word-wrap: inherit;
    }
  }
`
