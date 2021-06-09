/* eslint-disable jest/expect-expect */
import React from 'react';

import { render } from '@testing-library/react-native';
import CardComic from 'components/organisms/CardComic';
import { IComicsCharacter } from 'src/interfaces/IComicCharacter';

describe('Card Character', () => {
  const cardComic: IComicsCharacter = {
    thumbnail: { path: 'http', extension: '' },
    title: 'title',
    stories: {
      items: [{ name: 'cover name', resourceURI: 'uri', type: 'cover' }],
      available: 2,
      collectionURI: '',
      returned: 1,
    },
    issueNumber: 333,
    prices: [{ price: 1.99, type: 'price' }],
    id: 111,
  };
  it('should render correctly', () => {
    render(<CardComic data={cardComic} />);
  });
  it('should image to be defined', () => {
    const imageTestId = 'Image.thumbnail';

    const { getByTestId } = render(<CardComic data={cardComic} />);

    const image = getByTestId(imageTestId);

    expect(image).toBeDefined();
  });
  it('should show the title comic', () => {
    const { getByText } = render(<CardComic data={cardComic} />);
    const titleComicText = 'Title: ' + cardComic.title;
    const titleComic = getByText(titleComicText);
    const title = titleComic.props.children.join('');

    expect(title).toMatch(titleComicText);
  });
  it('should show the issues comic', () => {
    const { getByText } = render(<CardComic data={cardComic} />);
    const issuesComicText = 'Issues: ' + cardComic.issueNumber;
    const issuesComic = getByText(issuesComicText);
    const issues = issuesComic.props.children.join('');

    expect(issues).toMatch(issuesComicText);
  });
  it('should show the price comic', () => {
    const { getByText } = render(<CardComic data={cardComic} />);
    const priceComicText = 'Price: $' + cardComic.prices[0].price;
    const priceComic = getByText(priceComicText);
    const price = priceComic.props.children.join('');

    expect(price).toMatch(priceComicText);
  });
  it('should show the covers comic', () => {
    const { getAllByText } = render(<CardComic data={cardComic} />);
    const coversComicText = cardComic.stories.items[0].name;
    const capitalizeCoverText = coversComicText.replace('cover', 'Cover');

    const [firstNameComic] = getAllByText(capitalizeCoverText);
    expect(firstNameComic).toHaveTextContent(capitalizeCoverText);
  });
});
