import { StackNavigationOptions } from '@react-navigation/stack'
import AboutScreen from './About'
import ComicsScreen from './Comics'
import FavoriteHeroesScreen from './FavoriteHeroes'
import HomeScreen from './Home'
import SearchForHeroScreen from './SearchForHero'

export type MainModuleStackParam = {
  Home: undefined
  About: undefined
  FavoriteHeroes: undefined
  SearchForHero: undefined
  Comics: { comicPath: string; name: string }
  /* PLOP_INJECT_TYPE */
}

const options: StackNavigationOptions = { gestureEnabled: false }

export const screens = {
  Home: { component: HomeScreen, options },
  About: { component: AboutScreen },
  FavoriteHeroes: { component: FavoriteHeroesScreen },
  SearchForHero: { component: SearchForHeroScreen },
  Comics: { component: ComicsScreen },
  /* PLOP_INJECT_SCREEN */
}
