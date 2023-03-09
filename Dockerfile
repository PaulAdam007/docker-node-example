FROM node:6.10.3

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app/
RUN npm install

# Bundle app source
COPY . /app

EXPOSE 9000
CMD [ "npm", "start" ]
