import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Box, Typography } from '../../../shared/components'
import { theme } from '../../../core/theme'

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
})

interface IDescription {
  screenName: string
  children: React.ReactNode
}
const Description = ({ screenName, children }: IDescription) => {
  return (
    <Box my="md">
      <Typography color="primary">{screenName}</Typography>
      <Typography>----</Typography>
      <Typography>{children}</Typography>
    </Box>
  )
}
const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Box p="ls" flex={1}>
        <Description screenName="Home">
          Of this application in the Home Screen you will see two initial
          buttons, but if you have favorite heroes already, you will see three
          buttons
        </Description>
        <Description screenName="Search for a Hero">
          In this screen you will see a search bar where you can to search for
          hero by initial letters and will be showing twenty heroes(characters).
          {'\n'}
          {'\n'}
          If you tap on them, you will add as a favorite hero and go to Comics
          Screen.
        </Description>
        <Description screenName="Comics">
          In this screen you will see a search bar where you can to search for
          another hero and if you tap in, you will to Search for a Hero Screen
          with a keen fade animation
        </Description>
        <Description screenName="Favorite Heroes">
          In this screen you will see all your favorite heroes (heroes that you
          tapped previously)
        </Description>
      </Box>
    </SafeAreaView>
  )
}

export default AboutScreen
