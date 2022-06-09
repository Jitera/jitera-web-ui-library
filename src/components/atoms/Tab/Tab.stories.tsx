import { Story } from '@storybook/react'

import { Box } from '../Box/Box.component'

import { Tab, TabProps } from './Tab.component'

const defaultArguments: TabProps = {
  style: {},
  centered: true,
  type: 'line',
  activeColor: 'red',
  tabPosition: 'bottom'
}

const ListTemplate: Story<TabProps> = (arguments_) => (
  <Tab {...arguments_}>
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
  </Tab>
)

export const Default = ListTemplate.bind({})
Default.args = {
  ...defaultArguments
}

export default {
  title: 'Atoms/Tab',
  component: Tab
}
