# Deployment Guide for Our Projects

This guide will walk you through the steps to package and deploy the frontend and backend components of our project.

## Prerequisites

- Ensure you have \`npm\` and \`tar\` installed on your system.
- Make sure you have access to CapRover (referred to as 'CR') for deployments.

## Frontend Deployment

Follow these steps after you have made changes to the frontend:

1. **Build the Project**:  
   Before packaging the frontend, you need to create an optimized build of your project. Run the following command in the frontend directory:
   \```
   npm run build
   \```

2. **Package the Frontend**:  
   Once the build is complete, you can create a tarball of the required deployment files. Execute the following command:
   \```
   tar -czvf frontend.tar.gz build Dockerfile captain-definition
   \```

3. **Upload to CR**:  
   After packaging, navigate to CapRover and upload the \`frontend.tar.gz\` file for deployment.

## Backend Deployment

For the backend, follow the steps below:

1. **Package the Backend**:  
   Tar all the backend files with the following command:
   \```
   tar -czvf my-app-all-files.tar.gz *
   \```

2. **Upload to CR**:  
   Navigate to CapRover and upload the \`my-app-all-files.tar.gz\` file to deploy the backend.

---

Feedback and Contributions:  
If you encounter any issues or have suggestions for improving this deployment process, please raise an issue or submit a pull request.
