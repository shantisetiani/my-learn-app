# My Learn App

My Learn App is a web application where you can see any information of available classes and register to join the class. you can learn many things using this app!

## Available Scripts

To install and run the project in your local computer, you need to do:<br />

1. Open terminal<br />
2. In your terminal, run command:<br /><br />
   `git clone git@github.com:shantisetiani/my-learn-app.git`<br />
   to clone this project.<br /><br />
   `cd my-learn-app`<br />
   to go to the project directory. And then:<br /><br />
   `npm install`<br /><br />
3. In the project folder, copy and paste `.env.example` file and rename it into `.env`<br />
4. Input the API url in REACT_APP_API_URL variable

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
<br /><br />

---

## Folder Structure

    .
    ├── ...
    ├── bin
    │   ├── run_test.sh             # The script to run the unit test
    │   └── run_web.sh              # The script to run the web
    ├── public                      # Public Files
    │   ├── css                     # Contains css files
    │   ├── images                  # Contains image files
    │   ├── index.html              # Main HTML file
        └── ...
    ├── src                         # Source Files
    │   ├── __tests__               # Testing files for actions and reducers
    │   ├── api
    │   │   ├── ClassApi.tsx        # Contains functions that call API
    │   │   └── index.tsx           # Contains a constant to simplify API call
    │   ├── models
    │   │   └── index.tsx           # Contains interface to define objects with properties
    │   ├── pages                   # All pages of the web
    │   │   ├── ClassDetail         # Class Detail page
    │   │   │   └── index.js        # Main component of Class Detail
    │   │   └── ClassList           # Class List page
    │   │       └── index.js        # Main component of Class List
    │   ├── redux                   # Redux files, contains action and reducer
    │   │   ├── action.ts           # Class Detail page
    │   │   └── reducer.ts          # Class List page
    │   ├── routes
    │   │   └── index.tsx           # Contains routing of this web, render the router
    │   ├── App.tsx                 # Main component of React App, contains main layout
    │   ├── index.css               # Main css
    │   ├── index.tsx               # Rendering ReactDOM and redux provider
    │   ├── setupTests.ts           # Setup for testing purpose
    │   └── store.ts                # Redux store, combine all reducers
    ├── tests                       # Files for unit testing purpose
    │   ├── api                     # Testing files for API
    │   └── redux                   # Testing files for actions and reducers
    └── ...
