import { Box } from 'components/molecules/Box';
import { Typography } from 'components/molecules/Typography';
import React from 'react';
import { Image } from 'react-native';
import { ICardCharacter } from 'src/interfaces/ICharacter';

interface CardCharacterProps {
  data: ICardCharacter;
}

const CardCharacter = ({ data }: CardCharacterProps) => {
  const { thumbnail, name, comics, series } = data;
  return (
    <Box flexDirection="row" width="90%" py="md">
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
        <Typography variant="regular">Comics: {comics.items.length}</Typography>
        <Typography variant="regular">Series: {series.items.length}</Typography>
      </Box>
    </Box>
  );
};
export default CardCharacter;
