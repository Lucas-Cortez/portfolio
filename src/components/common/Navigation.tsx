"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const TABS: Omit<TabProps, "selected">[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/lets-work-together", label: "Let's work together 🎉" },
];

export function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <ul className="relative flex flex-wrap gap-2">
        {TABS.map((tab) => (
          <Tab key={tab.href} {...tab} selected={tab.href === path} />
        ))}
      </ul>
    </nav>
  );
}

interface TabProps {
  selected: boolean;
  href: string;
  label: string;
}

export function Tab({ selected, href, label }: TabProps) {
  return (
    <li>
      <Link href={href}>
        <Button
          size={"sm"}
          variant={"ghost"}
          className="relative text-zinc-300 hover:bg-transparent hover:text-zinc-100 hover:underline data-[selected=true]:text-black data-[selected=true]:hover:no-underline"
          data-selected={selected}
        >
          {label}
          {selected && (
            <motion.span
              layoutId="pill-tab"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute inset-0 -z-10 rounded-md bg-zinc-100"
            ></motion.span>
          )}
        </Button>
      </Link>
    </li>
  );
}
