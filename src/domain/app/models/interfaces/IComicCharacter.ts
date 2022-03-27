export interface TextObject {
  type: string
  language: string
  text: string
}

export interface Url {
  type: string
  url: string
}

export interface Series {
  resourceURI: string
  name: string
}

export interface Date {
  type: string
  date: any
}

export interface Price {
  type: string
  price: number
}

export interface Thumbnail {
  path: string
  extension: string
}

export interface Image {
  path: string
  extension: string
}

export interface Item {
  resourceURI: string
  name: string
  role: string
}

export interface Creators {
  available: number
  collectionURI: string
  items: Item[]
  returned: number
}

export interface Item2 {
  resourceURI: string
  name: string
}

export interface Characters {
  available: number
  collectionURI: string
  items: Item2[]
  returned: number
}

export interface Item3 {
  resourceURI: string
  name: string
  type: string
}

export interface Stories {
  available: number
  collectionURI: string
  items: Item3[]
  returned: number
}

export interface Events {
  available: number
  collectionURI: string
  items: any[]
  returned: number
}

export interface IComicsCharacter {
  id: number
  prices: Price[]
  title: string
  issueNumber: number
  thumbnail: Thumbnail
  stories: Stories
}
