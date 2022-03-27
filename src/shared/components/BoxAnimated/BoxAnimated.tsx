import React from 'react'

import { createAnimatableComponent } from 'react-native-animatable'
import Box from '../Box'

const BoxViewAnimated = createAnimatableComponent(Box)

export type BoxTypeRef = typeof BoxViewAnimated

const BoxAnimated = ({
  children,
  index,
}: {
  children: React.ReactNode
  index: number
}) => {
  return (
    <BoxViewAnimated
      animation={'fadeInLeft'}
      duration={800}
      delay={50 * index!}
    >
      {children}
    </BoxViewAnimated>
  )
}

export default BoxAnimated
