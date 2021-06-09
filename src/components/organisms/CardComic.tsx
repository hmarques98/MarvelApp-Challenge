import { Box } from 'components/molecules/Box';
import { Typography } from 'components/molecules/Typography';
import { BoxAnimation } from 'components/organisms/BoxAnimated';
import React from 'react';
import { Image } from 'react-native';
import { IComicsCharacter } from 'src/interfaces/IComicCharacter';
interface CardComicProps {
  data: IComicsCharacter;
}

const CardComic = ({ data }: CardComicProps) => {
  const { stories, id, thumbnail, title, issueNumber, prices } = data;
  const covers = stories.items.filter((item) => item.type === 'cover');

  return (
    <Box alignItems="center">
      <Box flexDirection="row" width="100%" flexWrap="wrap" my="ls">
        <Image
          testID="Image.thumbnail"
          source={{
            uri: `${thumbnail.path.replace('http', 'https')}.${
              thumbnail.extension
            }`,
          }}
          style={{
            width: 80,
            height: '100%',
          }}
        />

        <Box width="70%" borderRadius="sm" ml="sm">
          <Typography numberOfLines={1}>Title: {title}</Typography>
          <Typography variant="regular">Issues: {issueNumber}</Typography>
          <Typography variant="regular">Price: ${prices[0].price}</Typography>
          {covers.map((cover) => (
            <Typography variant="regular" key={cover.resourceURI}>
              {cover.name.replace('cover', 'Cover')}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CardComic;
