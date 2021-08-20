# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Title:
The Days Until – The Countdown Clock for Kids.
MVP:

1. Built as a PWA
2. Short term development: React, using Google Firebase for Database & Storage, Serverless, Google Calendar API
3. Long-Term: A production ready mobile version in React-Native using MongoDB/Express for the backend.
   Objective:
   My objective is to create a mobile-based application for kids that has a countdown clock for each Holiday and/or birthday. My kids are always asking “How many days until…?” and it would be convenient to have an app that does this privately (non-Google). The parents can sign the kids up using a simple log in where they can ‘optionally’ enter their birthday. After signing up, the main home screen shows a few responsive rows of boxes, each colored and decorated to represent individual Holidays. There is also an option to add a Holiday not listed or enter additional birthdays (for other family members or friends). Clicking on the box will take the user to a new page where a festive countdown clock is showing, with data being pulled from a Google Calendar API (ironically) and page stylings to represent each holiday. There will also be a form on each page to input personal notes or add a (wish) list that will be stored. I would hope to be able to add open-source seasonal music to optionally play in the background of each page, as well. The desired end result will be to have an working app to add to the google app store and/or IOS app store for sale.  
   User Stories:
4. As a new user, I want to be able to register and set up an account for my child.
5. As an existing user, I want to be able to set up and change my home page layout and choices.
6. As an existing user, I want to be able to click on an event or Holiday and be taken to that page.
7. As an existing user, I want to be able to add and save notes or (wish)lists to each page.
   Reason: Over the last few years, my kids have been googling, ‘How many days until….. <insert important date here>?’ as a Holiday approaches. Unfortunately, this can create privacy issues due to Google’s invasive tap on our browsing activities. So, I have decided to implement this mobile app in response, with privacy being of the utmost importance, but all the while designing a smart, playful interface that a child would enjoy. This will also help me continue to expand my web development skills. The focus here will lie on React in the beginning, and then React-Native mobile development in the long run, which both fits very well into my existing portfolio.
