import { Link } from "react-router-dom";
import { ArrowLeft, Gift, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StockingStuffersTeenTweenGirls = () => {
  const gifts = [
    {
      title: "SQUISHMALLOWS - Small Plush - 8\" - Style 3",
      description: "The queen of comfort! These super soft, squishy plushies are the ultimate snuggle buddy. The 8-inch size is absolutely perfect for tucking into a stocking.",
      price: "$11.90",
      link: "https://amzn.to/3WRAuQr"
    },
    {
      title: "Terry's, Original - Orange Flavoured Milk Chocolatey Confection (157g)",
      description: "A holiday tradition for a reason! Smash it, peel it, and share (or don't!). This delicious, classic chocolate orange is a fun, festive treat everyone loves.",
      price: "$6.49",
      link: "https://amzn.to/3WR1v6B"
    },
    {
      title: "17cm Doll Clothes Set for Labubu – Lovely Doll Dress with Bow Headband & Mini Chain Bag",
      description: "For the collectible doll fan! This adorable, high-fashion set lets them customize and dress their favorite 17cm dolls, complete with a tiny bag and bow headband.",
      price: "$13.99",
      link: "https://amzn.to/43qrZj3"
    },
    {
      title: "Amos Music Lollipop Candy, Audio Singing Lollipop (Watermelon Flavor)",
      description: "A sweet surprise that sings! This unique lollipop is a viral sensation—it plays a tune while they enjoy the candy. A fun, novelty treat that tastes like summer!",
      price: "$12.31",
      link: "https://amzn.to/4p7iWfi"
    },
    {
      title: "Wohohoho 30 50 Shoe Charms for Clog Shoe Decoration (Girl, 50 Pieces)",
      description: "If they own clogs, they need charms! This big pack offers 50 pieces of cute, girly-themed accessories to personalize their footwear and trade with friends.",
      price: "$10.99",
      link: "https://amzn.to/3WPbg5a"
    },
    {
      title: "2Pcs Hunter Cosplay K Wristband (Two-Color Woven Bracelet)",
      description: "For the fandom fashionista! This bracelet set is a subtle, cool way for fans to show off their love for their favorite characters, whether they're at a concert or just at school.",
      price: "$14.99",
      link: "https://amzn.to/3XkPkPt"
    },
    {
      title: "LEGO Friends Unicorn & Flamingo Pool Party Playset",
      description: "A delightful mini-build! This brightly colored LEGO Friends set is small enough for a stocking but packed with cute animal figures and fun accessories for creative storytelling.",
      price: "$9.86",
      link: "https://amzn.to/3JXnoOF"
    },
    {
      title: "zakora 2PCS Silicon Suction Phone Case Mount (Rose red)",
      description: "The perfect hands-free gadget! These little suction mounts stick to the back of their phone and let them prop it up on mirrors or smooth surfaces for TikToks and video calls.",
      price: "$7.99",
      link: "https://amzn.to/4p7j3re"
    },
    {
      title: "GOEWY Water Bottle Carrier Bag for Stanley 40/30 oz Tumbler",
      description: "Give her Stanley cup an upgrade! This neoprene carrier is a must-have accessory, complete with a strap and a pocket for her phone—perfect for school or the gym.",
      price: "$15.99",
      link: "https://amzn.to/47z5fQl"
    },
    {
      title: "Stanley Cup Accessories: 4PCS Straw Cover Cap and 2PCS Butterfly Letter Charms",
      description: "Tiny details make a difference! These butterfly charms and straw covers add a super cute, personalized touch to her favorite tumbler and keep the straw clean.",
      price: "$8.49",
      link: "https://amzn.to/4r7L97A"
    },
    {
      title: "SWEET VIEW 7pcs Eyebrow Tweezers Set",
      description: "A practical beauty essential! This comprehensive 7-piece set ensures she has all the right tools for brow maintenance and everyday grooming—a great high-value stuffer. This set does have a dermaplaning blade, so highly recommend for the older girls in your tribe.",
      price: "$9.99",
      link: "https://amzn.to/4qOdaRr"
    },
    {
      title: "Skincare Headbands (Sponge Spa Headband and Wristband Set)",
      description: "Level up the spa routine! This trendy sponge headband and wristband set keeps hair dry and water from dripping down her arms during face washing—a TikTok-favorite essential.",
      price: "$10.99",
      link: "https://amzn.to/3Lqlbfd"
    },
    {
      title: "EOS Super Soft Shea Lip Balm - Birthday Cake (Lip Sphere)",
      description: "Pure nostalgia and delicious moisture! This beloved, sphere-shaped lip balm delivers 24-hour hydration with the fun, sweet flavor of birthday cake.",
      price: "$4.96",
      link: "https://amzn.to/47z5oDn"
    },
    {
      title: "Delectable by Cake Beauty Assorted Ultra Nourishing Hand Cream Set (Set of 4)",
      description: "Perfect for dividing or gifting as one set! These luxurious, dessert-scented hand creams are ultra-nourishing and instantly feel like a high-end treat.",
      price: "$16.00",
      link: "https://amzn.to/49Lu6Sk"
    },
    {
      title: "Magnetic Balls Fidget Toy Adults&Teens (8pcs Silicone Shell)",
      description: "Calm, cool, and collected. These soft, sensory magnetic balls are a discreet and satisfying way to fidget, helping reduce anxiety and improve focus during homework or downtime.",
      price: "$24.99",
      link: "https://amzn.to/4p1tpbZ"
    },
    {
      title: "Diodiva Crystal Glass Nail File Set - 3 Pack with Case",
      description: "The best kept secret in manicure tools! These crystal glass files are gentle, effective, and give the nail edge a smooth, perfect finish. A high-quality set that will last.",
      price: "$12.20",
      link: "https://amzn.to/49NFc9n"
    },
    {
      title: "Hershey's Hot Chocolate Bomb With Mini Marshmallows (36 g)",
      description: "A warm hug in a mug! Just drop this chocolate sphere into hot milk and watch it melt away to reveal mini marshmallows. Pure, cozy holiday magic.",
      price: "$2.99",
      link: "https://amzn.to/47NCJcv"
    },
    {
      title: "grace & stella Award Winning Skin Rescue Covers (Hydrocolloid, 72 Count)",
      description: "Another skin-saving superhero! These multi-shape hydrocolloid patches are an award-winning way to handle breakouts discreetly. A practical gift that boosts confidence.",
      price: "$13.95",
      link: "https://amzn.to/3WSmLsC"
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
          <h1 className="display-lg mb-6">Stocking Stuffers Teen/Tween Girls</h1>
          <p className="body-lg text-muted-foreground">
            18 viral must-haves from beauty essentials to collectibles that tween and teen girls will love—all under $25!
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

export default StockingStuffersTeenTweenGirls;
