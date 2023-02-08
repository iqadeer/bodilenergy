######## Stage 1
FROM node:alpine as build-stage
LABEL auther="imran qadeer"
ENV CHOKIDAR_USEPOLLING=true
WORKDIR /var/www
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

COPY . .

RUN npm run build -- --prod

ENV REACT_APP_GRAPH_API_BASE_URL=http://localhost:5601

########## Stage 2

FROM nginx:alpine
VOLUME [ "/var/cache/nginx" ]
COPY --from=build-stage /var/www/build /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build --rm -f "./.docker/client.prod.Dockerfile" -t iqadeer/bodilenergy:bodilclient-dev-1.0 ./graph-client
# docker run --name bodil-client-app-container --rm -p 3035:80 iqadeer/bodilenergy:bodilclient-dev-1.0
