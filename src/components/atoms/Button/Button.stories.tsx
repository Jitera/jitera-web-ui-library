import { Story } from '@storybook/react'

import { Button, ButtonProps } from './Button.component'

const defaultArguments = {
  size: 'large',
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
  buttonType: 'primary',
  children: 'Primary'
}

export const Dash = ButtonTemplate.bind({})
Dash.args = {
  ...defaultArguments,
  buttonType: 'dashed',
  children: 'Dash'
}

export const Icon = ButtonTemplate.bind({})
Icon.args = {
  ...defaultArguments,
  buttonType: 'primary',
  children: 'Icon',
  iconProps: {
    iconName: 'AiFillHome'
  }
}

export const Loading = ButtonTemplate.bind({})
Loading.args = {
  ...defaultArguments,
  loading: true,
  buttonType: 'primary',
  children: 'Loading'
}

export const Disabled = ButtonTemplate.bind({})
Disabled.args = {
  ...defaultArguments,
  disabled: true,
  buttonType: 'primary',
  children: 'Disabled'
}

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    size: {
      description: 'Size of the button',
      control: {
        buttonType: 'select',
        options: ['large', 'default', 'small']
      }
    },
    loading: {
      description: 'Enable loading icon ',
      control: {
        buttonType: 'boolean'
      }
    },
    disabled: {
      description: 'Disable the button',
      control: {
        buttonType: 'boolean'
      }
    },
    onClick: {
      description: 'Button on click'
    }
  }
}
