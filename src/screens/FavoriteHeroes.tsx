import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { characterState } from '@store/slices';
import { Box } from 'components/molecules/Box';
import { Button } from 'components/molecules/Button';
import { Typography } from 'components/molecules/Typography';
import CardCharacter from 'components/organisms/CardCharacter';
import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { CommonStackParamList } from 'screens';
import { theme } from 'theme';

type FavoriteHeroesScreenNavigationProp = StackNavigationProp<
  CommonStackParamList,
  'FavoriteHeroes'
>;

type FavoriteHeroesScreenRouteProp = RouteProp<
  CommonStackParamList,
  'FavoriteHeroes'
>;

const FavoriteHeroesScreen = () => {
  const navigation = useNavigation<FavoriteHeroesScreenNavigationProp>();
  const route = useRoute<FavoriteHeroesScreenRouteProp>();

  const { favoriteHeroes } = useSelector(characterState);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Box justifyContent="center" flex={1} p="md">
        <Typography fontSize="xl">Your favorite heroes: </Typography>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={favoriteHeroes.slice().reverse()}
          renderItem={({ item }) => (
            <CardCharacter
              key={item.id}
              data={item}
              onPress={(comicPath) => {
                navigation.navigate('Comics', { comicPath, name: item.name });
              }}
            />
          )}
        />
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
});

export default FavoriteHeroesScreen;
