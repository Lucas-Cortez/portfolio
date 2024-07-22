import { Animated } from "@/components/common/Animated";
import { CopyEmail } from "@/components/common/CopyEmail";
import { MessageForm } from "@/components/common/MessageForm";

export default function ContactPage() {
  return (
    <Animated>
      <section className="space-y-8" id="contact">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold hover:underline">Social 👥</h2>

          <p className="text-zinc-400">
            You can send a message through my <span className="font-normal">social medias DM&apos;s</span> or
            to my e-mail <CopyEmail email="lucasc.sanches65@gmail.com" />.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold hover:underline">Send me a message 📫</h2>

          <div>
            <MessageForm />
          </div>
        </div>
      </section>
    </Animated>
  );
}
