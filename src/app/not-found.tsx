import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold hover:underline">Page Not Found 🚫</h2>

      <p>It looks like you tried to access a link that doesn&apos;t exist.</p>

      <Link href="/" replace className="block w-fit">
        <Button variant={"secondary"} className="hover bg-zinc-100 text-black hover:bg-zinc-300">
          Return Home
          <Home className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}
