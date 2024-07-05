import { Animated } from "@/components/common/Animated";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <Animated>
      <section className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-xl font-medium hover:underline">Social</h2>

          <p className="font-light">
            You can send a message through my <span className="font-normal">social medias dm&apos;s</span> or
            in my e-mail{" "}
            <span className="cursor-pointer font-normal hover:underline">(lucasc.sanches65@gmail.com)</span>.
          </p>
          {/* <div>
            <a href="https://x.com/Luck_cortez" target="_blank" className="flex justify-between gap-4">
              <span>Twitter</span>
              <span className="flex-1 border-b border-dashed"></span>
              <BsTwitterX className="h-5 w-5" />
            </a>
            <a href="https://github.com/Lucas-Cortez" target="_blank">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/lucas-cortez-sanches" target="_blank">
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div> */}
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-medium hover:underline">Send me a message</h2>
        </div>
      </section>
    </Animated>
  );
}
