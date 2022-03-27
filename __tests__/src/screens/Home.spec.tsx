import React from 'react'
import MockedNavigator from '../../../__mocks__/MockedNavigator'
import { customRender } from '../../../__mocks__/CustomRender'
import HomeScreen from '../../../src/domain/app/screens/Home'

describe('HomeScreen', () => {
  it('should render home screen correctly', () => {
    customRender(<MockedNavigator component={HomeScreen} params={{}} />)
  })
  it('should render three buttons in main box', () => {
    const { getByTestId } = customRender(
      <MockedNavigator component={HomeScreen} params={{}} />,
    )
    const box = getByTestId('Box')
    expect(box.children.length).toBe(3)
  })
  it('should not show favorite heroes button', () => {
    const { queryByTestId } = customRender(
      <MockedNavigator component={HomeScreen} params={{}} />,
    )
    const favoriteButton = queryByTestId('Button.favoriteHeroes')
    expect(favoriteButton).toBeNull()
  })
  it('should show favorite heroes button', () => {
    const { getByTestId } = customRender(
      <MockedNavigator component={HomeScreen} params={{}} />,
      { initialState: { character: { favoriteHeroes: [{ hero: '' }] } } },
    )
    const favoriteButton = getByTestId('Button.favoriteHeroes')
    expect(favoriteButton).toBeDefined()
  })
})
