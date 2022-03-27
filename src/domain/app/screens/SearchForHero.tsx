import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import { FlatList, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import LottieView from 'lottie-react-native'

import useReactQuery from '../../../hooks/useReactQuery'
import { Box, SearchBar, Typography } from '../../../shared/components'
import { addFavoriteHero } from '../../../config/redux/store/slices/character'
import { theme } from '../../../core/theme'

import { ICharacter } from '../models/interfaces/ICharacter'
import CardCharacter from '../components/CardCharacter'
import { AppModuleStackProps } from '../navigation'

type SearchForHeroScreenNavigationProp = StackNavigationProp<
  AppModuleStackProps,
  'SearchForHero'
>

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    padding: 16,
  },
})

const SearchForHeroScreen = () => {
  const navigation = useNavigation<SearchForHeroScreenNavigationProp>()
  const [text, setText] = useState('')

  const { data, refetch, isLoading } = useReactQuery<{
    results: ICharacter[]
  }>({
    path: `characters?orderBy=name${text ? '&nameStartsWith=' + text : ''}`,
    queryName: 'characters',
    dependency: true,
  })

  useEffect(() => {
    refetch()
  }, [text, refetch])

  const dispatch = useDispatch()

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

        <Typography fontSize="ls" variant="regular">
          Showing 20 heroes:{' '}
        </Typography>
        {!isLoading ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data?.results}
            ListEmptyComponent={() => (
              <Box justifyContent="center" alignItems="center" height={100}>
                <Typography color="primary">No results</Typography>
              </Box>
            )}
            style={{ marginTop: 10 }}
            renderItem={({ item }) => (
              <CardCharacter
                key={item.id}
                data={item}
                onPress={comicPath => {
                  navigation.navigate('Comics', { comicPath, name: item.name })
                  dispatch(addFavoriteHero(item))
                }}
              />
            )}
          />
        ) : (
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
      </Box>
    </SafeAreaView>
  )
}

export default SearchForHeroScreen
