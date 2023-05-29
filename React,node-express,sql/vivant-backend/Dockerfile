# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR app

# Copy the package.json and package-lock.json files to the working directory
COPY . .
# Install the dependencies
RUN npm install

# Expose the port on which the application will run
EXPOSE 5001

# Start the application
CMD ["npm", "start"]
