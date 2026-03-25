import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ⚠️ usa "mongo" si estás con docker-compose
// usa "localhost" si estás en local sin docker
const client = new MongoClient("mongodb://mongo:27017");

let db;

await client.connect();
db = client.db("coffeeDB");

app.post("/api/cafe", async (req, res) => {
  try {
    const d = req.body;

    // validaciones
    if (!["josune", "josunent"].includes(d.quien)) {
      return res.status(400).json({ error: "quien inválido" });
    }

    if (![1, 2, 3, 4].includes(d.calidad)) {
      return res.status(400).json({ error: "calidad inválida" });
    }

    const doc = {
      ...d,

      // 👇 CLAVE: guardado como Date real
      fechaHora: d.fechaHora ? new Date(d.fechaHora) : new Date(),

      createdAt: new Date(),
    };

    await db.collection("cafes").insertOne(doc);

    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "server error" });
  }
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
