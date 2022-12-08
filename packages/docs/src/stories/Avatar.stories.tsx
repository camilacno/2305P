import type { StoryObj, Meta } from '@storybook/react' // tipagens do ts
import { Avatar, AvatarProps } from '@camilacno-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/camilacno.png',
    alt: 'Camila Nepomuceno',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
