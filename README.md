# Task Report: React.js, HTML, and CSS Assessment

I have completed the given test task to assess my skills in React.js, HTML, and CSS. Below is a summary of the work done.

Task: https://development.kameleoon.net/oivanov/frontend-interview-task

API: https://development.kameleoon.net/oivanov/frontend-interview-task-api

Figma: https://www.figma.com/file/PFdFpIajQbuGibIbEYnE3l/Interview-task-for-frontend-developers

## Technical Requirements

- Created React application using the create-react-app application template.
- Utilized the following external libraries: axios, classnames, react-router-dom.
- Demonstrated the use of React hooks.
- Used SCSS Modules.

## Functionality Requirements

- Developed a dashboard page that displays a list of created A/B tests from a JSON file obtained through the provided API.
- Implemented table row highlighting on hover as shown in the mockup.
- Displayed sites in the corresponding column without http or https protocols and a "www" prefix.
- Implemented filtering by item name, hiding other records and showing only the items that match the filter. Displayed a corresponding message and a reset button if no records are found.
- Enabled sorting (ASC, DESC) by clicking on the column titles:
- - Sorted name, type, and site columns in alphabetical order.
- - Sorted status column as follows:
- - - ASC: Online, Paused, Stopped, Draft
- - - DESC: Draft, Stopped, Paused, Online

## Additional Tasks

- Implemented routing between three pages (dashboard, results, and finalize) using react-router-dom.
- Implemented URL redirection to /results/[testId] and /finalize/[testId] when the user clicks on the Results or Finalize buttons on the dashboard page, respectively.
- Ensured smooth redirection without reloading the browser window.

## TODO

- Fix the text case in the Type, Status columns;
- Write unit tests for the sortTestData function.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
