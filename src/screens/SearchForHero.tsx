import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Box } from 'components/molecules/Box';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStackParamList } from 'screens';
import { theme } from 'theme';
import { Typography } from 'components/molecules/Typography';
import useReactQuery from 'hooks/useReactQuery';
import CardCharacter from 'components/organisms/CardCharacter';
import { ICharacter } from 'src/interfaces/ICharacter';
import { useDispatch } from 'react-redux';
import { addFavoriteHero } from '@store/slices/character';
import SearchBar from 'components/organisms/SearchBar';

type SearchForHeroScreenNavigationProp = StackNavigationProp<
  CommonStackParamList,
  'SearchForHero'
>;

type SearchForHeroScreenRouteProp = RouteProp<
  CommonStackParamList,
  'SearchForHero'
>;

const SearchForHeroScreen = () => {
  const navigation = useNavigation<SearchForHeroScreenNavigationProp>();
  const route = useRoute<SearchForHeroScreenRouteProp>();
  const [text, setText] = useState('');

  const { data, refetch, isLoading } = useReactQuery<{
    results: ICharacter[];
  }>({
    path: `characters?orderBy=name${text ? '&nameStartsWith=' + text : ''}`,
    queryName: 'characters',
    dependency: true,
  });

  useEffect(() => {
    refetch();
  }, [text, refetch]);

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Box>
        <SearchBar
          onPress={() => refetch()}
          placeHolder="Search for your Hero here"
          value={text}
          onChangeText={setText}
          autoFocus
        />

        <Typography fontSize="ls">Showing 20 heroes: </Typography>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data?.results}
          ListEmptyComponent={() => (
            <Typography color="primary">
              {isLoading ? 'Loading. Please wait!' : 'No results'}
            </Typography>
          )}
          style={{ marginTop: 10 }}
          renderItem={({ item }) => (
            <CardCharacter
              key={item.id}
              data={item}
              onPress={(comicPath) => {
                navigation.navigate('Comics', { comicPath, name: item.name });
                dispatch(addFavoriteHero(item));
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
    padding: 16,
  },
});

export default SearchForHeroScreen;
