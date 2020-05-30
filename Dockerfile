#stage 1
FROM node:10  as node

WORKDIR /app

COPY . . 

RUN npm install
#fn,dknfknqskfnqsknf

RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/witc /usr/share/nginx/html



