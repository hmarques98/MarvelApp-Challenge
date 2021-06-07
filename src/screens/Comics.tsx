import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Typography } from 'components/molecules/Typography';
import CardComic from 'components/organisms/CardComic';
import SearchBar from 'components/organisms/SearchBar';
import useReactQuery from 'hooks/useReactQuery';
import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStackParamList } from 'screens';
import { IComicsCharacter } from 'src/interfaces/IComicCharacter';
import { theme } from 'theme';

type ComicsScreenNavigationProp = StackNavigationProp<
  CommonStackParamList,
  'Comics'
>;

type ComicsScreenRouteProp = RouteProp<CommonStackParamList, 'Comics'>;

const ComicsScreen = () => {
  const navigation = useNavigation<ComicsScreenNavigationProp>();
  const route = useRoute<ComicsScreenRouteProp>();

  const { data, isLoading } = useReactQuery<{
    results: IComicsCharacter[];
  }>({
    path: route.params.comicPath,
    queryName: 'comicsCharacter',
    dependency: route.params.comicPath,
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <SearchBar
        placeHolder="Search for another hero"
        onFocus={() => {
          navigation.navigate('SearchForHero');
        }}
      />
      <Typography>
        Comics by: <Typography fontSize="ls"> {route.params.name}</Typography>
      </Typography>
      <FlatList
        ListEmptyComponent={() => <Typography>Is Loading. Wait</Typography>}
        data={isLoading ? [] : data?.results}
        renderItem={({ item, index }) => (
          <CardComic data={item} index={index} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    padding: 16,
  },
});

export default ComicsScreen;
