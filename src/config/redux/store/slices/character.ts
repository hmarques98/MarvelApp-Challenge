import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICharacter } from 'src/interfaces/ICharacter'

interface IInitialState {
  favoriteHeroes: ICharacter[]
}

const initialState: IInitialState = {
  favoriteHeroes: [],
}

const authSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    addFavoriteHero: (state, action: PayloadAction<ICharacter>) => {
      const isFavorite = state.favoriteHeroes.find(
        item => item.name === action.payload.name,
      )
      if (isFavorite) {
        return
      }
      state.favoriteHeroes.push(action.payload)
    },
  },
})

export const { addFavoriteHero } = authSlice.actions
const authReducer = authSlice.reducer
export default authReducer
