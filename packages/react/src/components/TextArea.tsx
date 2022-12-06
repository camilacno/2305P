import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  color: '$white',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  minHeight: 80,
  padding: '$3 $4',
  resize: 'vertical',

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {
  as?: ElementType
}
