import type { StoryObj, Meta } from '@storybook/react' // tipagens do ts
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}
