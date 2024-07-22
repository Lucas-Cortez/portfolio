import { z } from "zod";

export const emailSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string({ required_error: "Email is required" }).email({ message: "A valid email is required" }),
  message: z.string().min(1, "Message is required"),
});

export type EmailSchemaValues = z.infer<typeof emailSchema>;
