
## Steps needed to run this file locally:

First, you can run this command to clone this repository:

### `git clone https://github.com/jdaws97/crypto-price-v2`

Change into the directory:

### `cd crypto-price-v2`

Once you're in the directory, you'll need to install npm and the required packages for this project:

### `npm install`

### `npm install react-router-dom`

### `npm install styled-components`

### `npm install coingecko-api`

### `npm install react-chartjs-2`

Once you have all the required libraries/packages installed - make sure you're in the project directory still and run the command:

### `npm start`

This should launch a webpage under https://localhost:3000

## If you want to create a docker image of this project, the dockerfile is already set up and ready for use

Go to the directory for the project

## `cd crypto-price-v2`

Then, run this command to create the docker image (I'm assuming you already have docker installed, if you don't go here and follow installation instructions: https://docs.docker.com/get-docker/)

## `docker build -f Dockerfile -t crypto-price-v2:1.0.0-dev .` 

It's good practice to add in a build version and what type of environment it is (dev, etc)

To run the image, you need to make sure port 3000 is open, and then run this command:

## `docker run -it -p 3000:3000 crypto-price-v2:1.0.0-dev`

Go to your browser and open up https://localhost:3000 and it should have the image up and running.

Thanks!



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


