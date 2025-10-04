import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  const guides = [
    {
      title: "The Hottest Tech & Gadgets for Tween Boys",
      description: "12 must-have tech toys and gadgets perfect for boys aged 10-13, from gaming gear to RC cars.",
      link: "/blog/tech-gadgets-tween-boys",
      price: "Under $50 - $300"
    },
    {
      title: "The Viral Must-Have Accessories for Tween Girls",
      description: "12 trending accessories every tween girl wants, from styling tools to creative kits.",
      link: "/blog/accessories-tween-girls",
      price: "Under $50 - $300"
    },
    {
      title: "Best Gifts and Toys for All Tweens",
      description: "10 universal gifts that work for any tween, regardless of gender or interests.",
      link: "/blog/gifts-all-tweens",
      price: "Under $50 - $300"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="content-container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="caption text-primary mb-4">Gift Guides & Tips</p>
              <h1 className="display-lg mb-6">
                The Preteen Puzzle: Ultimate Gift Guides
              </h1>
              <p className="body-lg text-muted-foreground mb-8">
                The ultimate no-fail gift guide for 10–13 year olds they'll actually use. 
                Discover curated collections of the hottest tech, trending accessories, and 
                must-have toys that tweens are asking for right now.
              </p>
            </div>
          </div>
        </section>

        {/* Gift Guides Grid */}
        <section className="py-16">
          <div className="content-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide) => (
                <Card key={guide.link} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-display">{guide.title}</CardTitle>
                    <CardDescription className="text-primary font-semibold">{guide.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{guide.description}</p>
                    <Button asChild variant="editorial" className="w-full group">
                      <Link to={guide.link}>
                        Read Full Guide
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
