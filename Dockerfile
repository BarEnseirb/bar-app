# syntax=docker/dockerfile:1
FROM node:17-bullseye
#RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["node", "src/index.js"]
