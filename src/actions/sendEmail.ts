"use server";

import { resend } from "@/lib/resend";
import { z } from "zod";

const emailSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export async function sendEmailAction(formData: FormData) {
  const data = emailSchema.parse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  const response = await resend.emails.send({
    from: `PORTFOLIO OFFER <portfolio@resend.dev>`,
    to: ["lucasc.sanches65@gmail.com"],
    subject: `Message from ${data.name} (${data.email})`,
    text: data.message,
  });
}
