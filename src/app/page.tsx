import { Animated } from "@/components/common/Animated";
import { Badge } from "@/components/ui/badge";

import { JavascriptIcon } from "@/components/icons/JavascriptIcon";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiFastify } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import Link from "next/link";

const TECHNOLOGIES = [
  { label: "Javascript", icon: <JavascriptIcon className="mr-1 h-4 w-4" /> },
  { label: "Typescript", icon: <BiLogoTypescript className="mr-1 h-4 w-4 fill-blue-600" /> },
  { label: "React", icon: <FaReact className="mr-1 h-4 w-4 fill-cyan-400" /> },
  { label: "Next.js", icon: <RiNextjsFill className="mr-1 h-4 w-4" /> },
  { label: "Node.js", icon: <FaNodeJs className="mr-1 h-4 w-4 fill-lime-600" /> },
  { label: "Express", icon: <SiExpress className="mr-1 h-4 w-4" /> },
  { label: "Fastify", icon: <SiFastify className="mr-1 h-4 w-4" /> },
  { label: "NestJS", icon: <SiNestjs className="mr-1 h-4 w-4 fill-[#ea2856]" /> },
  { label: "PostgreSQL", icon: <BiLogoPostgresql className="mr-1 h-4 w-4 fill-sky-700" /> },
  { label: "MySQL", icon: <GrMysql className="mr-1 h-4 w-4 fill-sky-700" /> },
  { label: "MongoDB", icon: <SiMongodb className="mr-1 h-4 w-4 fill-green-600" /> },
  { label: "Git", icon: <FaGitAlt className="mr-1 h-4 w-4 fill-orange-600" /> },
  { label: "Docker", icon: <FaDocker className="mr-1 h-4 w-4 fill-blue-600" /> },
];

export default function Home() {
  return (
    <Animated>
      <section className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-xl font-medium hover:underline">Hey, there! I&apos;m Lucas Cortez 👋🏻</h2>

          <div className="space-y-2 font-light">
            <p>
              Passionate about creative solutions and building applications from scratch, using both backend
              and frontend technologies.
            </p>
            <p>
              Specializing in creating dynamic and responsive web applications within the JavaScript
              ecosystem, utilizing React, Next.js, and Node.js.
            </p>
            <p>
              Currently working as a solo full-stack developer, helping others build great solutions, and
              creating my own products.
            </p>
            <p>
              If you need help turning your idea into a beautifully crafted web application, I&apos;m ready to{" "}
              <Link href={"/lets-work-together"}>
                <span className="border-b hover:text-white">bring your project to life.</span>
              </Link>
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-medium hover:underline">Technologies that i love to work with 💻</h2>

          <div className="flex flex-wrap gap-2">
            {TECHNOLOGIES.map(({ label, icon }) => (
              <Badge className="border-zinc-500 bg-zinc-800 p-1 font-normal text-zinc-200" key={label}>
                {icon}
                {label}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </Animated>
  );
}
