import React from 'react';
import { RouteProp, useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

import { characterState } from '../../../config/redux/store/slices';
import translate from '../../../config/localization';
import { Box, Button, Typography } from '../../../shared/components';
import { theme } from '../../../core/theme';

import { MainModuleStackParam } from '.';

type HomeScreenNavigationProp = StackNavigationProp<
  MainModuleStackParam,
  'Home'
>;

type HomeScreenRouteProp = RouteProp<MainModuleStackParam, 'Home'>;

const HomeScreen = () => {
  const { navigate } = useNavigation<HomeScreenNavigationProp>();

  const { favoriteHeroes } = useSelector(characterState);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />

      <Box bg="primary" alignItems="baseline" alignSelf="center" p="sm" mt="xl">
        <Typography
          style={{ fontSize: 48, letterSpacing: -8 }}
          fontFamily="marvel">
          MARVEL
        </Typography>
      </Box>

      <Box
        flex={1}
        alignItems="center"
        justifyContent="space-evenly"
        width="60%"
        alignSelf="center"
        testID="Box">
        <Button
          variant="rounded"
          flexDirection="row"
          onPress={() => {
            navigate('About');
          }}
          width="100%">
          <Typography>{translate.t('home.aboutTheApp')}</Typography>
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
        {favoriteHeroes.length ? (
          <Button
            testID="Button.favoriteHeroes"
            variant="rounded"
            flexDirection="row"
            px="ls"
            width="100%"
            onPress={() => {
              navigate('FavoriteHeroes');
            }}>
            <Typography>SEE MY FAVORITE HEROES</Typography>
            <FontAwesome
              name="heart"
              size={20}
              color={theme.colors.white}
              style={{ marginLeft: 8 }}
            />
          </Button>
        ) : (
          <Box />
        )}
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
