import { Story } from '@storybook/react'

import { List, ListProps } from './List.component'

const defaultArguments: ListProps = {
  style: {},
  dataSource: [
    { title: 'hello' },
    { title: 'hello 2' },
    { title: 'hello 3' },
    { title: 'hello 4' }
  ],
  renderItem: (item) => <p>{item.title}</p>
}

const ListTemplate: Story<ListProps> = (arguments_) => <List {...arguments_} />

export const Default = ListTemplate.bind({})
Default.args = {
  ...defaultArguments
}

export default {
  title: 'Atoms/List',
  component: List
}
