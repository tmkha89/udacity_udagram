FROM node:12
## Create app directory
WORKDIR /usr/src/app
## Install app dependencies
## A wildcard is used to ensure both package.json AND package-lock.json are copied where available (npm@5+)

COPY package.json ./ package-lock.json ./
## Bundle app source
COPY . .

# in case package.json files are not synced
RUN npm install -f

RUN npm ci

EXPOSE 8080
CMD [ "npm", "run", "prod" ]