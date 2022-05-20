import { Story } from '@storybook/react'

import { Carousel, CarouselProps } from './Carousel.component'

const defaultArguments: CarouselProps = {
  style: {},
  dataSource: [
    { title: 'hello' },
    { title: 'hello 2' },
    { title: 'hello 3' },
    { title: 'hello 4' },
    { title: 'hello 5' },
    { title: 'hello 6' },
    { title: 'hello 7' },
    { title: 'hello 8' },
    { title: 'hello 9' },
    { title: 'hello 10' },
    { title: 'hello 11' }
  ],
  renderItem: (item) => (
    <div style={{ width: '100%', height: 300, backgroundColor: 'red' }}>
      <p>{item.title}</p>
    </div>
  )
}

const ListTemplate: Story<CarouselProps> = (arguments_) => <Carousel {...arguments_} />

export const Default = ListTemplate.bind({})
Default.args = {
  ...defaultArguments
}

export default {
  title: 'Atoms/Carousel',
  component: Carousel
}
