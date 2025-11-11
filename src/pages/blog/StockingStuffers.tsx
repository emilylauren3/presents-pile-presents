import { Link } from "react-router-dom";
import { ArrowLeft, Gift } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StockingStuffers = () => {
  // Placeholder gift lists - to be populated with actual content
  const giftLists = [
    {
      title: "Gift List 1",
      description: "Description for the first gift list category",
      link: "/blog/stocking-stuffers-list-1",
      price: "Under $25"
    },
    {
      title: "Gift List 2",
      description: "Description for the second gift list category",
      link: "/blog/stocking-stuffers-list-2",
      price: "Under $25"
    },
    {
      title: "Gift List 3",
      description: "Description for the third gift list category",
      link: "/blog/stocking-stuffers-list-3",
      price: "Under $25"
    },
    {
      title: "Gift List 4",
      description: "Description for the fourth gift list category",
      link: "/blog/stocking-stuffers-list-4",
      price: "Under $25"
    },
    {
      title: "Gift List 5",
      description: "Description for the fifth gift list category",
      link: "/blog/stocking-stuffers-list-5",
      price: "Under $25"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <article className="content-container section-spacing">
        <Link
          to="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Gift className="h-6 w-6 text-primary" />
            <span className="caption text-primary">Stocking Stuffer Guide</span>
          </div>
          <h1 className="display-lg mb-6">🎁 The Stocking Stuffer Edit: Trendy, Viral, and Genius Gifts Under $25</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Growing up, I was the youngest of five children. Christmas morning was always a chaotic mix: my brother and I were up at the crack of dawn, practically vibrating with excitement, while my oldest siblings—already teenagers—were just reaching for their covers, desperate for a few more hours of sleep.
            </p>
            <p>
              This dynamic certainly isn't unique to my family. I can already see it coming in our own home as my daughter turns six and her older brothers edge closer to their teenage years. Thankfully, my parents came up with a surefire solution that gave them (and my older sisters) at least another 45 minutes of blissful quiet on Christmas morning.
            </p>
            <p>
              The rule was simple: Stockings could be opened individually before anyone else woke up, but no one could touch the main gifts under the Christmas tree until the entire family was accounted for and gathered in the living room.
            </p>
            <p>
              I never grew out of that dawn wake-up call. There's something undeniably magical about that dark, tree-lit room, with the bows and wrapping paper shimmering in the early morning quiet. It's the purest form of Christmas magic.
            </p>
            
            <h2 className="display-sm mt-8 mb-4">🎁 Your Ultimate Stocking Stuffer Guide is Here!</h2>
            <p>
              So here we are, just 46 days away from Christmas! At The Present Pile, we're ready to help you again, and this time, we're not delivering just one list, but five brand-new, comprehensive lists full of ideas to perfectly fill those stockings this year.
            </p>
            <p>
              I know what you're thinking—Santa's got this one covered! But just in case you, like me, enjoy adding a little bit of your own personalized holiday magic, or if you participate in a stocking stuffer gift exchange with extended family, we're here to make it easy!
            </p>
            <p className="font-semibold">
              These new guides are categorized to help you find the best unique gifts for everyone on your list.
            </p>
            <p className="font-semibold">
              Dive into the lists below, and let the happy holiday shopping begin!
            </p>
          </div>
        </header>

        {/* Gift Lists Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="display-md mb-4">Browse Our Stocking Stuffer Lists</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our five curated collections to find the perfect stocking stuffers for everyone on your list
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {giftLists.map((list, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer group border-border bg-card"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-display leading-tight group-hover:text-primary transition-colors">
                    {list.title}
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold text-base">
                    {list.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 line-clamp-3">{list.description}</p>
                  <Button asChild variant="default" className="w-full group">
                    <Link to={list.link}>
                      View Gift List
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="mt-16 p-8 bg-secondary/30 rounded-lg">
          <h2 className="display-sm mb-4">More Gift Ideas</h2>
          <p className="text-muted-foreground mb-6">
            Looking for more inspiration? Check out our other curated gift guides and find the perfect present for everyone on your list.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            Explore All Guides
          </Link>
        </div>
      </article>
    </div>
  );
};

export default StockingStuffers;
