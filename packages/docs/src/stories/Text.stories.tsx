import type { StoryObj, Meta } from '@storybook/react' // tipagens do ts
import { Text, TextProps } from '@camilacno-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nesciunt aperiam obcaecati libero similique expedita at ipsa, odit nam itaque totam hic ipsum asperiores deleniti architecto quibusdam ducimus eos nobis.',
  },
  argTypes: {
    size: {
      options: [
        'xs',
        'xxs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
