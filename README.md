## Gymverse

Modern React 18 Fitness Exercises App.

## Project Status

Finished

# Project Screen Shot(s)

![Layout](https://i.ibb.co/J7sBZdZ/gym.png)

## Project Live View

[Site](https://pwn-gymverse.netlify.app/)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine and change the env file with your own api keys from RapidAPI before you start running the application.

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

`localhost:3000`

## Reflection

This project was built during pendamic breakout and military coup (May 2022). Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.

Originally I wanted to build an application that allowed users to look over crypto prices and news. I started this process by using the `create-react-app` boilerplate, then adding `@emotion/react` , `@emotion/styled` , `@mui/icons-material` , `@mui/material` , `react-horizontal-scrolling-menu` , `react-loader-spinner` and `react-router-dom`. I use `Exercises db` and `YT search and download` api from Rapid API, make sure you subscribe these before you start running the application.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, Data, and a significant amount of JSX and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes.

## Notes

- The `--legacy-peer-deps `flag was introduced with v7 as a way to bypass peerDependency auto-installation; it tells NPM to ignore peer deps and proceed with the installation anyway. <b>This is how things used to be with NPM v4 thru v6.</b>

- In SearchExercises, since you've used `absolute` in the `button`, you must include `right` property to make it center.

- \*\*\* Need `REACT_APP` Prefix in .env File

## Resources

- https://stackoverflow.com/questions/70100830/why-do-we-need-react-app-prefix-in-env-file-for-react-development

