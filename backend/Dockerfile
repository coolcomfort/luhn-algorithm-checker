# Use the official Node.js image from the DockerHub
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install the application's dependencies inside the container
RUN npm install

# Copy the local app files to the container
COPY . .

# Set the API's port number
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD ["npm", "start"]
