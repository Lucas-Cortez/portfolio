import { Animated } from "@/components/common/Animated";

export default function AboutPage() {
  const age = 24;
  const experience = 4;

  return (
    <Animated>
      <section className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-xl font-medium hover:underline">My journey 👜</h2>

          <p className="font-light">
            Hello, my name is Lucas and I am {age} years old.
            <br />
            <br />I am originally from Brazil, where I still live. I have +{experience} years of experience in
            software development and have always been fascinated by the idea of being able to build anything
            with just a laptop in my hand.
            <br />
            <br />
            I studied Information Systems for 4 years, where I developed a solid foundation for my career. My
            first project for a real client was a milestone in my journey, focused on learning everything I
            could about developing useful software using HTML, CSS, and JavaScript.
            <br />
            <br />
            During my student journey, I secured my first job at a startup as a frontend developer. Later, I
            became full-stack. Coincidentally, the company was very new, and I was the first hire. This
            experience was invaluable, allowing me to improve both my technical and social skills. As the
            company grew, I became a leader for the new team members, and we all grew together.
            <br />
            <br />
            Over the years, I had the opportunity to work in other companies and learn new technologies to
            create successful and scalable products. However, I always felt more comfortable dealing with
            JavaScript ecosystem technologies, which led me to deepen my studies in this area.
            <br />
            <br />
            In addition to programming, I am passionate about entrepreneurship and love discussing this topic.
            I am also a fan of a healthy lifestyle and practice various sports, especially tennis and beach
            tennis.
            <br />
            <br />
            Currently, I am dedicating myself to building my life as an entrepreneur, trying to understand the
            mindset of those on this journey and carving my own path to success.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-medium hover:underline">Experience ⏳</h2>

          <p></p>
        </div>
      </section>
    </Animated>
  );
}
