# Use an official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the app
COPY . .

# Expose port 8090 (for the frontend dev server)
EXPOSE 3001

# Start the app (dev server on port 8090)
CMD ["yarn", "dev", "-p", "3001"]
