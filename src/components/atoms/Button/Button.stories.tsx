import { Story } from '@storybook/react'
import { SearchOutlined } from '@ant-design/icons'

import { Button, ButtonProps } from './Button.component'

const defaultArguments = {
  size: 'large'
} as ButtonProps

const ButtonTemplate: Story<ButtonProps> = (arguments_) => <Button {...arguments_} />

export const Default = ButtonTemplate.bind({})
Default.args = {
  ...defaultArguments,
  children: 'Default'
}

export const Primary = ButtonTemplate.bind({})
Primary.args = {
  ...defaultArguments,
  type: 'primary',
  children: 'Primary'
}

export const Dash = ButtonTemplate.bind({})
Dash.args = {
  ...defaultArguments,
  type: 'dashed',
  children: 'Dash'
}

export const Icon = ButtonTemplate.bind({})
Icon.args = {
  ...defaultArguments,
  type: 'primary',
  children: 'Icon',
  icon: <SearchOutlined />
}

export const Loading = ButtonTemplate.bind({})
Loading.args = {
  ...defaultArguments,
  loading: true,
  type: 'primary',
  children: 'Loading'
}

export const Disabled = ButtonTemplate.bind({})
Disabled.args = {
  ...defaultArguments,
  disabled: true,
  type: 'primary',
  children: 'Disabled'
}

export default {
  title: 'Atoms/Button',
  component: Button,
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
