FROM node:lts-alpine

RUN apk update && apk add nginx && npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY ./ ./

RUN pnpm run build

COPY nginx.conf /etc/nginx/http.d/default.conf
COPY fullchain.pem /etc/nginx/certificats/fullchain.pem
COPY privkey.pem /etc/nginx/certificats/privkey.pem

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]