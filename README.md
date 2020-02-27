# Calculator Web App (with Domain and Test driven development)

This project was originally an entry test for XYZ company.

This one was developed with Domain driven and Test driven in mind for reasons:
- Domain driven will help us to separate business logic away from libraries and frameworks, which allows us to create and maintain complex, fast to implement, easy to change business requirement. This also provide a little bit help for the second arguments, separated logic is easier to test.
- Test driven will help us to be confident during development (adding new feature and fixing bugs) without breaking previous implementation but also in deployment process.

Project structure:
 - Calculator state and logic will be on a separated directory (nothing related to React yet). Calculation logic was 100% coverage with unit test.
 ![100% test coverage](https://raw.githubusercontent.com/quoctrungdh/calculator-web-app/master/Screen%20Shot%202020-02-27%20at%204.55.34%20PM.png)
 - React only handle render state, handling and dispatch user events to calculator engine.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project also use Tailwindcss for quick and maintainable styling system.

## Available Scripts

In the project directory, you can run:

### `npm install`

To install all of the required dependencies for developement and building production app.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm test:coverage`

Launches the test runner in the interactive watch mode and generate test coverage report.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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
