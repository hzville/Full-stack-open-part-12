FROM node:22

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

CMD npm run start-prod