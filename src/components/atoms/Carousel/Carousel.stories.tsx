import { Story } from '@storybook/react'

import { Box } from '../Box/Box.component'

import { Carousel, CarouselProps } from './Carousel.component'

const defaultArguments: CarouselProps = {
  style: {},
  renderItem: (item) => (
    <div style={{ width: '100%', height: 300, backgroundColor: 'red' }}>
      <p>{item.title}</p>
    </div>
  ),
  variableWidth: false,
  itemPaddingHorizontal: 20
}

const ListTemplate: Story<CarouselProps> = (arguments_) => (
  <Carousel {...arguments_}>
    <Box style={{ width: 'auto', height: 300, backgroundColor: 'red', borderRadius: 10 }}>
      title 1
    </Box>
    <Box style={{ width: 'auto', height: 300, backgroundColor: 'red', borderRadius: 10 }}>
      title 2
    </Box>
    <Box style={{ width: 'auto', height: 300, backgroundColor: 'red', borderRadius: 10 }}>
      title 3
    </Box>
    <Box style={{ width: 'auto', height: 300, backgroundColor: 'red', borderRadius: 10 }}>
      title 4
    </Box>
    <Box style={{ width: 'auto', height: 300, backgroundColor: 'red', borderRadius: 10 }}>
      title 5
    </Box>
  </Carousel>
)

export const Default = ListTemplate.bind({})
Default.args = {
  ...defaultArguments
}

export default {
  title: 'Atoms/Carousel',
  component: Carousel
}
