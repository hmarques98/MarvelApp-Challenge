import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Box } from 'components/molecules/Box';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStackParamList } from 'screens';
import { theme } from 'theme';
import { Typography } from 'components/molecules/Typography';
import useReactQuery from 'hooks/useReactQuery';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button } from 'components/molecules/Button';
import CardCharacter from 'components/organisms/CardCharacter';
import { ICharacter } from 'src/interfaces/ICharacter';
import { useDispatch } from 'react-redux';
import { addFavoriteHero } from '@store/slices/character';

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
    path: `characters?orderBy=name&${text ? 'nameStartsWith=' + text : ''}`,
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
        <Box
          width="100%"
          flexDirection="row"
          alignItems="center"
          justifyContent="center">
          <Box
            bg="white"
            width="90%"
            height={40}
            px="md"
            borderRadius="md"
            my="md">
            <TextInput
              placeholder="Search for your Hero here with initial name"
              style={{
                height: 40,
                color: theme.colors.primary,
                fontFamily: theme.fonts.body,
              }}
              value={text}
              onChangeText={setText}
            />
          </Box>
          <Button
            hitSlop={{
              right: 20,
            }}
            onPress={() => {
              refetch();
            }}>
            <FontAwesome
              name="search"
              size={20}
              color={theme.colors.white}
              style={{ marginLeft: 16 }}
            />
          </Button>
        </Box>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data?.results}
          ListEmptyComponent={() => (
            <Typography color="primary">
              {isLoading ? 'Loading. Please wait!' : 'No results'}
            </Typography>
          )}
          renderItem={({ item }) => (
            <CardCharacter
              key={item.id}
              data={item}
              onPress={(comicPath) => {
                navigation.navigate('Comics', { comicPath });
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
