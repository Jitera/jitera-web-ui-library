import React from 'react'
import {
  JiteraTypography,
  TitleElementEnum,
  TypographyVariantType
} from '@jitera/jitera-web-ui-library'

import Layout from '@/components/Layout'

const Typography: React.FC = () => {
  return (
    <Layout>
      <div>
        <JiteraTypography variant={TypographyVariantType.Title} level={TitleElementEnum.H1}>
          A H1 Title Typography
        </JiteraTypography>
        <JiteraTypography variant={TypographyVariantType.Title} level={TitleElementEnum.H2}>
          A H2 Title Typography
        </JiteraTypography>
        <JiteraTypography variant={TypographyVariantType.Title} level={TitleElementEnum.H3}>
          A H3 Title Typography
        </JiteraTypography>
        <JiteraTypography variant={TypographyVariantType.Title} level={TitleElementEnum.H4}>
          A H4 Title Typography
        </JiteraTypography>
        <JiteraTypography variant={TypographyVariantType.Title} level={TitleElementEnum.H5}>
          A H5 Title Typography
        </JiteraTypography>
      </div>
      <div>
        <JiteraTypography variant={TypographyVariantType.Text}>A Text Typography</JiteraTypography>
      </div>
      <div>
        <JiteraTypography variant={TypographyVariantType.Paragraph}>
          A Paragraph Typography
        </JiteraTypography>
      </div>
      <div>
        <JiteraTypography variant={TypographyVariantType.Link}>A Link Typography</JiteraTypography>
      </div>
    </Layout>
  )
}

export default Typography
