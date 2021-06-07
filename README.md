<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- [![MIT License][license-shield]][license-url] -->

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://gitlab.com/hmarques98/oowlish-challenge/blob/main/docs/home_offline.png">
    <img src="docs/home_offline.png" alt="Logo" height="700">
  </a>

  <h3 align="center">React Native App - Marvel Heroes and Comics</h3>

  <p align="center">
   Consuming api by Marvel Developer and showing Heroes(Characters) and Comics by Characters.
    <br />
    <br />
    <a href="https://gitlab.com/hmarques98/oowlish-challenge/issues">Report Bug</a>
    ·
    <a href="https://gitlab.com/hmarques98/oowlish-challenge/issues">Request Feature</a>
   
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

 <a href="https://gitlab.com/hmarques98/oowlish-challenge/tree/main/docs">
    <img src="docs/search_heroes_1.png" 
    height="500"
    alt="search heroes">
    <img src="docs/search_heroes_2.png" 
    height="500"
     alt="search heroes">
    <img src="docs/list_comics.png" 
    height="500"
     alt="list comics">
    <img src="docs/favorites.png" 
    height="500"
     alt="favorites heroes">
  </a>

It was built a application using React Native as framework and consuming the api from [Developer Marvel Portal](https://developer.marvel.com/docs). Also used libraries how Storybook, React Query, Plops Js, React Native Animatable and among others.

### Built With

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [React Navigation V5](https://reactnavigation.org/)
- [Storybook](https://reactnative.dev/)
- [Styled System](https://styled-system.com/)
- [Styled Components](https://styled-components.com/)
- [Redux-toolkit](https://redux-toolkit.js.org/)
- [PlopJS](https://plopjs.com/)
- [React Query](https://react-query.tanstack.com/)
- [React Native Flipper](https://fbflipper.com/docs/features/react-native/)
- [Axios](https://github.com/axios/axios)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [React Native Animatable](https://github.com/oblador/react-native-animatable)

<!-- GETTING STARTED -->

## Getting Started

You need to have installed NodeJs and configured on machine and on your OS to run on emulator to Android or simulator in iOS

### Installation

1. Clone the repo
   ```sh
   git clone https://gitlab.com/hmarques98/oowlish-challenge
   ```
2. Install NPM packages
   ```sh
   npm install or yarn add
   ```
3. To iOS install pods with command`
   ```sh
   npx pod install
   ```
4. To run on device or emulator

   ```sh
   yarn android #to android
   ```

   ```sh
   yarn ios #to iOS
   ```

<!-- USAGE EXAMPLES -->

## Usage

In project directory src is all of file to screens and components

The folder plop-templates has all templates to generate templates to create a Component or a Screen.

To create a Component with script run:

Will to prompt what is name component

```sh
yarn generate component
```

To create a Screen with script run:

Will to prompt what is name screen

```sh
yarn generate screen
```

The folder storybook has all configuration working storybook library

To see working go to index.js in root directory and change to true the variable:
Ex:

```js
const showStorybook = true;
```

Now go to your application and you will see the library working and components Button, Typography and Box created.

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Henrique Marques - [@hmarques98\_](https://twitter.com/@hmarques98) - marquesprogrammer@hotmail.com.com

Project Link: [https://gitlab.com/hmarques98/oowlish-challenge](https://gitlab.com/hmarques98/oowlish-challenge)

<!-- ACKNOWLEDGEMENTS -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-url]: https://gitlab.com/hmarques98/oowlish-challenge/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/hmarques98/RNOffGeoLoc.svg?style=for-the-badge
[forks-url]: https://gitlab.com/hmarques98/oowlish-challenge/network/members
[stars-shield]: https://img.shields.io/github/stars/hmarques98/RNOffGeoLoc.svg?style=for-the-badge
[stars-url]: https://gitlab.com/hmarques98/oowlish-challenge/stargazers
[issues-shield]: https://img.shields.io/github/issues/hmarques98/RNOffGeoLoc.svg?style=for-the-badge
[issues-url]: https://gitlab.com/hmarques98/oowlish-challenge/issues
[license-shield]: https://img.shields.io/github/license/hmarques98/RNOffGeoLoc.svg?style=for-the-badge
[license-url]: https://gitlab.com/hmarques98/oowlish-challenge/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/hmarques98
[product-screenshot]: images/screenshot.png
