# ---- Build
FROM node:24-slim AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Production
FROM gcr.io/distroless/nodejs24-debian13

WORKDIR /app

# Variables
ENV SERVER_PORT=3000

COPY package.json ./
COPY --from=builder /app/dist ./dist
COPY server.js ./

EXPOSE 3000

CMD ["server.js"]

