"use server";

import { resend } from "@/lib/resend";
import { emailSchema } from "@/utils/schemas/emailSchema";

type FormState = {
  status: "success" | "error" | "idle";
};

export async function sendEmailAction(prevState: any, formData: FormData): Promise<FormState> {
  try {
    const data = emailSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    // console.log("data:", data);

    // await new Promise((resolve) => setTimeout(resolve, 3000));

    // throw new Error("test");

    const response = await resend.emails.send({
      from: `PORTFOLIO OFFER <portfolio@resend.dev>`,
      to: ["lucasc.sanches65@gmail.com"],
      subject: `Message from ${data.name} (${data.email})`,
      text: data.message,
    });

    console.log(response);

    return { status: "success" };
  } catch (error) {
    return { status: "error" };
  }
}
