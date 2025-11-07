import { Link } from "react-router-dom";
import { ArrowLeft, Gift } from "lucide-react";
import { gifts } from "@/data/gifts";

const TopHolidayToys = () => {
  const toyGifts = gifts.filter((gift) => gift.guideSource === "Top Holiday Toys");

  const categories = [
    { name: "Interactive Toys", items: toyGifts.filter(g => g.category === "Interactive Toys") },
    { name: "Tech Toys", items: toyGifts.filter(g => g.category === "Tech Toys") },
    { name: "Arts & Crafts", items: toyGifts.filter(g => g.category === "Arts & Crafts") },
    { name: "Building Toys", items: toyGifts.filter(g => g.category === "Building Toys") },
    { name: "Outdoor Play", items: toyGifts.filter(g => g.category === "Outdoor Play") },
    { name: "Pretend Play", items: toyGifts.filter(g => g.category === "Pretend Play") },
    { name: "Ride-Ons", items: toyGifts.filter(g => g.category === "Ride-Ons") },
    { name: "Dolls & Figures", items: toyGifts.filter(g => g.category === "Dolls & Figures") },
    { name: "Action Figures", items: toyGifts.filter(g => g.category === "Action Figures") },
    { name: "Games", items: toyGifts.filter(g => g.category === "Games") },
    { name: "Gaming", items: toyGifts.filter(g => g.category === "Gaming") },
  ].filter(cat => cat.items.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <article className="content-container section-spacing">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Gift className="h-6 w-6 text-primary" />
            <span className="caption text-primary">Holiday Gift Guide</span>
          </div>
          <h1 className="display-lg mb-6">🎄 Top Toy Picks For the Holiday Season</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Can you believe it? It&apos;s hard to wrap our heads around, but Christmas is officially just around the corner! Soon the halls will be decked, mistletoe hung, and trees adorned with twinkling lights and those precious ornaments your kids made in kindergarten (my first grader is already planning her next masterpiece!). The holiday magic is about to be in full swing.
            </p>
            <p>
              I know what you&apos;re thinking, though: that perfect gift shopping you swore you&apos;d tackle back in September is still sitting squarely at the top of your to-do list, staring you down. No judgment over here, friend! I&apos;m right there with you. Balancing life, school plays, and trying to figure out what my five-year-old daughter wants versus my 12-year-old son and same-aged stepson (my two seventh-grade buddies!) is a feat of its own.
            </p>
            
            <h2 className="display-sm mt-8 mb-4">Why We Love the Hunt for the Perfect Gift</h2>
            <p>
              But honestly? That search for the perfect gift—the one that makes their eyes light up on Christmas morning—is one of my favorite parts of the season. Shopping for my daughter and the boys in our blended family is my absolute joy! There&apos;s nothing better than watching them rip open a present and seeing that genuine, unadulterated excitement. And don&apos;t forget the fun of picking out something special for those beloved nieces and nephews!
            </p>
            <p>
              This year, I&apos;m helping you skip the stress and head straight to the good stuff. I&apos;ve curated a mega list of 25+ items that are guaranteed to have the kids in your life (from your own sweet babies to your nieces and nephews) screaming with joy Christmas morning. Everything on this list is geared toward the younger crew, ages 2–12.
            </p>
            
            <h2 className="display-sm mt-8 mb-4">Ready to Shop?</h2>
            <p>
              Don&apos;t worry, for those tough-to-shop-for teens and older tweens (like my Grade 7 crew!), I&apos;ll have a focused list coming soon. But until then, you can always check out our popular <Link to="/blog" className="text-primary hover:underline">Tween Gifts Lists</Link>!
            </p>
            <p className="font-semibold">
              Ready to dive in and cross some items off that list? Let&apos;s get shopping!
            </p>
          </div>
        </header>

        <div className="space-y-16">
          {categories.map((category) => (
            <section key={category.name}>
              <h2 className="display-sm mb-8 pb-4 border-b border-border">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((gift) => (
                  <div
                    key={gift.id}
                    className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {gift.title}
                      </h3>
                      <p className="text-sm text-primary font-semibold mb-3">
                        {gift.description}
                      </p>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {gift.fullDescription}
                      </p>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-2xl font-bold text-primary">
                          ${gift.price.toFixed(2)}
                        </span>
                        <a
                          href={gift.affiliateLink}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                        >
                          View on Amazon
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

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

export default TopHolidayToys;
