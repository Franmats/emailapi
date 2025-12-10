// src/routes/contact.ts
import { Router } from "express";
import { sendContactEmail } from "../email/sendContactEmail.ts";

const router = Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};

    if (!email || !message) {
      return res
        .status(400)
        .json({ error: "Email y mensaje son obligatorios" });
    }

    await sendContactEmail({ name, email, subject, message });

    return res.json({ ok: true });
  } catch (error) {
    console.error("Error al enviar email de contacto:", error);
    return res
      .status(500)
      .json({ error: "Error al enviar el mensaje. Intenta más tarde." });
  }
});

export default router;
