import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="section-spacing">
      <div className="content-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="display-md mb-4">
            Never Miss the Perfect Gift
          </h2>
          <p className="body-lg text-muted-foreground mb-8">
            Join our community of thoughtful gift-givers. Get exclusive access to new gift guides, 
            seasonal ideas, and our emergency last-minute gift pile.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4"
            />
            <Button type="submit" variant="editorial" size="lg" className="uppercase tracking-wide">
              Subscribe
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
