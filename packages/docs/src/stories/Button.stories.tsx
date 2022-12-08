import type { StoryObj, Meta } from '@storybook/react' // tipagens do ts
import { ArrowRight } from 'phosphor-react'
import { Button, ButtonProps } from '@camilacno-ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    onClick: {
      action: 'click',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: [
      <>
        Próximo passo
        <ArrowRight weight='bold' />
      </>,
    ],
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
