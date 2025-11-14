# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
hi

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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





Explication: 


This project started by creating a fork of the original repository so that we could work on our own copy without affecting the source. The fork allowed us to make changes, add a Dockerfile, and configure the GitHub Actions workflow in our own space. Once everything was ready, we pushed the updates to our forked repository, which automatically triggered the workflow to build and publish the Docker image to Docker Hub.


This project shows how we containerized a frontend application using Docker and automated the build and deployment process with GitHub Actions. The final Docker image is pushed to Docker Hub so it can be pulled and run anywhere.

The first step was to create a Dockerfile. We used a lightweight Node.js image to install the project dependencies and build the frontend code. Once the application was built, we used an Nginx image to serve the static files. This way, the container only contains the optimized production build, which makes it smaller and faster.

Next, we moved to automation with GitHub Actions. A workflow file was created under .github/workflows/. This workflow is triggered every time changes are pushed to the main branch. The steps include: checking out the code, setting up Docker Buildx, logging into Docker Hub using secrets, and finally building and pushing the Docker image. The secrets (DOCKERHUB_USERNAME and DOCKERHUB_TOKEN) were configured in the repository settings so that credentials are never exposed directly in the code.

DOCKERHUB_USERNAME → our Docker Hub username.

DOCKERHUB_TOKEN → an access token generated from Docker Hub.
These secrets allow GitHub Actions to log in securely without exposing credentials in the code.

We then created a GitHub Actions workflow. This workflow is triggered every time we push changes to the main branch. The workflow performs the following steps:

Checks out the repository code.

Sets up Docker Buildx to build the image.

Logs in to Docker Hub using the secrets we configured.

Builds the Docker image and pushes it to Docker Hub with the tag latest.

Finally, once the workflow runs successfully, the Docker image is available on Docker Hub under our account. This means we can now run the frontend anywhere just by pulling the image with:

docker pull chechoiot/docker-test:latest
docker run -d -p 80:80 chechoiot/docker-test:latest


In summary, the process involved creating a Dockerfile to containerize the app, configuring Docker Hub to store the image, setting up GitHub Actions to automate the build and push, and finally confirming that the image is available online. With this setup, our frontend is ready to be deployed consistently and easily on any server.
