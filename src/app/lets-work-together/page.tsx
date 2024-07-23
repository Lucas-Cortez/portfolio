import { Animated } from "@/components/common/Animated";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function WorkPage() {
  return (
    <Animated>
      <section id="lets-work-together" className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold hover:underline">
            Transform Your Idea into a Successful App 🎉
          </h2>

          <p className="text-zinc-400">
            Are you looking for a developer who can build your app from scratch{" "}
            <span className="font-bold text-zinc-100">quickly, affordably, and without any hassle?</span> I
            can turn your idea into a high-quality product, ready to launch and operate.
          </p>

          <a
            href="https://cal.com/lucas-cortez-sanches/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-fit"
          >
            <Button variant={"secondary"} className="hover bg-zinc-100 text-black hover:bg-zinc-300">
              Book a call
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold hover:underline">How It Works 📝</h3>

          <div className="space-y-4 text-zinc-400">
            <p>
              <span className="font-semibold text-zinc-200">Initial Consultation: </span>
              We start with a detailed discussion about your idea. We gather all the necessary information to
              create a comprehensive document outlining all the features and requirements of your app.
            </p>

            <p>
              <span className="font-semibold text-zinc-200">Agile Development: </span>
              With the plan in hand, we begin development. At each completed stage, you&apos;ll receive
              updates and partial deliveries, allowing for adjustments and ensuring we stay aligned with your
              vision. Additionally, we&apos;ll have weekly meetings to review the project&apos;s progress.
            </p>

            <p>
              <span className="font-semibold text-zinc-200">Delivery and Support: </span>
              Once the product is ready, we&apos;ll deploy it on your server. I&apos;ll guide you through the
              key steps to ensure you can continue to grow with your new app, ensuring excellent performance
              and functionality.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold hover:underline">Let&apos;s get started 🚀</h3>

          <p className="text-zinc-400">
            Let&apos;s set up a meeting so you can explain everything about your idea to me.
          </p>

          <a
            href="https://cal.com/lucas-cortez-sanches/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-fit"
          >
            <Button variant={"secondary"} className="bg-zinc-100 text-black hover:bg-zinc-300" type="submit">
              Book a call
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>
    </Animated>
  );
}
