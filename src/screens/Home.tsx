import React from 'react';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet } from 'react-native';
import { Box } from 'components/molecules/Box';
import { Typography } from 'components/molecules/Typography';
import { CommonStackParamList } from 'screens';
import { StackNavigationProp } from '@react-navigation/stack';
import { theme } from 'theme';
import useReactQuery from 'hooks/useReactQuery';
import { Button } from 'components/molecules/Button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type HomeScreenNavigationProp = StackNavigationProp<
  CommonStackParamList,
  'Home'
>;

type HomeScreenRouteProp = RouteProp<CommonStackParamList, 'Home'>;

const HomeScreen = () => {
  const { navigate } = useNavigation<HomeScreenNavigationProp>();
  const route = useRoute<HomeScreenRouteProp>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />

      <Box bg="primary" alignItems="baseline" alignSelf="center" p="sm" mt="xl">
        <Typography fontSize={'48px'} letterSpacing="-8px" fontFamily="marvel">
          MARVEL
        </Typography>
      </Box>

      <Box
        flex={1}
        alignItems="center"
        justifyContent="space-evenly"
        width="60%"
        alignSelf="center">
        <Button
          variant="rounded"
          flexDirection="row"
          onPress={() => {
            navigate('About');
          }}
          width="100%">
          <Typography>MORE ABOUT THE APP</Typography>
          <FontAwesome
            name="mobile-phone"
            size={26}
            color={theme.colors.white}
            style={{ marginLeft: 8 }}
          />
        </Button>
        <Button
          variant="rounded"
          flexDirection="row"
          width="100%"
          onPress={() => {
            navigate('SearchForHero');
          }}>
          <Typography>FIND YOUR HERO</Typography>
          <FontAwesome
            name="search"
            size={20}
            color={theme.colors.white}
            style={{ marginLeft: 8 }}
          />
        </Button>
        <Button
          variant="rounded"
          flexDirection="row"
          px="ls"
          width="100%"
          onPress={() => {
            navigate('FavoritesHeroes');
          }}>
          <Typography>SEE MY FAVORITES HEROES</Typography>
          <FontAwesome
            name="heart"
            size={20}
            color={theme.colors.white}
            style={{ marginLeft: 8 }}
          />
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
