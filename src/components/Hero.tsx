import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gifts.jpg";

const Hero = () => {
  const scrollToNewsletter = () => {
    const newsletterSection = document.querySelector('[data-newsletter-section]');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Curated gift collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full content-container flex items-center">
        <div className="max-w-2xl">
          <p className="caption text-primary mb-4">
            Curated Gift Guides
          </p>
          <h1 className="display-lg mb-6">
            Thoughtful Gifts for Every Occasion
          </h1>
          <p className="body-lg text-muted-foreground mb-8 max-w-xl">
            Take the stress out of gift-giving with our expertly curated collections. 
            From birthdays to holidays, we've found the perfect presents for everyone on your list.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="editorial" size="lg" className="group uppercase tracking-wide">
              <Link to="/blog">
                Explore Gift Guides
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="uppercase tracking-wide"
              onClick={scrollToNewsletter}
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
