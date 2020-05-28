#stage 1
FROM node:10  as node

WORKDIR /app

COPY . . 

RUN npm install

CMD ["ng" , "serve"]

#RUN npm run build --prod

#stage 2
#FROM nginx:alpine
#COPY --from=node /app/dist/witc /usr/share/nginx/html



