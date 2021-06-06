import { Box } from 'components/molecules/Box';
import { Button } from 'components/molecules/Button';
import { Typography } from 'components/molecules/Typography';
import React from 'react';
import { Image } from 'react-native';
import { ICharacter } from 'src/interfaces/ICharacter';

interface CardCharacterProps {
  data: ICharacter;
  onPress(comicPath: string): void;
}

const CardCharacter = ({ data, onPress }: CardCharacterProps) => {
  const { thumbnail, name, comics, series } = data;
  const { collectionURI } = comics;
  const comicPath = collectionURI.replace(
    'http://gateway.marvel.com/v1/public/',
    '',
  );
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
        />
        <Box ml="sm">
          <Typography variant="regular">Name: {name}</Typography>
          <Typography variant="regular">
            Comics: {comics.items.length}
          </Typography>
          <Typography variant="regular">
            Series: {series.items.length}
          </Typography>
        </Box>
      </Box>
    </Button>
  );
};
export default CardCharacter;
