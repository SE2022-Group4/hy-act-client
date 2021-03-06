FROM node:lts-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN yarn global add @quasar/cli
COPY . .

FROM develop-stage as deploy-stage
RUN yarn
ENV TZ=Asia/Seoul
CMD ["quasar", "dev"]
