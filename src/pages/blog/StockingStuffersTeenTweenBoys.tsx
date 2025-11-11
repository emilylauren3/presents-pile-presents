import { Link } from "react-router-dom";
import { ArrowLeft, Gift, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StockingStuffersTeenTweenBoys = () => {
  const gifts = [
    {
      title: "Silicone Magnetic Balls Fidget Toys for Adults & Teens (Green)",
      description: "Say goodbye to anxious tapping! These fun, textured silicone magnets are a silent, satisfying way to keep hands busy and stress levels low—perfect for desk fidgeting or study breaks.",
      price: "$16.99",
      link: "https://amzn.to/4hT1Orb"
    },
    {
      title: "EverBrite 4-Pack Mini LED Aluminum Flashlight Party Favors (Colors Assorted)",
      description: "You can never have too many flashlights! This 4-pack of sturdy, bright mini lights is a super practical stuffer—great for camping, reading under the covers, or finding lost treasures.",
      price: "$21.99",
      link: "https://amzn.to/47xpaiC"
    },
    {
      title: "LEGO Classic Creative Food Friends Building Toy Set - Pretend Play Food",
      description: "Even older kids love small, creative builds! This adorable food-themed set is a fun, quick project that's the perfect size for a stocking and sparks imaginative play.",
      price: "$12.86",
      link: "https://amzn.to/47Pzu4a"
    },
    {
      title: "Pokemon TCG: Mega Evolution Sleeved Booster Pack - 10 Cards",
      description: "The holy grail for any collector! A fresh pack of Pokémon cards offers the thrill of the chase and the chance for a rare pull. A definite win for the stocking!",
      price: "$11.95",
      link: "https://amzn.to/49MqxeF"
    },
    {
      title: "Card Binder With 4-Pocket Sleeves, 440 Cards Holder (Red)",
      description: "Give their collection the home it deserves! This sturdy, water-resistant binder is essential for protecting and organizing all those beloved trading cards (Pokémon, sports, etc.).",
      price: "$16.98",
      link: "https://amzn.to/49vMiQ3"
    },
    {
      title: "KTEBO® Boxing Reflex Ball Headband Set",
      description: "This is fitness and fun rolled into one! This reflex ball set is a surprisingly addictive way to boost coordination, speed, and concentration—a great active gift to burn off that holiday candy!",
      price: "$17.99",
      link: "https://amzn.to/47OxyJd"
    },
    {
      title: "Amos Music Lollipop Candy, Audio Singing Lollipop (Cola Flavor)",
      description: "It's not just a sweet treat, it's a sensory experience! This unique lollipop plays music while they lick—a fun, slightly quirky candy that they'll definitely show off to their friends.",
      price: "$12.31",
      link: "https://amzn.to/4hT1Wa9"
    },
    {
      title: "Wohohoho 30 50 Shoe Charms for Clog Shoe Decoration (Trendy, 50 Pieces)",
      description: "Keep them on trend! With 50 random charms in a trendy pack, they'll have tons of options to customize their favorite foam clogs and swap with friends.",
      price: "$10.99",
      link: "https://amzn.to/3LS9cXI"
    },
    {
      title: "DND Dice Set with a Black Dice Bottle 7-Die Small Metal DND Dice Set (Ancient bronze)",
      description: "For the budding adventurer! A set of beautiful, solid metal dice is a luxurious upgrade for their D&D, RPG, or board game nights. The small size makes it a perfect stocking treasure.",
      price: "$10.99",
      link: "https://amzn.to/4nRirVD"
    },
    {
      title: "LEGO Minecraft The Nether Lava Battle Toy and Playset",
      description: "Bring the game to life! This mini Minecraft LEGO set is an epic battle scene packed into a stocking-friendly box, complete with Alex, a Wither Skeleton, and the cool Strider figure.",
      price: "$9.76",
      link: "https://amzn.to/4nMAJqY"
    },
    {
      title: "TIC TAC Mints; Stocking Stuffer; 116 grams; 4 Count Single Packs",
      description: "A practical favorite! You can't go wrong with a classic treat, and this 4-pack of Tic Tacs is a great small filler that's perfect for on-the-go freshness.",
      price: "$8.49",
      link: "https://amzn.to/4nQ7l39"
    },
    {
      title: "PlayVital Thumb Grip Caps for ps5/4 Controller (Fire Demons)",
      description: "Level up their gear! These thumb grip caps give controllers a custom look and a better grip, preventing slippage during intense gaming sessions. A must-have accessory for any console gamer.",
      price: "$13.99",
      link: "https://amzn.to/3JSfEgS"
    },
    {
      title: "Thumb Grip Caps for Nintendo Switch (4Pcs - Multi-Color)",
      description: "Switch users need protection too! This 4-pack of colorful, soft silicone caps not only protects the joysticks but gives them extra grip for those marathon gaming sessions.",
      price: "$8.99",
      link: "https://amzn.to/3WPvbkC"
    },
    {
      title: "PatchRx Pimple Patches for Face (120 Patches)",
      description: "A super practical stuffer they'll actually use! These discreet hydrocolloid patches work their magic overnight, making this a thoughtful, confidence-boosting essential.",
      price: "$14.99",
      link: "https://amzn.to/3Jvqutb"
    },
    {
      title: "MoveRays Hand Grip Strengthener (Silicone Rings)",
      description: "For the athlete or the fidgeter! These colorful silicone rings are a great, compact way to build grip strength for sports or simply serve as a quiet, satisfying hand exerciser.",
      price: "$17.99",
      link: "https://amzn.to/3JtttlX"
    },
    {
      title: "SneakERASERS Instant Sole and Sneaker Cleaner (10 Pack)",
      description: "Keep those expensive sneakers looking fresh! These powerful little sponges instantly clean and whiten shoe soles—a genius, practical tool for the style-conscious teen.",
      price: "$16.99",
      link: "https://amzn.to/4p1EzNT"
    },
    {
      title: "Cell Phone Stand Stocking Stuffers (OK Thumbs Lazy Phone Holder)",
      description: "Two thumbs up for this gadget! This fun, adjustable phone holder is perfect for hands-free viewing, video calls, or just keeping their desk organized. A cool and affordable little helper.",
      price: "$9.99",
      link: "https://amzn.to/49dLYoS"
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
          <h1 className="display-lg mb-6">Boys Stocking Stuffers: Teen/Tween Edition</h1>
          <p className="body-lg text-muted-foreground">
            17 gaming gear, fidget toys, and collectibles perfect for tween and teen boys—all under $25!
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

export default StockingStuffersTeenTweenBoys;
