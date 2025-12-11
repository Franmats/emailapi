// src/server.ts
import "dotenv/config";

import express from "express";
import cors from "cors";
import contactRouter from "./routes/contact";
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// CORS – ajustá origins a los de tu portfolio
app.use(
  cors({
    origin: ["https://portfoliomats.vercel.app/"
    ],
  })
);

// Rutas
app.use("/api", contactRouter);

// Healthcheck simple
app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

// Start
app.listen(PORT, () => {
  console.log(`API de contacto escuchando en puerto ${PORT}`);
});
