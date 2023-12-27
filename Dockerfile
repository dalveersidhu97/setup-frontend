# Use an official Node.js image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire app to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that Next.js will run on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "dev"]
