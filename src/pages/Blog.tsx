import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";

const Blog = () => {
  // Featured post (most recent)
  const featuredPost = {
    title: "🎁 The Stocking Stuffer Edit: Trendy, Viral, and Genius Gifts Under $25",
    description: "Just 46 days until Christmas! Discover five comprehensive lists full of trendy, viral, and genius stocking stuffer ideas—all under $25—to perfectly fill those stockings this year.",
    link: "/blog/stocking-stuffers",
    date: "November 9, 2025",
    author: "The Present Pile",
    excerpt: "Growing up, I was the youngest of five children. Christmas morning was always a chaotic mix: my brother and I were up at the crack of dawn, practically vibrating with excitement, while my oldest siblings—already teenagers—were just reaching for their covers, desperate for a few more hours of sleep. I never grew out of that dawn wake-up call. There's something undeniably magical about that dark, tree-lit room, with the bows and wrapping paper shimmering in the early morning quiet. It's the purest form of Christmas magic. So here we are, just 46 days away from Christmas! At The Present Pile, we're ready to help you again, and this time, we're not delivering just one list, but five brand-new, comprehensive lists full of ideas to perfectly fill those stockings this year."
  };

  // All blog posts for sidebar
  const allPosts = [
    {
      title: "🎁 The Stocking Stuffer Edit: Trendy, Viral, and Genius Gifts Under $25",
      link: "/blog/stocking-stuffers",
      date: "November 9, 2025"
    },
    {
      title: "🎄 Top Toy Picks For the Holiday Season",
      link: "/blog/top-holiday-toys",
      date: "November 7, 2025"
    },
    {
      title: "Gifts for the Man Who Has Everything? 10 Must-Have Tech Gadgets",
      link: "/blog/tech-gifts-for-men",
      date: "October 15, 2025"
    },
    {
      title: "The Preteen Puzzle: The Ultimate, No-Fail Gift Guide for 10–13 Year Olds",
      link: "/blog/preteen-gift-guide",
      date: "October 8, 2025"
    },
    {
      title: "The Hottest Tech & Gadgets for Tween Boys",
      link: "/blog/tech-gadgets-tween-boys",
      date: "October 2025"
    },
    {
      title: "The Viral Must-Have Accessories for Tween Girls",
      link: "/blog/accessories-tween-girls",
      date: "October 2025"
    },
    {
      title: "Best Gifts and Toys for All Tweens",
      link: "/blog/gifts-all-tweens",
      date: "October 2025"
    },
    {
      title: "Luxury Pile",
      link: "/blog/luxury-pile",
      date: "October 2025"
    }
  ];

  // Gift guide blocks (displayed below featured post)
  const guides = [
    {
      title: "🎁 The Stocking Stuffer Edit: Trendy, Viral, and Genius Gifts Under $25",
      description: "Five comprehensive lists full of trendy, viral, and genius stocking stuffer ideas—all under $25.",
      link: "/blog/stocking-stuffers",
      price: "Under $25"
    },
    {
      title: "🎄 Top Toy Picks For the Holiday Season",
      description: "25+ must-have toys and gifts for kids ages 2-12 that will make Christmas morning magical.",
      link: "/blog/top-holiday-toys",
      price: "$24.99 - $699.99"
    },
    {
      title: "Gifts for the Man Who Has Everything? 10 Must-Have Tech Gadgets",
      description: "10 must-have tech gadgets and high-tech gear that will actually impress the man who has everything.",
      link: "/blog/tech-gifts-for-men",
      price: "Under $50 - $1,100+"
    },
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
                The Present Pile: Gift Guides
              </h1>
              <p className="body-lg text-muted-foreground mb-8">
                Your curated source for the perfect present. Discover our expert-vetted lists and guides for every recipient, occasion, and budget.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Blog Content */}
        <section className="py-16">
          <div className="content-container max-w-4xl">
            <article className="mb-16">
              <Card className="overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="mb-4">
                    <p className="caption text-primary mb-4">Featured Post</p>
                    <h2 className="display-md mb-4">{featuredPost.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-lg text-foreground mb-6">{featuredPost.excerpt}</p>
                    <p className="text-muted-foreground mb-8">{featuredPost.description}</p>
                  </div>
                  
                  <Button asChild variant="editorial" size="lg" className="group">
                    <Link to={featuredPost.link}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </article>
          </div>
        </section>

        {/* Gift Lists Section */}
        <section className="py-16 bg-muted/30">
          <div className="content-container">
            <div className="text-center mb-12">
              <h2 className="display-md mb-4">Explore Our Gift Lists</h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our curated collections to find the perfect gift for everyone on your list
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {guides.map((guide) => (
                <Card key={guide.link} className="hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="text-lg font-display leading-tight group-hover:text-primary transition-colors">
                      {guide.title}
                    </CardTitle>
                    <CardDescription className="text-primary font-semibold text-base">
                      {guide.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 line-clamp-3">{guide.description}</p>
                    <Button asChild variant="editorial" className="w-full group">
                      <Link to={guide.link}>
                        View Gift List
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
