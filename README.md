This project is a landing page containing links to my profiles and a showcase of some of my work.

Live version: https://suryaputra.web.id

## Setting Up Firebase Analytics

This project uses Firebase Analytics mainly to track visits on the resume request page.

To enable analytics, fill `src/firebaseConfig.sample.js` with your Firebase project config, or replace the import in `src/lib/firebase.js` with your own ignored config module.

Follow the Firebase web setup guide to create your own project:
https://firebase.google.com/docs/web/setup

To disable analytics, leave `measurementId` blank in `src/firebaseConfig.sample.js`.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.

### `npm test`

Launches the Vitest test runner.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

Serves the production build locally.
