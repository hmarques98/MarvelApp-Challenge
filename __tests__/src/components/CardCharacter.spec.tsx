import React from 'react'

import { render } from '@testing-library/react-native'
import CardCharacter from '../../../src/domain/app/components/CardCharacter'

describe('Card Character', () => {
  const cardCharacter = {
    thumbnail: { path: 'http', extension: '' },
    name: 'name',
    comics: {
      items: [{ name: 'name', resourceURI: 'anything' }],
      collectionURI: '',
    },
    series: { items: [{ name: 'name', resourceURI: 'anything' }] },
  }
  it('should render correctly', () => {
    const onPress = jest.fn()
    render(<CardCharacter onPress={onPress} data={cardCharacter} />)
  })
  it('should render image with https', () => {
    const onPress = jest.fn()
    const image = 'Image.thumbnail'
    const { getByTestId } = render(
      <CardCharacter onPress={onPress} data={cardCharacter} />,
    )

    const { uri } = getByTestId(image).props.source
    expect(uri).toMatch(/https/)
    expect(uri).toMatch(/http/)
  })
  it('should render character name', () => {
    const onPress = jest.fn()

    const { getByTestId } = render(
      <CardCharacter onPress={onPress} data={cardCharacter} />,
    )
    const characterNameTestId = 'Character.name'
    const characterName = getByTestId(characterNameTestId)
    expect(characterName).toHaveTextContent(/name/)
  })
  it('should show text with the amount of the comics', () => {
    const onPress = jest.fn()

    const { getByText } = render(
      <CardCharacter onPress={onPress} data={cardCharacter} />,
    )
    const characterComicsTextContent = `Comics: ${cardCharacter.comics.items.length}`
    const textComics = getByText(characterComicsTextContent)

    expect(textComics).toHaveTextContent(characterComicsTextContent)
  })
})
