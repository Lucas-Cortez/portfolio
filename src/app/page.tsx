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
  { label: "MySQL", icon: <GrMysql className="fill-sky-800-500 mr-1 h-4 w-4" /> },
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

          <p className="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolor alias placeat ad soluta
            eos sunt atque! Quia perspiciatis obcaecati optio alias accusantium! Earum facilis ipsam
            repudiandae iure officiis blanditiis enim ullam dolor dolore quis, nostrum delectus quos deleniti
            impedit magnam aliquam quod quo excepturi rerum consectetur cupiditate in neque. Iusto quasi iste
            quas labore iure voluptas, cumque vel quaerat nam consequuntur voluptatum maiores. Fugit
            architecto obcaecati quia fugiat quam dolor perferendis in odit sequi est! Quasi eveniet, impedit
            aliquid quo at doloribus asperiores animi voluptatibus tenetur nisi esse, magni soluta dolor iusto
            in excepturi inventore optio iure libero mollitia.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-medium hover:underline">Technologies that i love to work with 💻</h2>
          {/* 💻🛠️⚒️🧰⚙️ */}

          <div className="flex flex-wrap gap-2">
            {TECHNOLOGIES.map(({ label, icon }) => (
              <Badge variant={"secondary"} className="p-1" key={label}>
                {icon}
                {label}
              </Badge>
            ))}
            {/* <Badge variant={"secondary"} className="p-1">
              <JavascriptIcon className="mr-1 h-4 w-4" />
              Javascript
            </Badge>
            <Badge variant={"secondary"}>Typescript</Badge>
            <Badge variant={"secondary"}>React</Badge>
            <Badge variant={"secondary"}>Next.js</Badge>
            <Badge variant={"secondary"}>Node.js</Badge>
            <Badge variant={"secondary"}>Express</Badge>
            <Badge variant={"secondary"}>Fastify</Badge>
            <Badge variant={"secondary"}>NestJS</Badge>
            <Badge variant={"secondary"}>PostgreSQL</Badge>
            <Badge variant={"secondary"}>MySQL</Badge>
            <Badge variant={"secondary"}>MongoDB</Badge>
            <Badge variant={"secondary"}>Git</Badge>
            <Badge variant={"secondary"}>Docker</Badge> */}
          </div>
        </div>
      </section>
    </Animated>
  );
}
