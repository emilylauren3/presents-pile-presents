import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";

const Blog = () => {
  // Featured post (most recent)
  const featuredPost = {
    title: "Gifts for the Man Who Has Everything? 10 Must-Have Tech Gadgets",
    description: "Shopping for the man who has everything? Discover our curated list of must-have tech gadgets and high-tech gear that will actually impress him.",
    link: "/blog/tech-gifts-for-men",
    date: "October 15, 2025",
    author: "The Present Pile",
    excerpt: "So, you're on the hunt for the perfect gift for that special man (or men!) in your life—the one who seems to already have everything. Whether he's a work-from-home warrior, a road-tripping guru, or a guy who gets genuinely excited about the latest tech, we know the struggle is real when looking for unique gifts for the man who has everything. Let's be honest: Shopping for these independent, tech-savvy men is a full-contact sport. My own man is the worst; if he wants it, he usually just goes and gets it! That's why I'm here to help you find the absolute best tech gifts for him this year. Don't worry, I decided to put on my detective hat. I've been secretly paying attention, meticulously watching, and doing the deep-dive research to compile the ultimate list. The items here aren't just things my guy would love—they're the must-have gadgets and high-tech gear for men that I'm betting yours will, too. Take a look below at our extensive and (seriously) curated Tech Gift Guide for Men 2025 dedicated to buying the perfect piece of tech for the amazing men in your life!"
  };

  // All blog posts for sidebar
  const allPosts = [
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

        {/* Main Content with Sidebar */}
        <section className="py-16">
          <div className="content-container">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Featured Post */}
                <article className="mb-16">
                  <div className="mb-6">
                    <p className="caption text-primary mb-4">Featured Post</p>
                    <h2 className="display-md mb-4">{featuredPost.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
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
                  
                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-lg text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <p className="text-muted-foreground mb-8">{featuredPost.description}</p>
                  </div>
                  
                  <Button asChild variant="editorial" size="lg" className="group">
                    <Link to={featuredPost.link}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </article>

                {/* Gift Guides Grid */}
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-8">Browse Our Gift Guides</h3>
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
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-display">All Posts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <nav className="space-y-4">
                        {allPosts.map((post, index) => (
                          <div key={post.link} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                            <Link 
                              to={post.link} 
                              className="block group hover:text-primary transition-colors"
                            >
                              <h4 className="font-medium text-sm leading-tight mb-2 group-hover:underline">
                                {post.title}
                              </h4>
                              <p className="text-xs text-muted-foreground">{post.date}</p>
                            </Link>
                          </div>
                        ))}
                      </nav>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
