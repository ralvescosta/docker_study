FROM node:14

WORKDIR /front

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build