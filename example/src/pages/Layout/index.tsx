import React from 'react'
import { JiteraLayout } from '@jitera/jitera-web-ui-library'

import WrapperLayout from '@/components/Layout'

const Layout: React.FC = () => {
  return (
    <WrapperLayout>
      <JiteraLayout>A Layout</JiteraLayout>
    </WrapperLayout>
  )
}

export default Layout
