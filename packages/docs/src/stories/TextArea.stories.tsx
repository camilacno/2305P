import type { StoryObj, Meta } from '@storybook/react' // tipagens do ts
import { Box, Text, TextArea, TextAreaProps } from '@camilacno-ignite-ui/react'

export default {
  title: 'Form/Textarea',
  component: TextArea,

  args: {
    children: 'Observartion...',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as='label'
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size='sm'>Add Obs</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Type your observations',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
