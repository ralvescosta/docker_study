FROM node:14 as build
WORKDIR /front
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx
COPY --from=build front/build /usr/share/nginx/front
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]