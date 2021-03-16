FROM node:latest as node
WORKDIR /app
COPY package*.json /app/
RUN npm install
RUN npm install -g @angular/cli@9.0.3
COPY ./ /app/
RUN npm run build --prod

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine
#Copy ci-dashboard-dist
COPY --from=node /app/dist/swe645-app /usr/share/nginx/html
#Copy default nginx configuration
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf