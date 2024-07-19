import type { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  year: number;
  imageUrl: string | StaticImageData;
  github?: string;
  link?: string;
};

// integra saúde
// link-shortner
// web trader
// otc brasil 2023
// memory game
// forbes under30
// instacarro
// fome zero
// iotebe

const PROJECTS: Project[] = [
  {
    title: "Link Shortner",
    description: "A simple link shortener made with Next.js, Tailwind CSS and DynamoDB.",
    year: 2023,
    imageUrl: "/assets/images/projects/profile-square.png",
    github: "https://github.com/Lucas-Cortez/link-shortener",
    // link: "",
  },
  {
    title: "Web Trader",
    description:
      "A plataform to trade cryptocurrencies based in technical analysis, with a simple and easy to use interface.",
    year: 2023,
    imageUrl: "/assets/images/projects/.png",
    github: "https://github.com/Lucas-Cortez/web_trader_frontend",
    // link: "",
  },
  {
    title: "OTC Brasil 2023",
    description: "Mobile app made specifically for an international event, to help people locate themselves.",
    year: 2023,
    imageUrl: "/assets/images/projects/.png",
    // github: "",
    link: "https://play.google.com/store/apps/details?id=com.ibp.otc",
  },
  {
    title: "Rede Integra Saúde",
    description: "Platform for finding and selling the services of health professionals.",
    year: 2024,
    imageUrl: "/assets/images/projects/.png",
    // github: "https://github.com/Lucas-Cortez/",
    link: "https://redeintegrasaude.com.br/",
  },
  {
    title: "Forbes Under 30",
    description: 'Platform responsible for handling candidate registrations for the "Forbes Under 30" event.',
    year: 2023,
    imageUrl: "/assets/images/projects/.png",
    // github: "https://github.com/Lucas-Cortez/",
    link: "https://forbes.com.br/under30",
  },
  {
    title: "Instacarro",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui amet enim consequatur",
    year: 2022,
    imageUrl: "/assets/images/projects/.png",
    github: "https://github.com/Lucas-Cortez/",
    link: "",
  },
  {
    title: "Shell Memory Game",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui amet enim consequatur",
    year: 2023,
    imageUrl: "/assets/images/projects/.png",
    github: "https://github.com/Lucas-Cortez/",
    link: "",
  },
  {
    title: "Fome Zero",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui amet enim consequatur",
    year: 2022,
    imageUrl: "/assets/images/projects/.png",
    github: "https://github.com/Lucas-Cortez/",
    link: "",
  },
  {
    title: "Iotebe",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui amet enim consequatur",
    year: 2021,
    imageUrl: "/assets/images/projects/.png",
    github: "https://github.com/Lucas-Cortez/",
    link: "",
  },
];

export default function ProjectsPage() {
  return (
    <section id="projects">
      <div className="space-y-6">
        <h2 className="text-xl font-medium hover:underline">Projects 📁</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div className="w-full space-y-6" key={project.title}>
              <div className="aspect-video rounded border border-zinc-700 p-1">
                {/* <div className="h-full w-full rounded-sm bg-zinc-700 ">16 x 9</div> */}
                {/* <Image src={"/assets/images/profile-square.png"} width={340} height={100} alt="test" /> */}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <h4 className="font-medium">{project.title}</h4>

                  <span>{project.year}</span>
                </div>

                <p className="text-base">{project.description}</p>

                <div className="space-x-2">
                  <Button variant={"ghost"} size={"icon"}>
                    <FaGithub className="h-5 w-5" />
                  </Button>

                  <Button variant={"ghost"} size={"icon"}>
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
