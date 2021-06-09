import React from 'react';

import { Box } from 'components/molecules/Box';
import { createAnimatableComponent } from 'react-native-animatable';
const BoxViewAnimated = createAnimatableComponent(Box);

export type BoxTypeRef = typeof BoxViewAnimated;

export const BoxAnimation = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  return (
    <BoxViewAnimated
      animation={'fadeInLeft'}
      duration={800}
      delay={50 * index!}>
      {children}
    </BoxViewAnimated>
  );
};
