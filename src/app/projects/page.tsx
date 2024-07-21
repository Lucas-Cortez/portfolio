import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Animated } from "@/components/common/Animated";
import { PROJECTS } from "./projects";

export default function ProjectsPage() {
  return (
    <Animated>
      <section id="projects">
        <div className="space-y-6">
          <h2 className="text-xl font-medium hover:underline">Projects 📁</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <div className="w-full space-y-6" key={project.title}>
                <div className="aspect-video rounded border border-zinc-700 p-1">
                  <Image
                    src={project.imageUrl}
                    width={340}
                    height={192}
                    alt={`${project.title} cover`}
                    className="w-full rounded-sm object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h4 className="text-lg font-medium">{project.title}</h4>

                    <span className="text-zinc-400">{project.year}</span>
                  </div>

                  <p className="text-zinc-400">{project.description}</p>

                  <div className="space-x-2">
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant={"ghost"} size={"icon"}>
                          <FaGithub className="h-5 w-5" />
                        </Button>
                      </a>
                    ) : null}

                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button variant={"ghost"} size={"icon"}>
                          <ExternalLink className="h-5 w-5" />
                        </Button>
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Animated>
  );
}
