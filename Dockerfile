# Stage 1: Build the web application
FROM node:16-alpine AS builder
WORKDIR /app

COPY package*.json /app/
RUN npm config set unsafe-perm true
RUN npm install --force


# Copy the rest of the application
COPY . /app
RUN chown -R node:node /app/node_modules
USER root
RUN mkdir -p /app/dist && chown -R node:node /app/dist
USER node
# RUN npm run build