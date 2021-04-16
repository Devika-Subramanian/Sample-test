FROM node:14

WORKDIR /app

COPY package*.json ./

COPY . /app

RUN npm install

EXPOSE 3000

CMD ["node","./src/app.js"]
# CMD npm test
