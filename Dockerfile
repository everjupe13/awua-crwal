# prod environment
FROM node:18-alpine
WORKDIR /usr/src/app

WORKDIR /usr/src/app
RUN apk add curl

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

EXPOSE 3000
RUN yarn build

CMD [ "yarn", "run", "start" ]