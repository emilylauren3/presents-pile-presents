import { Link } from "react-router-dom";
import { ArrowLeft, Gift, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StockingStuffersForHer = () => {
  const gifts = [
    {
      title: "Christmas Earrings 14K Cute Small Animal CZ Reindeer Studs",
      description: "A little festive sparkle! These adorable reindeer studs feature tiny cubic zirconia for a subtle, cute shine. The perfect piece of jewelry to celebrate the season.",
      price: "$13.00",
      link: "https://amzn.to/47PBjhw"
    },
    {
      title: "Cozy Manor Skincare Headband and Wristband Set (Black)",
      description: "Upgrade her cleansing ritual! This soft, spa-style set keeps hair dry and prevents water from dripping down her arms—a super cute and practical luxury.",
      price: "$9.99",
      link: "https://amzn.to/3JVqfaP"
    },
    {
      title: "e.l.f. Sheer For It Blush Tint (Cherry Cola)",
      description: "A versatile beauty must-have! This long-lasting sheer tint works beautifully on both lips and cheeks, giving her a natural, effortless flush. It's a great shade for any season!",
      price: "$7.96",
      link: "https://amzn.to/4qMVhSR"
    },
    {
      title: "Kitsch Gold Metal Claw Clips, Large Hair Clips (1 Piece)",
      description: "The ultimate hair accessory! This elegant, durable gold claw clip is a trendy way to hold hair securely while adding a chic, polished look to any outfit.",
      price: "$10.99",
      link: "https://amzn.to/4oEbM2c"
    },
    {
      title: "Garnier Pure Active Charcoal Peel-off Mask Cleanser (50 mL)",
      description: "A little self-care treat! This charcoal peel-off mask is perfect for a relaxing night in, helping to deeply clean and clarify oily or combination skin.",
      price: "$9.96",
      link: "https://amzn.to/3Xr7CP2"
    },
    {
      title: "grace & stella Under Eye Masks With Retinol (6 Pairs)",
      description: "Help her look refreshed after the holiday hustle! These revitalizing gel patches use Retinol to help with the appearance of dark circles and wrinkles. A luxurious little indulgence.",
      price: "$13.95",
      link: "https://amzn.to/49JNoYb"
    },
    {
      title: "VIOLA HOUSE Brow Styling Wax, Eyebrow Soap Kit",
      description: "Achieve the trendy \"feathery\" brow look! This long-lasting, waterproof styling wax is a great addition to her makeup routine for sculpted, perfectly set brows that last all day.",
      price: "$9.99",
      link: "https://amzn.to/43RyCuQ"
    },
    {
      title: "Schick Hydro Silk Touch-Up Dermaplaning Tool (3ct)",
      description: "A beauty secret weapon! This multi-purpose tool is great for gentle dermaplaning and quickly touching up facial hair. A highly-rated, essential grooming tool.",
      price: "$7.47",
      link: "https://amzn.to/3LyNUOP"
    },
    {
      title: "Maybelline New York Great Lash Big Washable Mascara (Blackest Black)",
      description: "A timeless classic! This iconic mascara is a staple in makeup bags everywhere, delivering reliable volume and definition without clumping. You can't go wrong with this one.",
      price: "$8.98",
      link: "https://amzn.to/47BOST2"
    },
    {
      title: "Maybelline New York The Falsies Volum' Express Washable Mascara (Very Black)",
      description: "For dramatic volume! This formula gives a striking, full-lash look without the need for falsies, perfect for bold holiday makeup looks.",
      price: "$8.98",
      link: "https://amzn.to/485aveC"
    },
    {
      title: "Eyelash Separator Eyelash Comb (Naked Pink)",
      description: "The tool she didn't know she needed! This mascara comb helps separate lashes after application, eliminating clumps for a flawless, fanned-out finish.",
      price: "$7.99",
      link: "https://amzn.to/43mUi1L"
    },
    {
      title: "Ring Light for Laptop and Phone, 5\" Selfie Ring Light",
      description: "Perfect for the content creator or remote worker! This ring light provides great lighting for video calls, selfies, and streams, ensuring she always looks her best on camera.",
      price: "$26.99",
      link: "https://amzn.to/43Wtrtz"
    },
    {
      title: "Terry's Orange - Milk Chocolatey Confection with Toffee Bits",
      description: "A delicious twist on a classic! The familiar chocolate orange flavor is made even better with crunchy toffee bits mixed in. A festive indulgence she'll love.",
      price: "$6.49",
      link: "https://amzn.to/3Lu8IXT"
    },
    {
      title: "Luxury Coffee Socks with Coffee Cup Gift Packaging",
      description: "The ultimate cozy duo! These fun, soft socks come charmingly packaged inside a coffee cup, making them a cute, ready-to-gift stuffer for any coffee lover.",
      price: "$9.99",
      link: "https://amzn.to/47xqXUS"
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
          <h1 className="display-lg mb-6">💅 Stocking Stuffers for Her</h1>
          <p className="body-lg text-muted-foreground">
            14 trendy beauty, skincare, and lifestyle essentials perfect for the special women in your life—all under $25!
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

export default StockingStuffersForHer;
