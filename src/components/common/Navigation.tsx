"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function Navigation() {
  const path = usePathname();

  const isHome = path === "/";
  const isAbout = path === "/about";
  const isProjects = path === "/projects";
  const isContact = path === "/contact";
  const isLetsWorkTogether = path === "/lets-work-together";

  return (
    <nav className="flex flex-wrap gap-2">
      <Link href={"/"}>
        <Button
          size={"sm"}
          variant={"ghost"}
          className="text-zinc-300 hover:bg-transparent  hover:text-zinc-100 hover:underline data-[selected=true]:bg-zinc-100 data-[selected=true]:text-black data-[selected=true]:hover:no-underline"
          data-selected={isHome}
        >
          Home
        </Button>
      </Link>
      <Link href={"/about"}>
        <Button
          size={"sm"}
          variant={"ghost"}
          className="text-zinc-300 hover:bg-transparent hover:text-zinc-100 hover:underline data-[selected=true]:bg-zinc-100 data-[selected=true]:text-black data-[selected=true]:hover:no-underline"
          data-selected={isAbout}
        >
          About
        </Button>
      </Link>
      <Link href={"/projects"}>
        <Button
          size={"sm"}
          variant={"ghost"}
          className="text-zinc-300 hover:bg-transparent hover:text-zinc-100 hover:underline data-[selected=true]:bg-zinc-100 data-[selected=true]:text-black data-[selected=true]:hover:no-underline"
          data-selected={isProjects}
        >
          Projects
        </Button>
      </Link>
      <Link href={"/contact"}>
        <Button
          size={"sm"}
          variant={"ghost"}
          className="text-zinc-300 hover:bg-transparent hover:text-zinc-100 hover:underline data-[selected=true]:bg-zinc-100 data-[selected=true]:text-black data-[selected=true]:hover:no-underline"
          data-selected={isContact}
        >
          Contact
        </Button>
      </Link>
      <Link href={"/lets-work-together"}>
        <Button
          size={"sm"}
          variant={"ghost"}
          className="text-zinc-300 hover:bg-transparent hover:text-zinc-100 hover:underline data-[selected=true]:bg-zinc-100 data-[selected=true]:text-black data-[selected=true]:hover:no-underline"
          data-selected={isLetsWorkTogether}
        >
          Let&apos;s work together 🎉
        </Button>
      </Link>
    </nav>
  );
}
