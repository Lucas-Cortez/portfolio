import Image from "next/image";
import ProfileImage from "../../../public/assets/images/profile-square.png";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Header() {
  return (
    <header className="flex gap-5">
      <div className="relative aspect-square h-fit w-24 overflow-hidden rounded-lg border-[1px]">
        <Image src={ProfileImage} priority width={100} height={100} alt="profile picture" />
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-semibold">Next.js & React Developer</h2>

        <div className="flex gap-4">
          <a
            href="https://x.com/Luck_cortez"
            target="_blank"
            className="text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            <BsTwitterX className="h-5 w-5" />
          </a>

          <a
            href="https://github.com/Lucas-Cortez"
            target="_blank"
            className="text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            <FaGithub className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/lucas-cortez-sanches"
            target="_blank"
            className="text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
