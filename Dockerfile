FROM node:12.13-alpine

WORKDIR /app

COPY *.json ./
RUN npm install

COPY .env* ./
COPY index.js ./

CMD ["npm", "install", "request" "--save"]
CMD ["npm", "run", "start"]