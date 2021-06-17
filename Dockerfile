FROM node:16-alpine3.11
WORKDIR /usr/src/app

RUN npm install -g create-react-app &&\
    npm i react-router-dom

ENV PATH $PATH:./node_modules/.bin

EXPOSE 3030
