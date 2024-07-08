FROM node:20 
WORKDIR /app
COPY package.json ./
RUN npm install 
#copy my code
COPY . .
#Run the app
RUN npm run build
#nginx : image to server our app
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx
#http only travels to port 80
EXPOSE 80 
#cmd to run our engine
CMD ["nginx","-g","demon off;"]
