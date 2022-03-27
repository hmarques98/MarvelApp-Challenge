import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'

import React from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

import { characterState } from '../../../config/redux/store/slices'
import { Box, Typography } from '../../../shared/components'

import { AppModuleStackProps } from '../navigation'
import CardCharacter from '../components/CardCharacter'
import { theme } from '../../../core/theme'

type FavoriteHeroesScreenNavigationProp = StackNavigationProp<
  AppModuleStackProps,
  'FavoriteHeroes'
>

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
})

const FavoriteHeroesScreen = () => {
  const navigation = useNavigation<FavoriteHeroesScreenNavigationProp>()

  const { favoriteHeroes } = useSelector(characterState)

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
              onPress={comicPath => {
                navigation.navigate('Comics', { comicPath, name: item.name })
              }}
            />
          )}
        />
      </Box>
    </SafeAreaView>
  )
}

export default FavoriteHeroesScreen
