# Install deps & build
#Use Node LTS image
FROM node:20-alpine

#create app directory
WORKDIR /app


#install dependencies
COPY package.json yarn.lock ./

# Install dependencies with Yarn
RUN yarn install --frozen-lockfile

#Copy Source

COPY . .

EXPOSE 3000
CMD ["yarn", "start:dev"]