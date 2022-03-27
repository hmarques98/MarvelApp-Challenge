import React from 'react'
import { Image } from 'react-native'
import { Button, Box, Typography } from '../../../../shared/components'
import { ICharacter } from '../../models/interfaces/ICharacter'

interface CardCharacterProps {
  data: ICharacter
  onPress(comicPath: string): void
}

const CardCharacter = ({ data, onPress }: CardCharacterProps) => {
  const { thumbnail, name, comics, series } = data
  const { collectionURI } = comics

  const comicPath = collectionURI!.replace(
    'http://gateway.marvel.com/v1/public/',
    '',
  )

  return (
    <Button onPress={() => onPress(comicPath)} width="100%" my="ls">
      <Box flexDirection="row" width="100%">
        <Image
          source={{
            uri: `${thumbnail.path.replace('http', 'https')}.${
              thumbnail.extension
            }`,
          }}
          style={{
            width: 80,
            height: 60,
          }}
          testID="Image.thumbnail"
        />
        <Box ml="sm">
          <Typography variant="regular" testID="Character.name">
            Name: {name}
          </Typography>
          <Typography variant="regular" testID="Character.comics">
            Comics: {comics.items!.length}
          </Typography>
          <Typography variant="regular">
            Series: {series.items!.length}
          </Typography>
        </Box>
      </Box>
    </Button>
  )
}
export default CardCharacter
