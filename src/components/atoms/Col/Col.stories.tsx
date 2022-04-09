import { Story } from '@storybook/react'

import { Box } from '../Box/Box.component'
import { Row } from '../Row/Row.component'

import { Col, ColProps } from './Col.component'

const defaultArguments: ColProps = {}

const ColTemplate: Story<ColProps> = (arguments_) => <Row {...arguments_} />

export const Default = ColTemplate.bind({})
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
  title: 'Atoms/Col',
  component: Col
}
