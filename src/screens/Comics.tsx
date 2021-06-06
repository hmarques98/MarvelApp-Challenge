import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Box } from 'components/molecules/Box';
import { Button } from 'components/molecules/Button';
import { Typography } from 'components/molecules/Typography';
import useReactQuery from 'hooks/useReactQuery';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStackParamList } from 'screens';
import { IComicsCharacter } from 'src/interfaces/IComicCharacter';
import { theme } from 'theme';
import { createAnimatableComponent } from 'react-native-animatable';
type ComicsScreenNavigationProp = StackNavigationProp<
  CommonStackParamList,
  'Comics'
>;

type ComicsScreenRouteProp = RouteProp<CommonStackParamList, 'Comics'>;

const BoxAnimation = createAnimatableComponent(Box);

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
      <ScrollView>
        <Box alignItems="center" flex={1}>
          {data?.results.map((val, index) => {
            const covers = val.stories.items.filter(
              (item) => item.type === 'cover',
            );
            return (
              <BoxAnimation
                animation="fadeInLeft"
                delay={50 * index}
                key={val.id}
                flexDirection="row"
                width="100%"
                px="ls"
                flexWrap="wrap"
                my="ls">
                <Image
                  source={{
                    uri: `${val.thumbnail.path.replace('http', 'https')}.${
                      val.thumbnail.extension
                    }`,
                  }}
                  style={{
                    width: 80,
                    height: '100%',
                  }}
                />
                <Box width="70%" borderRadius="sm" ml="sm">
                  <Typography numberOfLines={1}>{val.title} </Typography>
                  <Typography variant="regular">
                    Issues: {val.issueNumber}
                  </Typography>
                  <Typography variant="regular">
                    Price: ${val.prices[0].price}
                  </Typography>
                  {covers.map((cover) => (
                    <Typography variant="regular" key={cover.resourceURI}>
                      {cover.name.replace('cover', 'Cover')}
                    </Typography>
                  ))}
                </Box>
              </BoxAnimation>
            );
          })}
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
});

export default ComicsScreen;
