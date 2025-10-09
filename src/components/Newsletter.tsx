import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://first-n8n.bytds7.easypanel.host/webhook/2735fbad-5910-4392-9d54-f8b584fd7915", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: "newsletter_signup"
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setEmail("");
        toast({
          title: "Successfully Subscribed!",
          description: "Thank you for joining our newsletter. You'll receive our latest gift guides and tips.",
        });
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="section-spacing" data-newsletter-section>
      <div className="content-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            {isSuccess ? (
              <CheckCircle className="w-8 h-8 text-green-600" />
            ) : (
              <Mail className="w-8 h-8 text-primary" />
            )}
          </div>
          
          {isSuccess ? (
            <>
              <h2 className="display-md mb-4 text-green-600">
                Welcome to The Present Pile!
              </h2>
              <p className="body-lg text-muted-foreground mb-8">
                You're all set! Check your email for a confirmation message and get ready to discover amazing gift ideas.
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => setIsSuccess(false)}
                className="uppercase tracking-wide"
              >
                Subscribe Another Email
              </Button>
            </>
          ) : (
            <>
              <h2 className="display-md mb-4">
                Never Miss the Perfect Gift
              </h2>
              <p className="body-lg text-muted-foreground mb-8">
                Join our community of thoughtful gift-givers. Get exclusive access to new gift guides, 
                seasonal ideas, and our emergency last-minute gift pile.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 px-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  required
                />
                <Button 
                  type="submit" 
                  variant="editorial" 
                  size="lg" 
                  className="uppercase tracking-wide"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
              <p className="text-sm text-muted-foreground mt-4">
                No spam, ever. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
