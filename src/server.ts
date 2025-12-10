// src/server.ts
import "dotenv/config";
import express from "express";
import cors from "cors";
import contactRouter from "./routes/contact.ts";
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

// CORS – ajustá origins a los de tu portfolio
app.use(
  cors({
    origin: ["https://www.francocuencadev.com/"
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
