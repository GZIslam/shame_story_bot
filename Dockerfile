FROM node:22-alpine

WORKDIR /app

COPY *.json ./
RUN npm install

COPY .env* ./
COPY index.js ./

CMD ["npm", "run", "start"]