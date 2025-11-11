import { Link } from "react-router-dom";
import { ArrowLeft, Gift, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StockingStuffersForHim = () => {
  const gifts = [
    {
      title: "Hard Lacrosse Ball Massage Ball Therapy (2 Pack) (Purple)",
      description: "For the athlete or the desk worker! These firm massage balls are perfect for deep tissue relief and working out knots in the back, neck, or feet. Practical pain relief in a stocking!",
      price: "$10.43",
      link: "https://amzn.to/4p3ey0z"
    },
    {
      title: "NIYIKOW 2 Pack Hand Grip Strengthener, Adjustable Resistance 22-132Lbs",
      description: "Give him a strength upgrade! This adjustable grip trainer is a great way to boost forearm strength for sports, gym training, or just keeping hands strong while watching TV.",
      price: "$14.99",
      link: "https://amzn.to/4ovN7N9"
    },
    {
      title: "Multitool Carabiner with Pocket Knife, 6-in-1 (Blue)",
      description: "A cool gadget for his everyday carry (EDC)! This handy multitool clips right onto a belt loop and includes a knife, bottle opener, and screwdriver—perfect for the outdoor enthusiast or DIYer.",
      price: "$16.88",
      link: "https://amzn.to/4ovN8kb"
    },
    {
      title: "Christmas Sudoku: 50 Sudoku Puzzles with Coloring Interior Design",
      description: "A fun way to unwind! This puzzle book offers 50 Sudoku challenges with a festive coloring interior, making it the perfect low-key activity for post-Christmas dinner relaxation.",
      price: "$9.75",
      link: "https://amzn.to/4hR752B"
    },
    {
      title: "BULLIANT Men Running Socks 6Pairs-Ankle Athletic Socks",
      description: "Socks are a classic for a reason! This 6-pack of cushioned, moisture-wicking ankle socks is a practical and comfortable upgrade for his gym bag or everyday walking shoes.",
      price: "$19.99",
      link: "https://amzn.to/486gj7D"
    },
    {
      title: "Big Turk Chocolate Bites, 180gm Pouch",
      description: "A classic, uniquely Canadian treat! These jelly and chocolate bites are a delicious, nostalgic indulgence that is perfectly sized for stuffing in a stocking (and snacking later!).",
      price: "$6.18",
      link: "https://amzn.to/3LBVI2g"
    },
    {
      title: "Viking Revolution Beard Comb & Beard Brush Set",
      description: "For the man who takes pride in his beard! This handsome set includes a natural boar bristle brush and a dual-action wood comb, complete with a velvet pouch for easy travel.",
      price: "$13.99",
      link: "https://amzn.to/4oATFu5"
    },
    {
      title: "Viking Revolution - Solid Cologne for Men (4 Pack)",
      description: "A modern take on fragrance! This 4-pack of solid colognes features great scents (Cedar Wood, Sandalwood) that are easy to apply, mess-free, and perfect for his travel kit.",
      price: "$13.99",
      link: "https://amzn.to/47UOuy0"
    },
    {
      title: "Drum Sticks for Drums, Natural Solid Wood (1 Pair, 5A)",
      description: "If he has a drum set (or just a desk to tap on!), a fresh pair of quality wood drumsticks is always appreciated. Great for practice, performance, or just drumming out some stress.",
      price: "$9.99",
      link: "https://amzn.to/4oCqGpN"
    },
    {
      title: "Schylling NeeDoh - Gumdrop - Soft Sensory Fidget Toy",
      description: "Yes, adults need NeeDoh too! This gumdrop-shaped squishy ball is a fun, non-distracting way to relieve stress and keep hands busy, bringing some playful comfort to his day.",
      price: "$14.65",
      link: "https://amzn.to/43YUvbF"
    },
    {
      title: "LED Flashlight Gloves, Finger Lights",
      description: "A brilliant, practical gadget! These gloves have built-in LED lights on the fingers, making them indispensable for working on cars, DIY projects, or fixing things in the dark.",
      price: "$15.99",
      link: "https://amzn.to/4qRAJsz"
    },
    {
      title: "FURTALK Knit Beanie Hat (Brown)",
      description: "A cozy winter staple! This soft, warm knit beanie is a timeless accessory that works for everyone and comes in a great neutral color to match any winter coat.",
      price: "$13.99",
      link: "https://amzn.to/4qQjnfs"
    },
    {
      title: "NIVEA MEN Active Lip Balm, (2 X 4.8g)",
      description: "Keep his lips protected! This 2-pack of NIVEA MEN lip balm provides 24-hour hydration with a formula designed specifically for men—a highly practical winter essential.",
      price: "$4.98",
      link: "https://amzn.to/43pQIE6"
    },
    {
      title: "Terry's Orange - Dark - Orange Flavored Dark Chocolate Confection",
      description: "For the dark chocolate connoisseur! This twist on the classic chocolate orange uses rich dark chocolate, offering a deeper, more sophisticated holiday treat.",
      price: "$8.99",
      link: "https://amzn.to/4hWx6xm"
    },
    {
      title: "Falkor Luck Dragon Block Set (671PCS)",
      description: "A fun, challenging build! This detailed block set of the iconic Luck Dragon is a great collector's item and a relaxing project that's perfect for a long winter afternoon.",
      price: "$17.99",
      link: "https://amzn.to/3JD5Mrj"
    },
    {
      title: "(2-Pack) Extendable Back Scratcher, Santa's Claws Telescopic",
      description: "Funny and totally useful! Packaged in a fun \"Santa's Claws\" box, this extendable back scratcher is the perfect humorous-yet-practical filler that always gets a laugh.",
      price: "$7.99",
      link: "https://amzn.to/3Lu7QT7"
    },
    {
      title: "Frank's RedHot, Original Seasoning, 132g",
      description: "For the one who likes it hot! This shaker of Frank's seasoning lets him put that signature spicy flavor on anything from popcorn to eggs. A fun culinary stocking addition.",
      price: "$5.49",
      link: "https://amzn.to/3Xr74bW"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <article className="content-container section-spacing">
        <Link
          to="/blog/stocking-stuffers"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Stocking Stuffer Guide
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Gift className="h-6 w-6 text-primary" />
            <span className="caption text-primary">Gift Guide</span>
          </div>
          <h1 className="display-lg mb-6">Stocking Stuffers for Him</h1>
          <p className="body-lg text-muted-foreground">
            17 practical gadgets, grooming essentials, and fun treats for the guys on your list—all under $25!
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {gifts.map((gift, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-lg leading-tight">
                  {gift.title}
                </CardTitle>
                <CardDescription className="text-primary font-semibold text-lg">
                  {gift.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{gift.description}</p>
                <Button asChild variant="default" className="w-full group">
                  <a href={gift.link} target="_blank" rel="noopener noreferrer">
                    View on Amazon
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-secondary/30 rounded-lg">
          <h2 className="display-sm mb-4">More Stocking Stuffer Ideas</h2>
          <p className="text-muted-foreground mb-6">
            Check out our other stocking stuffer lists for everyone on your Christmas list!
          </p>
          <Link
            to="/blog/stocking-stuffers"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            View All Lists
          </Link>
        </div>
      </article>
    </div>
  );
};

export default StockingStuffersForHim;
