
### Steps needed to run this file locally:

First, you can run this command to clone this repository:

`git clone https://github.com/jdaws97/crypto-price-v2`

Change into the directory:

`cd crypto-price-v2`

Once you're in the directory, you'll need to install npm and the required packages for this project:

`npm install`

`npm install react-router-dom`

`npm install styled-components`

`npm install coingecko-api`

`npm install react-chartjs-2`

Once you have all the required libraries/packages installed - make sure you're in the project directory still and run the command:

`npm start`

This should launch a webpage under https://localhost:3000

### If you want to create a docker image of this project, the dockerfile is already set up and ready for use

Go to the directory for the project

`cd crypto-price-v2`

Then, run this command to create the docker image (I'm assuming you already have docker installed, if you don't go here and follow installation instructions: https://docs.docker.com/get-docker/)

`docker build -f Dockerfile -t crypto-price-v2:1.0.0-dev .` 

It's good practice to add in a build version and what type of environment it is (dev, etc)

To run the image, you need to make sure port 3000 is open, and then run this command:

`docker run -it -p 3000:3000 crypto-price-v2:1.0.0-dev`

Go to your browser and open up https://localhost:3000 and it should have the image up and running.

Thanks!



