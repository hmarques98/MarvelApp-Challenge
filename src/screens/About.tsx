import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Box } from 'components/molecules/Box';
import { Button } from 'components/molecules/Button';
import { Typography } from 'components/molecules/Typography';
import React from 'react';
import { CommonStackParamList } from 'src/screens';

type AboutScreenNavigationProp = StackNavigationProp<
  CommonStackParamList,
  'About'
>;

type AboutScreenRouteProp = RouteProp<CommonStackParamList, 'About'>;

const AboutScreen = () => {
  const navigation = useNavigation<AboutScreenNavigationProp>();
  const route = useRoute<AboutScreenRouteProp>();
  return (
    <Box>
      <Typography>About</Typography>
      <Button onPress={() => {}}>
        <Typography>Go to About</Typography>
      </Button>
    </Box>
  );
};
export default AboutScreen;
