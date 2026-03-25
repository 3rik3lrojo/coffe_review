import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

// --- paths para servir frontend ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const frontendPath = path.resolve("./frontend");

app.use(express.static(frontendPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// --- Mongo ---
const client = new MongoClient("mongodb://mongo:27017");

let db;

await client.connect();
db = client.db("coffeeDB");

// --- API ---
app.post("/api/cafe", async (req, res) => {
  try {
    const d = req.body;

    if (!["josune", "josunent"].includes(d.quien)) {
      return res.status(400).json({ error: "quien inválido" });
    }

    if (![1, 2, 3, 4].includes(d.calidad)) {
      return res.status(400).json({ error: "calidad inválida" });
    }

    const doc = {
      ...d,
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

// fallback para SPA / root
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
