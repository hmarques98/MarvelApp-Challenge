import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Typography } from 'components/molecules/Typography';
import CardComic from 'components/organisms/CardComic';
import SearchBar from 'components/organisms/SearchBar';
import useReactQuery from 'hooks/useReactQuery';
import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStackParamList } from 'screens';
import { IComicsCharacter } from 'src/interfaces/IComicCharacter';
import { theme } from 'theme';
import { createAnimatableComponent } from 'react-native-animatable';
import LottieView from 'lottie-react-native';
type ComicsScreenNavigationProp = StackNavigationProp<
  CommonStackParamList,
  'Comics'
>;

type ComicsScreenRouteProp = RouteProp<CommonStackParamList, 'Comics'>;

const FlatListAnimated = createAnimatableComponent(FlatList);

const ComicsScreen = () => {
  const navigation = useNavigation<ComicsScreenNavigationProp>();
  const route = useRoute<ComicsScreenRouteProp>();
  const refFlatList = useRef<typeof FlatListAnimated>(null);

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
        onFocus={async () => {
          await refFlatList.current?.fadeOutRight!(800);
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }, { name: 'SearchForHero' }],
          });
        }}
      />
      <Typography>
        Comics by: <Typography fontSize="ls"> {route.params.name}</Typography>
      </Typography>
      <FlatListAnimated
        ref={refFlatList}
        ListEmptyComponent={() => (
          <LottieView
            source={require('../../assets/marvel.json')}
            autoPlay
            hardwareAccelerationAndroid
            loop
            style={{
              height: 30,
              width: 30,
            }}
          />
        )}
        data={data?.results}
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
