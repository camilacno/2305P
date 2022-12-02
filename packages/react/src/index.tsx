import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  color: '$white',
  backgroundColor: '$ignite300',
  border: 0,
  borderRadius: '$sm',
  fontFamily: '$default',
  fontWeight: 'bold',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
