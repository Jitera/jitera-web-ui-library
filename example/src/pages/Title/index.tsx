import React from 'react'
import { JiteraTitle, TitleElementEnum } from '@jitera/jitera-web-ui-library'

import Layout from '@/components/Layout'

const Title: React.FC = () => {
  return (
    <Layout>
      <JiteraTitle level={TitleElementEnum.H1}>A H1 Title</JiteraTitle>
      <JiteraTitle level={TitleElementEnum.H2}>A H2 Title</JiteraTitle>
      <JiteraTitle level={TitleElementEnum.H3}>A H3 Title</JiteraTitle>
      <JiteraTitle level={TitleElementEnum.H4}>A H4 Title</JiteraTitle>
      <JiteraTitle level={TitleElementEnum.H5}>A H5 Title</JiteraTitle>
    </Layout>
  )
}

export default Title
