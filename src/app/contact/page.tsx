import { Animated } from "@/components/common/Animated";
import { CopyEmail } from "@/components/common/CopyEmail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

export default function ContactPage() {
  return (
    <Animated>
      <section className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-xl font-medium hover:underline">Social</h2>

          <p className="font-light">
            You can send a message through my <span className="font-normal">social medias DM&apos;s</span> or
            to my e-mail <CopyEmail email="lucasc.sanches65@gmail.com" />.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-medium hover:underline">Send me a message</h2>

          <div>
            <form
              className="space-y-6"
              action={async (formData) => {
                "use server";
                console.log(formData);
              }}
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="name">
                    Name <span className="text-red-600">*</span>
                  </Label>
                  <Input name="name" id="name" className="bg-transparent" placeholder="Your name..." />
                </div>

                <div className="space-y-1">
                  <Label>
                    E-mail Address <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    name="email"
                    id="email"
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
                    className="max-h-40 bg-transparent"
                    placeholder="Your message..."
                  />
                </div>
              </div>

              <Button variant={"secondary"} className="" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Animated>
  );
}
