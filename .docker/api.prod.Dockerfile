FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# RUN npm install
# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY . .
ENV SERVER_PORT=5601
EXPOSE 5601
#CMD [ "npm", "start" ]
CMD [ "node", "/usr/src/app/dist/index.js" ]

# docker build -f ./.docker/api.prod.Dockerfile -t iqadeer/bodilenergy:bodilgraphapi-1.0 ./graphapi;
# docker run -it --rm -p 5601:5601 --name bodil-graphapi iqadeer/bodilenergy:bodilgraphapi-1.0
