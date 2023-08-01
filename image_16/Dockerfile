FROM node:16.17.0
# 設置項目目錄
WORKDIR /app
# 安裝項目依賴
COPY package*.json /app/
COPY ui-1.3.16.tgz /app/ui-1.3.16.tgz
RUN npm config set unsafe-perm true
# 安装特定版本的npm
RUN npm install -g npm@9.8.1



RUN npm install --force
# RUN npm install ---save ui-1.3.13.tgz

# Set environment variables using the ARG values
# ENV VITE_API_URL=http://localhost/backend/

COPY . /app

RUN chown -R node:node /app/node_modules

USER node
# 運行
CMD ["npm", "run", "dev"]
