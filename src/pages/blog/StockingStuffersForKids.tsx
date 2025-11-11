import { Link } from "react-router-dom";
import { ArrowLeft, Gift, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StockingStuffersForKids = () => {
  const gifts = [
    {
      title: "Golden Books: For the Fans! (KPop Demon Hunters)",
      description: "Who knew Golden Books had such epic taste? This is the cutest, most colorful way for them to dive into the world of K-Pop Demon Hunters!",
      price: "$9.50",
      link: "https://amzn.to/3LvTzoW"
    },
    {
      title: "Golden Books: A Long Rest for Little Monsters! (Dungeons & Dragons)",
      description: "Roll a twenty-sided die for cuteness! Introduce them to the magic of D&D with this adorable, surprisingly soothing Golden Book.",
      price: "$7.99",
      link: "https://amzn.to/4nMxhN2"
    },
    {
      title: "LEGO Friends Guinea Pig Playground",
      description: "Tiny pieces for tiny hands mean BIG fun! This mini LEGO set fits perfectly in a stocking and delivers maximum, furry-friend-themed building joy.",
      price: "$9.48",
      link: "https://amzn.to/4nRQM6J"
    },
    {
      title: "Hot Wheels Toy Cars Formula 1 5-Pack",
      description: "An instant collection! This 5-pack of sleek Formula 1 racers is the perfect way to get their engine roaring on Christmas morning. Vroom!",
      price: "$8.97",
      link: "https://amzn.to/3XnKAZs"
    },
    {
      title: "Royale High Surprise Locker 2-Pack (2) Series 1 Dolls",
      description: "It's two surprises in one! These fashionable mini-dolls come tucked inside their own little lockers, making for a fun, stylish unboxing moment.",
      price: "$10.40",
      link: "https://amzn.to/43mWYMX"
    },
    {
      title: "Disney - Christmas Mickey Mouse Pyjama Plush",
      description: "Dressed in his cozy holiday PJs, this cuddly Mickey is ready to be snuggled all season long! A Christmas classic, updated for the season.",
      price: "$16.98",
      link: "https://amzn.to/3Lw2JSk"
    },
    {
      title: "Disney - Christmas Pluto Plush",
      description: "The happiest dog on earth is even happier in his festive winter wear! Pluto is the perfect companion for snuggling up by the fireplace.",
      price: "$15.16",
      link: "https://amzn.to/43WovF3"
    },
    {
      title: "Bluey Figure 2-Pack - Surprise Blaster Suit Pack",
      description: "Wackadoo! If your house is full of Bluey fans (whose isn't?), this 2-pack is a must-have. The surprise suit adds an extra layer of fun to playtime.",
      price: "$8.40",
      link: "https://amzn.to/47A1IkP"
    },
    {
      title: "LankyBox Mystery Figures, Multicolor, Small",
      description: "A tiny mystery for the fans of the wildly popular YouTube duo! These surprise figures are small, colorful, and guaranteed to be a hit.",
      price: "$7.99",
      link: "https://amzn.to/3JMyJB9"
    },
    {
      title: "Shoe Charms Random Shoe Accessories Pack Halloween Christmas",
      description: "Because what kid doesn't love customizing their Crocs these days?! This holiday/Halloween mash-up pack offers tons of fun flair for their feet!",
      price: "$8.99",
      link: "https://amzn.to/3XkWLGm"
    },
    {
      title: "Amos Music Lollipop Candy, Audio Singing Lollipop, Fun Summer Treat",
      description: "This is a sensory treat! It's a lollipop that actually plays a song. A truly unique sweet surprise they'll never see coming!",
      price: "$12.31",
      link: "https://amzn.to/4oVZZfs"
    },
    {
      title: "Terry's Simply Milk Snowball, 145g",
      description: "You can't beat a chocolate orange, and this seasonal snowball shape is just the cutest. A delicious and generous holiday chocolate treat!",
      price: "$6.98",
      link: "https://amzn.to/3X8R1Qh"
    },
    {
      title: "Munchkin Falls Baby and Toddler Bath Toy",
      description: "Keep the fun going even when the holidays are over! This charming bath toy creates mini waterfalls and ramps for splashy fun at bath time.",
      price: "$8.97",
      link: "https://amzn.to/49RU6LM"
    },
    {
      title: "cimetech 2 Pack LCD Writing Tablet for Kids",
      description: "Excellent bulk buying alert! Since you get a 2-pack, you can stuff two stockings (or keep one for the car!). These no-mess drawing pads are fantastic.",
      price: "$8.80",
      link: "https://amzn.to/43oGW5f"
    },
    {
      title: "Glo Pals - Reusable Light-Up Cubes for Sensory Play 4pk - Lumi - Purple",
      description: "Just drop them in the water and watch the magic! These light-up cubes transform bath time (or sensory bins) into a dazzling, glowing experience.",
      price: "$19.99",
      link: "https://amzn.to/4otl8hb"
    },
    {
      title: "Lip Smacker Lippy Pals 3 Pack Lip Kit- Unicorn/Panda/Kitten Foxy",
      description: "The cutest animal friends in lip balm form! This 3-pack is perfect for splitting up or gifting as one adorable kit for the little lip balm enthusiast.",
      price: "$10.57",
      link: "https://amzn.to/3WRxa7V"
    },
    {
      title: "Mouse Head Straw Covers for Stanley Cup",
      description: "The Stanley trend meets Disney magic! These tiny straw covers keep things clean and add an absolutely charming touch to their favorite travel mug.",
      price: "$6.88",
      link: "https://amzn.to/4hR3FwN"
    },
    {
      title: "Furby Furblets Par-Tay Mini Friend",
      description: "The iconic Furbies are back and they've shrunk! This mini, musical Furblet is the perfect size to pop into a stocking and bring some quirky noise to the day.",
      price: "$14.99",
      link: "https://amzn.to/47LCpLh"
    },
    {
      title: "Horizon Group USA Bluey Aqua Art - Reusable Water Reveal Activity Pages With Water Pen",
      description: "No mess, just pure coloring fun! Using only water, these pages reveal vibrant scenes, and best of all, they can be reused again and again!",
      price: "$7.97",
      link: "https://amzn.to/47OFOsV"
    },
    {
      title: "GABBY'S Dollhouse Travel Cutlery Set",
      description: "Eating on the go just got a lot cuter! This travel set featuring Gabby's Dollhouse characters is practical, portable, and perfect for school lunches or trips.",
      price: "$7.99",
      link: "https://amzn.to/3WOwmRm"
    },
    {
      title: "M&M'S, Christmas Milk Chocolate Holiday Storybook",
      description: "A delightful classic! This festive storybook packaging is a fun, decorative way to deliver a classic handful of colorful chocolate joy.",
      price: "$3.97",
      link: "https://amzn.to/43XDwq3"
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
          <h1 className="display-lg mb-6">Stocking Stuffers for Kids</h1>
          <p className="body-lg text-muted-foreground">
            21 fun toys, books, and treats that will delight younger children on Christmas morning—all under $25!
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

export default StockingStuffersForKids;
