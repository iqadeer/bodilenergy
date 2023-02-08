FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ["package.json", "package-lock.json*", "./"]
COPY ["tsconfig.json", "./"]

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build

ENV SERVER_PORT=5601
EXPOSE 5601
#CMD [ "npm", "start" ]
CMD [ "node", "./dist/index.js" ]

# docker build -f ./.docker/api.dev.Dockerfile -t iqadeer/bodilenergy:bodilgraphapi-dev-1.0 ./graphapi;
# docker run -it --rm -p 5601:5601 --name bodil-graphapi iqadeer/bodilenergy:bodilgraphapi-dev-1.0
