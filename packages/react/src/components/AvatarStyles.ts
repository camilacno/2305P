import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  height: '$12',
  overflow: 'hidden',
  width: '$12',
})

export const AvatarImage = styled(Avatar.Image, {
  borderRadius: 'inherit',
  height: '100%',
  objectFit: 'cover',
  width: '100%',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  backgroundColor: '$gray600',
  color: '$gray800',
  height: '100%',
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    width: '$6',
    height: '$6',
  },
})
