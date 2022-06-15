## Gymverse

 Modern React 18 Fitness Exercises App.

## Project Status

Developing.

## Project Screen Shot(s)

![Layout]()

## Project Live View

[Site]()

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine and change the env file with your own api keys from RapidAPI before you start running the application.

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

`localhost:3000`

## Reflection

This was a week long project built during pendamic breakout and military coup (May 2022). Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.

Originally I wanted to build an application that allowed users to look over crypto prices and news. I started this process by using the `create-react-app` boilerplate, then adding `@emotion/react` , `@emotion/styled` , `@mui/icons-material` , `@mui/material` , `react-horizontal-scrolling-menu` , `react-loader-spinner` and `react-router-dom`. I use `Coinranking` and `bing news` api from Rapid API, make sure you subscribe these before you start running the application.

One of the main challenges I ran into was react-router-dom version changes and rapid api premium problem TwT.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, Data, and a significant amount of JSX and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes.

## Notes

- The `--legacy-peer-deps `flag was introduced with v7 as a way to bypass peerDependency auto-installation; it tells NPM to ignore peer deps and proceed with the installation anyway. <b>This is how things used to be with NPM v4 thru v6.</b>



## Project steps

- Routes from rrd and Box from mui integrating in App.js. Added `Navbar` and `Footer` components in the components folder and added `Home` and `ExercisesDetail` components in the pages since these contain more components inside them. Wrap `App` with `BrowserRouter` in index.js.