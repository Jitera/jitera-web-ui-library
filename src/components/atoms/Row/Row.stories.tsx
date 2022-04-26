import { Story } from '@storybook/react'

import { Box } from '../Box/Box.component'
import { Col } from '../Col/Col.component'

import { Row, RowProps } from './Row.component'

const defaultArguments: RowProps = {
  responsiveVisibility: [
    {
      value: 'desktop'
    },
    {
      value: 'tablet'
    },
    {
      value: 'mobile'
    }
  ]
}

const RowTemplate: Story<RowProps> = (arguments_) => <Row {...arguments_} />

export const Default = RowTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: (
    <>
      <Col>
        <Box />
      </Col>
      <Col>
        <Box />
      </Col>
    </>
  )
}

export default {
  title: 'Atoms/Row',
  component: Row
}
