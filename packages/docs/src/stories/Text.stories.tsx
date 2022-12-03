import type { StoryObj, Meta } from '@storybook/react' // tipagens do ts
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nesciunt aperiam obcaecati libero similique expedita at ipsa, odit nam itaque totam hic ipsum asperiores deleniti architecto quibusdam ducimus eos nobis.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
