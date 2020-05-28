#stage 1
FROM node:10 

WORKDIR /app

COPY . . 

RUN npm install

#sRUN npm run build --prod

#stage 2
#FROM nginx:alpine
#COPY --from=node:10 /app/dist/witc /usr/share/nginx/html



