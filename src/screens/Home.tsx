import React from 'react';

import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet } from 'react-native';
import { Box } from 'components/molecules/Box';
import { Typography } from 'components/molecules/Typography';
import { CommonStackParamList } from 'src/screens';
import { StackNavigationProp } from '@react-navigation/stack';
import { theme } from 'theme';
import useReactQuery from 'hooks/useReactQuery';
import { Button } from 'components/molecules/Button';

type ProfileScreenNavigationProp = StackNavigationProp<
  CommonStackParamList,
  'Home'
>;

const HomeScreen = () => {
  const { navigate } = useNavigation<ProfileScreenNavigationProp>();

  const { data } = useReactQuery({
    path: 'comics',
    queryName: 'comics',
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />

      <Box bg="primary" alignItems="baseline" alignSelf="center" p="sm" mt="xl">
        <Typography fontSize="xl" letterSpacing="-4px" fontFamily="marvel">
          MARVEL
        </Typography>
      </Box>

      <Box flex={1} alignItems="center" justifyContent="space-evenly">
        <Button variant="rounded" onPress={() => {}}>
          <Typography>MORE ABOUT APP</Typography>
        </Button>
        <Button variant="rounded">
          <Typography>FIND YOUR HERO</Typography>
        </Button>
      </Box>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
});
