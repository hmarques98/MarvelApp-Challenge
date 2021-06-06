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
import { log } from '@utils/console';

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
      <Box flex={1} alignItems="center" paddingTop={'sm'}>
        <Typography color={'primary'} fontSize={'xl'} variant="regular">
          Marvel APP
        </Typography>
        <Box mt={'md'} alignItems="center" flex={1}></Box>
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
