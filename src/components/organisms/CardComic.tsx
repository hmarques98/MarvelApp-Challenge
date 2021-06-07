import { Box } from 'components/molecules/Box';
import { Button } from 'components/molecules/Button';
import { Typography } from 'components/molecules/Typography';
import React, { useEffect, useRef } from 'react';
import { Image } from 'react-native';
import {
  createAnimatableComponent,
  AnimatableProperties,
  View,
} from 'react-native-animatable';
import { IComicsCharacter } from 'src/interfaces/IComicCharacter';

interface CardComicProps {
  data: IComicsCharacter;
  index: number;
}

const BoxAnimation = createAnimatableComponent(Box);

export type BoxTypeRef = typeof BoxAnimation;

const CardComic = React.forwardRef<typeof BoxAnimation, CardComicProps>(
  ({ data, index }, ref) => {
    const { stories, id, thumbnail, title, issueNumber, prices } = data;
    const covers = stories.items.filter((item) => item.type === 'cover');

    return (
      <Box alignItems="center">
        <BoxAnimation
          style={{
            opacity: data ? 0 : 1,
          }}
          ref={ref}
          animation={'fadeInLeft'}
          delay={50 * index}
          key={id}
          flexDirection="row"
          width="100%"
          flexWrap="wrap"
          my="ls">
          <Image
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
            <Typography numberOfLines={1}>{title} </Typography>
            <Typography variant="regular">Issues: {issueNumber}</Typography>
            <Typography variant="regular">Price: ${prices[0].price}</Typography>
            {covers.map((cover) => (
              <Typography variant="regular" key={cover.resourceURI}>
                {cover.name.replace('cover', 'Cover')}
              </Typography>
            ))}
          </Box>
        </BoxAnimation>
      </Box>
    );
  },
);
export default CardComic;
