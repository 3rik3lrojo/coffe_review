FROM node:20-alpine

WORKDIR /app

# instalar deps
COPY backend/package.json ./
RUN npm install

# copiar backend
COPY backend .

COPY frontend ./frontend

EXPOSE 3000

CMD ["node", "server.js"]
