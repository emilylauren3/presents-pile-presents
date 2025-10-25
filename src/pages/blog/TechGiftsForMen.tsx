import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TechGiftsForMen = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <article className="py-12">
          <div className="content-container max-w-4xl">
            <Button asChild variant="ghost" className="mb-6">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <header className="mb-12">
              <p className="caption text-primary mb-4">Gift Guide</p>
              <h1 className="display-lg mb-6">
                Gifts for the Man Who Has Everything? 10 Must-Have Tech Gadgets
              </h1>
              <p className="body-lg text-muted-foreground mb-4">
                Shopping for the man who has everything? Discover our curated list of must-have tech gadgets and high-tech gear that will actually impress him.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                <span className="bg-muted px-2 py-1 rounded">gift guide</span>
                <span className="bg-muted px-2 py-1 rounded">tech gifts</span>
                <span className="bg-muted px-2 py-1 rounded">men</span>
                <span className="bg-muted px-2 py-1 rounded">gadgets</span>
                <span className="bg-muted px-2 py-1 rounded">holidays</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="bg-muted/50 border-l-4 border-primary p-4 mb-8">
                <p className="text-sm font-semibold text-primary mb-2">Affiliate Disclaimer</p>
                <p className="text-sm">This gift guide contains affiliate links. We may earn a commission if you purchase through a link at no extra cost to you.</p>
              </div>

              <p className="lead mb-6">
                So, you're on the hunt for the perfect gift for that special man (or men!) in your life—the one who seems to already have everything. Whether he's a work-from-home warrior, a road-tripping guru, or a guy who gets genuinely excited about the latest tech, we know the struggle is real when looking for unique gifts for the man who has everything.
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-display font-semibold mb-4">The Challenge of Shopping for Tech-Savvy Men</h2>
                <p className="mb-4">
                  Let's be honest: Shopping for these independent, tech-savvy men is a full-contact sport. My own man is the worst; if he wants it, he usually just goes and gets it! That's why I'm here to help you find the absolute best tech gifts for him this year.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-display font-semibold mb-4">Our Research Process</h2>
                <p className="mb-4">
                  Don't worry, I decided to put on my detective hat. I've been secretly paying attention, meticulously watching, and doing the deep-dive research to compile the ultimate list. The items here aren't just things my guy would love—they're the must-have gadgets and high-tech gear for men that I'm betting yours will, too.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-display font-semibold mb-4">The Ultimate Tech Gift Guide for Men 2025</h2>
                <p className="mb-6">
                  Take a look below at our extensive and (seriously) curated Tech Gift Guide for Men 2025 dedicated to buying the perfect piece of tech for the amazing men in your life!
                </p>
                <p className="font-semibold text-primary mb-4">
                  Coming soon: Our complete list of 10 must-have tech gadgets that will actually impress the man who has everything.
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default TechGiftsForMen;
