"use client";

import { useToast } from "../ui/use-toast";

interface CopyEmailProps {
  email: string;
}

export function CopyEmail({ email }: CopyEmailProps) {
  const { toast } = useToast();

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    toast({
      title: "Email copied to clipboard ✨",
      className: "bg-zinc-800/40 backdrop-blur-sm text-zinc-100 border-none",
    });
  };

  return (
    <span className="cursor-pointer font-normal hover:underline" onClick={copyEmail}>
      ({email})
    </span>
  );
}
