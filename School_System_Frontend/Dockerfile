#Building images on 2 stages

#stage 1: Copying the project into the contaier
#Base image from node images
FROM node:18.12.1-alpine AS build

WORKDIR /dist/src/app


RUN npm cache clean --force

#Environment variable to expose
ENV PORT 4200

#Copy all files from host to the container
COPY . /dist/src/app

#To install node modules
RUN npm install

#To build the angular project based of node
RUN npm run build --prod


#Stage 2: Deploying project on ng server
#Base image from nginx
FROM nginx:1.17.1-alpine

#Copy the output of the project run into the nginx container to deploy it
COPY --from=build /dist/src/app/dist/school-system /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

#Expose the port variable
EXPOSE ${PORT}