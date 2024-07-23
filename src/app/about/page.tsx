import { Age } from "@/components/common/Age";
import { Animated } from "@/components/common/Animated";
import { Experience } from "@/components/common/Experience";

export default function AboutPage() {
  return (
    <Animated>
      <section className="space-y-8" id="about">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold hover:underline">My journey 👜</h2>

          <p className="font text-zinc-400">
            Hello, my name is Lucas and I am <Age /> years old.
            <br />
            <br />I am originally from Brazil, where I still live. I have +<Experience /> years of experience
            in software development and have always been{" "}
            <span className="font-bold text-zinc-100">
              fascinated by the idea of being able to build anything
            </span>{" "}
            with just a laptop in my hand.
            <br />
            <br />I <span className="font-bold text-zinc-100"> studied Information Systems for 4 years</span>,
            where I developed a solid foundation for my career. My first project for a real client was a
            milestone in my journey, focused on learning everything I could about developing useful software
            using HTML, CSS, and JavaScript.
            <br />
            <br />
            During my student journey, I secured my first job as a{" "}
            <span className="font-bold text-zinc-100"> front-end developer at a local startup</span>. Later, I
            became full-stack. Coincidentally, the company was very new, and I was the first hire. This
            experience was invaluable, allowing me to improve both my technical and social skills. As the
            company grew,{" "}
            <span className="font-bold text-zinc-100"> I became a leader for the new team members</span>, and
            we all grew together.
            <br />
            <br />
            Over the years, I had the opportunity to work in other companies and learn new technologies to
            create successful and scalable products. However, I always felt more comfortable dealing with{" "}
            <span className="font-bold text-zinc-100">JavaScript ecosystem technologies</span>, which led me
            to deepen my studies in this area.
            <br />
            <br />
            In addition to programming,{" "}
            <span className="font-bold text-zinc-100">I am passionate about entrepreneurship</span> and love
            discussing this topic. I am also a{" "}
            <span className="font-bold text-zinc-100">fan of a healthy lifestyle</span> and practice various
            sports, especially tennis and beach tennis.
            <br />
            <br />
            Currently,{" "}
            <span className="font-bold text-zinc-100">
              I am dedicating myself to building my life as an entrepreneur
            </span>
            , trying to understand the mindset of those on this journey and{" "}
            <span className="font-bold text-zinc-100">carving my own path to success</span>.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold hover:underline">Experience ⏳</h2>

          <div>
            <ol className="relative ml-2 space-y-6 border-s border-zinc-400">
              <li className="ml-4">
                <span className="absolute -start-[7px] mt-1.5 h-[13px] w-[13px] rounded-full bg-zinc-300" />

                <div className="flex flex-col gap-0.5">
                  <div className="flex flex-wrap items-center">
                    <span className="w-1/4 font-bold">Full Stack Engineer</span>
                    <span className="w-1/3 text-zinc-400">Mar 2022 — now</span>
                  </div>

                  <div>
                    <span className="underline underline-offset-2 hover:text-white">@Autonomous</span>
                  </div>
                </div>
              </li>

              <li className="ml-4">
                <span className="absolute -start-[7px] mt-1.5 h-[13px] w-[13px] rounded-full bg-zinc-500" />

                <div className="flex flex-col gap-0.5">
                  <div className="flex flex-wrap items-center">
                    <span className="w-1/4 font-bold">Full Stack Engineer</span>
                    <span className="w-1/3 text-zinc-400">Mar 2022 — May 2024</span>
                  </div>

                  <div>
                    <a href="https://waproject.com.br" target="_blank" rel="noopener noreferrer">
                      <span className="underline underline-offset-2 hover:text-white">@WaProject</span>
                    </a>
                  </div>
                </div>
              </li>

              <li className="ml-4">
                <span className="absolute -start-[7px] mt-1.5 h-[13px] w-[13px] rounded-full bg-zinc-500" />

                <div className="flex flex-col gap-0.5">
                  <div className="flex flex-wrap items-center">
                    <span className="w-1/4 font-bold">Full Stack Engineer</span>
                    <span className="w-1/3 text-zinc-400">Oct 2022 — Mar 2023</span>
                  </div>

                  <div>
                    <p>
                      <a href="https://instacarro.com" target="_blank" rel="noopener noreferrer">
                        <span className="underline underline-offset-2 hover:text-white">@InstaCarro</span>
                      </a>{" "}
                      (Outsourcing by @WaProject)
                    </p>
                  </div>
                </div>
              </li>

              <li className="ml-4">
                <span className="absolute -start-[7px] mt-1.5 h-[13px] w-[13px] rounded-full bg-zinc-500" />

                <div className="flex flex-col gap-0.5">
                  <div className="flex flex-wrap items-center">
                    <span className="w-1/4 font-bold">Full Stack Engineer</span>
                    <span className="w-1/3 text-zinc-400">May 2021 — Oct 2022</span>
                  </div>

                  <div>
                    <a href="https://tebesensor.com" target="_blank" rel="noopener noreferrer">
                      <span className="underline underline-offset-2 hover:text-white">@Tebe</span>
                    </a>
                  </div>
                </div>
              </li>

              <li className="ml-4">
                <span className="absolute -start-[7px] mt-1.5 h-[13px] w-[13px] rounded-full bg-zinc-500" />

                <div className="flex flex-col gap-0.5">
                  <div className="flex flex-wrap items-center">
                    <span className="w-1/4 font-bold">Full Stack Developer</span>
                    <span className="w-1/3 text-zinc-400">2020 — May 2022</span>
                  </div>

                  <div>
                    <span className="underline underline-offset-2 hover:text-white">@Freelancer</span>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </Animated>
  );
}
