// src/email/sendContactEmail.ts
import { createTransporter } from "./transporter.ts";

interface ContactPayload {
  name?: string;
  email: string;
  subject?: string;
  message: string;
}

export const sendContactEmail = async (data: ContactPayload) => {
  const transporter = createTransporter();

  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) {
    throw new Error("Falta CONTACT_TO_EMAIL en el .env");
  }

  const subject =
    data.subject || "Nuevo mensaje de contacto desde el portfolio";

  const text = `
Nuevo mensaje desde el portfolio

Nombre: ${data.name || "No indicado"}
Email de contacto: ${data.email}

Mensaje:
${data.message}
`.trim();

  await transporter.sendMail({
    from:
      process.env.SMTP_FROM || `"Portfolio Web" <${process.env.SMTP_USER}>`,
    to,
    replyTo: data.email, // si respondés, responde al usuario
    subject,
    text,
  });
};
