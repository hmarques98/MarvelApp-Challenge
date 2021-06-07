import { Box } from 'components/molecules/Box';
import {
  createAnimatableComponent,
  AnimatableProperties,
  View,
} from 'react-native-animatable';
export const BoxAnimation = createAnimatableComponent(Box);

export type BoxTypeRef = typeof BoxAnimation;
