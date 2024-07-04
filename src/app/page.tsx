import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import ProfileImage from "../../public/assets/images/profile.jpeg";
import { AtSign, Github } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-3xl rounded-lg bg-zinc-800/40 p-4 shadow-md shadow-black backdrop-blur-sm">
        <div className="flex gap-4">
          <div className="relative aspect-square h-20 w-20 overflow-hidden rounded-lg border-[1px]">
            <Image
              src={ProfileImage}
              alt="profile picture"
              width={100}
              height={100}
              className="absolute inset-0 -top-2"
            />
          </div>

          <div className="space-y-3">
            <h2 className="text-xl">Next.js & React Developer</h2>

            <div className="flex gap-4">
              <a href="https://x.com/Luck_cortez" target="_blank">
                <BsTwitterX className="h-5 w-5" />
              </a>
              <a href="https://github.com/Lucas-Cortez" target="_blank">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/lucas-cortez-sanches" target="_blank">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-zinc-500" />
      </div>
    </main>
  );
}
