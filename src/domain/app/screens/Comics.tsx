import React, { useRef } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createAnimatableComponent } from 'react-native-animatable'
import LottieView from 'lottie-react-native'

import { IComicsCharacter } from '../models/interfaces/IComicCharacter'
import useReactQuery from '../../../hooks/useReactQuery'
import { Typography, SearchBar, BoxAnimated } from '../../../shared/components'

import CardComic from '../components/CardComic'
import { AppModuleStackProps } from '../navigation'
import { theme } from '../../../core/theme'

type ComicsScreenNavigationProp = StackNavigationProp<
  AppModuleStackProps,
  'Comics'
>

type ComicsScreenRouteProp = RouteProp<AppModuleStackProps, 'Comics'>

const FlatListAnimated = createAnimatableComponent(FlatList)

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    padding: 16,
  },
})

const ComicsScreen = () => {
  const navigation = useNavigation<ComicsScreenNavigationProp>()
  const route = useRoute<ComicsScreenRouteProp>()
  const refFlatList = useRef<typeof FlatListAnimated>(null)

  const { data } = useReactQuery<{
    results: IComicsCharacter[]
  }>({
    path: route.params.comicPath,
    queryName: 'comicsCharacter',
    dependency: route.params.comicPath,
  })

  return (
    <SafeAreaView style={styles.safeArea}>
      <SearchBar
        placeHolder="Search for another hero"
        onFocus={async () => {
          await refFlatList.current?.fadeOutRight!(800)
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }, { name: 'SearchForHero' }],
          })
        }}
      />
      <Typography>
        Comics by: <Typography fontSize="ls"> {route.params.name}</Typography>
      </Typography>
      <FlatListAnimated
        ref={refFlatList}
        ListEmptyComponent={() => (
          <LottieView
            source={require('../../../assets/marvel.json')}
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
          <BoxAnimated index={index}>
            <CardComic data={item} />
          </BoxAnimated>
        )}
      />
    </SafeAreaView>
  )
}

export default ComicsScreen
