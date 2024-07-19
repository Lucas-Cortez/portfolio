"use server";

import { resend } from "@/lib/resend";

export async function sendEmailAction(formData: FormData) {
  const response = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["lucasc.sanches65@gmail.com"],
    subject: "Hello world",
    text: JSON.stringify(Object.fromEntries(formData.entries()), null, 2),
  });

  console.log(response);

  console.log(formData);
}
