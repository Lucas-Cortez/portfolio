import { envServer } from "@/utils/helpers/env";
import { Resend } from "resend";

export const resend = new Resend(envServer.RESEND_API_KEY);
