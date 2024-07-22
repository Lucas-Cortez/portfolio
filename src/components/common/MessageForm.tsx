"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormState } from "react-dom";

import { sendEmailAction } from "@/actions/sendEmail";
import { emailSchema, EmailSchemaValues } from "@/utils/schemas/emailSchema";

import { useToast } from "../ui/use-toast";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { SendHorizonal } from "lucide-react";

export function MessageForm() {
  const [state, formAction] = useFormState(sendEmailAction, { status: "idle" });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const form = useForm<EmailSchemaValues>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = form.handleSubmit(() => {
    setIsLoading(true);
    formAction(new FormData(formRef.current!));
  });

  useEffect(() => {
    if (state.status === "success") {
      setIsLoading(false);
      form.reset();
      toast({
        title: "Message sent successfully",
        className: "bg-zinc-800 text-zinc-100 border-none",
      });
    }

    if (state.status === "error") {
      setIsLoading(false);
      toast({
        title: "Error sending message",
        variant: "destructive",
      });
    }
  }, [state, toast, form]);

  return (
    <form ref={formRef} className="space-y-6" onSubmit={onSubmit}>
      <div className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="name">
            Name <span className="text-red-600">*</span>
          </Label>
          <Input id="name" className="bg-transparent" placeholder="Your name..." {...form.register("name")} />
          {form.formState.errors.name?.message && (
            <p className="text-sm text-red-600">{form.formState.errors.name?.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <Label>
            E-mail Address <span className="text-red-600">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            className="bg-transparent"
            placeholder="Your e-mail address..."
            {...form.register("email")}
          />
          {form.formState.errors.email?.message && (
            <p className="text-sm text-red-600">{form.formState.errors.email?.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="message">
            Message <span className="text-red-600">*</span>
          </Label>
          <Textarea
            id="message"
            className="max-h-40 bg-transparent"
            placeholder="Your message..."
            {...form.register("message")}
          />
          {form.formState.errors.message?.message && (
            <p className="text-sm text-red-600">{form.formState.errors.message?.message}</p>
          )}
        </div>
      </div>

      <Button
        variant={"secondary"}
        disabled={isLoading}
        className="bg-zinc-100 text-black hover:bg-zinc-100"
        type="submit"
      >
        Submit
        <SendHorizonal className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
