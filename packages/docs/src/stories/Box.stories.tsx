import type { StoryObj, Meta } from '@storybook/react' // tipagens do ts
import { Box, BoxProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: [
      <>
        <span>Testando o elemento Box</span>
      </>,
    ],
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
