FROM webbase:16.17.0
# 設置項目目錄
WORKDIR /app
# 安裝項目依賴
# Set environment variables using the ARG values
ARG TITLE='請提供標題'
ARG VITE_API_URL=http://localhost/backend/
ARG PROJECT_NAME
ARG IMAGE_REGISTRY
ARG METAKEY1
ARG METAKEY2
ARG INDEX_URL
ARG TRUSTED_HOST
ARG NPM_REGISTRY
ARG MLaas_env

# npm install
COPY additional_package*.json /app/
RUN npm config set registry $NPM_REGISTRY
RUN cat additional_package.json | jq -r '.dependencies | keys | .[]' | xargs npm install --save

COPY ./src /app/src
RUN chown -R node:node /app/node_modules
RUN sed -i "s@<title>.*</title>@<title>$TITLE</title>@" /app/index.html

USER node
# 運行
CMD ["npm", "run", "dev"]
