// src/email/transporter.ts
import nodemailer from "nodemailer";
import "dotenv/config";

export const createTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !port || !user || !pass) {
    throw new Error("Faltan variables SMTP en el .env");
  }

  const transporter = nodemailer.createTransport({
    host,
    port: Number(port),
    secure: Number(port) === 465, // true para 465, false para 587/25
    auth: {
      user,
      pass,
    },
  });

  return transporter;
};
