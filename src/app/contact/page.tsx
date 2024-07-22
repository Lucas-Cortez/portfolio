import { sendEmailAction } from "@/actions/sendEmail";
import { Animated } from "@/components/common/Animated";
import { CopyEmail } from "@/components/common/CopyEmail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { SendHorizonal } from "lucide-react";

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
            <form className="space-y-6" action={sendEmailAction}>
              <div className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="name">
                    Name <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    name="name"
                    id="name"
                    required
                    className="bg-transparent"
                    placeholder="Your name..."
                  />
                </div>

                <div className="space-y-1">
                  <Label>
                    E-mail Address <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    required
                    className="bg-transparent"
                    placeholder="Your e-mail address..."
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="message">
                    Message <span className="text-red-600">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    className="max-h-40 bg-transparent"
                    placeholder="Your message..."
                  />
                </div>
              </div>

              <Button
                variant={"secondary"}
                className="bg-zinc-100 text-black hover:bg-zinc-100"
                type="submit"
              >
                Submit
                <SendHorizonal className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Animated>
  );
}
