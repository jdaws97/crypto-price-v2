# syntax=docker/dockerfile:1
FROM alpine:latest
RUN apk add --no-cache nodejs npm
WORKDIR /src
COPY . .
RUN npm install 
EXPOSE 9005
ENTRYPOINT ["node"]
CMD ["/src/App.js"]