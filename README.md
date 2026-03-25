# ☕ Coffee Review

Aplicación web para registrar y analizar cafés.

Permite:
- Registrar cafés con distintos parámetros
- Guardar datos en MongoDB
- Visualizar historial en tiempo real

---

## 🧱 Arquitectura

El sistema está compuesto por:

- Frontend → HTML + JS (servido por Express)
- Backend → Node.js + Express
- Base de datos → MongoDB
- Contenedores → Docker + Docker Compose

---

## 📁 Estructura del proyecto

coffe_review/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   └── index.html
├── docker-compose.yml
└── .github/workflows/docker.yml

---

## 🚀 Ejecutar en local

Requisitos:
- Docker
- Docker Compose

Ejecutar:
docker-compose up --build

Acceso:
http://localhost:3000

---

## 🧪 Ver datos en Mongo

docker exec -it coffee_mongo mongosh

use coffeeDB
db.cafes.find().pretty()
