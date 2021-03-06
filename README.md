## Project

## Starting the project
### `npm install && npm run start`

## Assumptions I made
(1) If a rover goes out of bounds it will remain in its previous position

(2) Error handling on each form input, and it needs to account for starting cordinates starting out of the boundaries

## If I had more time
(1) Would have enforced prop-types on each file, and enforced the data passed

(2) Write a spec file for each class

(3) Improve the animation by creation artifical coordinates between each point

(4) Would have seperated the canvas from the lines drawm for the rover component

## Tech Stack
(1) Redux

(2) Redux Form

(3) Material UI

(4) React

(5) React-Reselect

(6) Sass

## About the files
(1) The algorithim for the rover is in ./src/components/compass/roverUtils.js

(2) There is a reducer for the rover state based on form submits. All the reducers and selectors for the app store are within ./src/store

(3) The redux form to set up the canvas and rover is within ./src/components/form

(4) The main view is within ./src/views

(5) The validations for the form is within ./src/components/form/roverFormContainer

(6) Wrote a helper lib for validating called reduxFormValidator.js. This can be found within ./src/components/utils

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
