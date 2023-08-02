FROM ubuntu:20.04 AS node_install
WORKDIR $HOME
RUN adduser --disabled-password --gecos '' node
RUN apt-get update -y && apt-get install -y wget


COPY ./Node/node-install.sh .
ENV LANG=en_US.UTF-8
ENV NVM_DIR="$HOME/.nvm"
ENV NODE_DEFAULT_VERSION=16.17.0
RUN sh ./node-install.sh
ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_DEFAULT_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_DEFAULT_VERSION/bin:$PATH

COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
RUN chown -R node:node $NODE_PATH
ENTRYPOINT ["docker-entrypoint.sh"]

WORKDIR /app
COPY package*.json /app/
COPY ui-1.3.16.tgz /app/
RUN npm install --force 
# # Set environment variables using the ARG values
# ENV VITE_API_URL=http://localhost/backend/

COPY . /app
RUN chown -R node:node /app/node_modules
USER node
# 運行
CMD ["npm", "run", "dev"]
