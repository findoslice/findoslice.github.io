FROM node:10

WORKDIR /usr/src/website

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 4000

CMD ["node", "api.js"]