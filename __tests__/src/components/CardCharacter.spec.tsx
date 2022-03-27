import React from 'react'

import { fireEvent, render } from '@testing-library/react-native'
import CardCharacter from '../../../src/domain/app/components/CardCharacter'

const setup = () => {
  const onPress = jest.fn()
  const cardCharacter = {
    thumbnail: { path: 'http', extension: '' },
    name: 'name',
    comics: {
      items: [
        {
          name: 'name',
          resourceURI: 'http://gateway.marvel.com/v1/public/anything',
        },
      ],
      collectionURI: '',
    },
    series: { items: [{ name: 'name', resourceURI: 'anything' }] },
  }

  return {
    ...render(<CardCharacter onPress={onPress} data={cardCharacter} />),
    onPress,
    cardCharacter,
  }
}
describe('Card Character', () => {
  it('should render correctly', () => {
    setup()
  })

  it('should render image with https', () => {
    const { getByTestId } = setup()
    const imageTestId = 'img.thumbnail'
    const { uri } = getByTestId(imageTestId).props.source

    expect(uri).toMatch(/https/)
    expect(uri).toMatch(/http/)
  })

  it('should render character with props correctly', () => {
    const { queryByText, cardCharacter } = setup()

    const name = `Name: ${cardCharacter.name}`
    const comics = `Comics: ${cardCharacter.comics.items.length}`
    const series = `Series: ${cardCharacter.series.items.length}`

    expect(queryByText(name)).toBeTruthy()
    expect(queryByText(comics)).toBeTruthy()
    expect(queryByText(series)).toBeTruthy()
  })

  it('should onPress have been called when card is pressed', () => {
    const { getByTestId, onPress, cardCharacter } = setup()
    const imageTestId = 'img.thumbnail'

    fireEvent.press(getByTestId(imageTestId))

    expect(onPress).toHaveBeenCalled()

    const {
      comics: { collectionURI },
    } = cardCharacter

    const comicPath = collectionURI!.replace(
      'http://gateway.marvel.com/v1/public/',
      '',
    )
    expect(onPress).toHaveBeenCalledWith(comicPath)
  })
})
