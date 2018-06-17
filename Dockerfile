FROM nodejs-base

WORKDIR /app
COPY package*.json ./

RUN apk add --update yarn && yarn install
COPY . .
RUN yarn build

CMD ["node","server.js"]

