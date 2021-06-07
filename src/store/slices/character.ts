import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacter } from 'src/interfaces/ICharacter';

interface IInitialState {
  favoritesHeroes: ICharacter[];
}

const initialState: IInitialState = {
  favoritesHeroes: [],
};

const authSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    addFavoriteHero: (state, action: PayloadAction<ICharacter>) => {
      const isFavorite = state.favoritesHeroes.find(
        (item) => item.name === action.payload.name,
      );
      if (isFavorite) {
        return;
      }
      state.favoritesHeroes.push(action.payload);
    },
  },
});

export const { addFavoriteHero } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
