import { Story } from '@storybook/react'
import { JiteraButton, JiteraButtonProps } from './Button.component'
import { SearchOutlined } from '@ant-design/icons'

const defaultArgs = {
  size: 'large'
} as JiteraButtonProps

const ButtonTemplate: Story<JiteraButtonProps> = (args) => <JiteraButton {...args} />

export const Default = ButtonTemplate.bind({})
Default.args = {
  ...defaultArgs,
  children: 'Default'
}

export const Primary = ButtonTemplate.bind({})
Primary.args = {
  ...defaultArgs,
  type: 'primary',
  children: 'Primary'
}

export const Dash = ButtonTemplate.bind({})
Dash.args = {
  ...defaultArgs,
  type: 'dashed',
  children: 'Dash'
}

export const Icon = ButtonTemplate.bind({})
Icon.args = {
  ...defaultArgs,
  type: 'primary',
  children: 'Icon',
  icon: <SearchOutlined />
}

export const Loading = ButtonTemplate.bind({})
Loading.args = {
  ...defaultArgs,
  loading: true,
  type: 'primary',
  children: 'Loading'
}

export const Disabled = ButtonTemplate.bind({})
Disabled.args = {
  ...defaultArgs,
  disabled: true,
  type: 'primary',
  children: 'Disabled'
}

export default {
  title: 'Atoms/Button',
  component: JiteraButton,
  argTypes: {
    size: {
      description: 'Size of the button',
      control: {
        type: 'select',
        options: ['large', 'default', 'small']
      }
    },
    loading: {
      description: 'Enable loading icon ',
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      description: 'Disable the button',
      control: {
        type: 'boolean'
      }
    },
    onClick: {
      description: 'Button on click'
    }
  }
}
