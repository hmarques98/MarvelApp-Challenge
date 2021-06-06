import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Box } from 'components/molecules/Box';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStackParamList } from 'screens';
import { theme } from 'theme';
import { useDebounce } from 'use-debounce';
import { Typography } from 'components/molecules/Typography';
import useReactQuery from 'hooks/useReactQuery';
import { log } from '@utils/console';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Button } from 'components/molecules/Button';
import { ScrollView } from 'react-native-gesture-handler';
import CardCharacter from 'components/organisms/CardCharacter';
import { ICardCharacter } from 'src/interfaces/ICharacter';

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
  const [value] = useDebounce(text, 300);

  const { data, refetch, isLoading, error } = useReactQuery<{
    results: any;
  }>({
    path: `characters?nameStartsWith=${text}&orderBy=name`,
    queryName: 'characters',
  });

  useEffect(() => {
    if (value.length) {
      refetch();
    }
  }, [value, refetch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return (
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
          );
        }}
        data={data?.results}
        ListEmptyComponent={() => <Typography>No results</Typography>}
        renderItem={({ item }) => <CardCharacter key={item.id} data={item} />}
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

export default SearchForHeroScreen;
