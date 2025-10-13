import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LuxuryPile = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">The Luxury Pile: Premium Gifts for the Person Who Has Everything</h1>
            <p className="text-muted-foreground text-lg">
              The ultimate collection of elevated essentials, wellness must-haves, and lifestyle upgrades that transform everyday moments into luxury experiences.
            </p>
          </header>

          <div className="bg-muted/50 p-4 rounded-lg mb-8">
            <p className="text-sm">
              <strong>Affiliate Disclosure:</strong> This post contains affiliate links. We may earn a commission at no extra cost to you when you purchase through our links.
            </p>
          </div>

          {/* Wellness & Self-Care Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Wellness & Self-Care: The Ultimate Relaxation Stack</h2>
            
            <div className="space-y-6">
              {/* Item 1 */}
              <Card>
                <CardHeader>
                  <CardTitle>Oura Ring 4 - Rose Gold - Smart Ring</CardTitle>
                  <CardDescription>The Ultimate Social Currency for the Health-Obsessed</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Forget the clunky fitness trackers; this is the ultimate social currency for the health-obsessed. The Oura Ring tracks sleep, stress, activity, and recovery with a precision and style that's totally subtle and chic. It's not just a gadget; it's a 24/7 personalized recovery coach hiding on their finger. For the person who has everything but wants the data on how good they're actually sleeping.
                  </p>
                  <Button variant="editorial" asChild>
                    <a href="https://amzn.to/3WAYtTI" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Item 2 */}
              <Card>
                <CardHeader>
                  <CardTitle>Ulike ReGlow LED Light Therapy Mask</CardTitle>
                  <CardDescription>Spa-Level Skincare at Home</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    This is what happens when you decide to skip the pricey spa treatments and bring the entire esthetician's office home. With four light modes, this mask is the ultimate skin-care accessory. If they're obsessed with beauty trends and room aesthetics, this is the futuristic, photo-ready gift they didn't know they needed.
                  </p>
                  <Button variant="editorial" asChild>
                    <a href="https://amzn.to/4h8Igie" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Item 3 */}
              <Card>
                <CardHeader>
                  <CardTitle>Boriwat Back Massager Neck Shoulder Massager with Heat</CardTitle>
                  <CardDescription>Your Personal In-Home Masseuse</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    After weeks of deep-diving and heavy lifting, someone deserves a break. This Shiatsu Massage Pillow is the perfect excuse to sit down and be utterly useless for 20 minutes. It delivers deep, heated relief that turns a standard sofa into a private, in-home masseuse.
                  </p>
                  <Button variant="editorial" asChild>
                    <a href="https://amzn.to/4oBjnOP" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Item 4 */}
              <Card>
                <CardHeader>
                  <CardTitle>Facial Steamer Spa Kit with Complimentary 17 Skin Care Tools</CardTitle>
                  <CardDescription>Professional At-Home Facial Experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    A must-have for the dedicated at-home facialist. This kit provides a professional steam for facial detox and sinus relief, and it comes complimentary with 17 skincare tools, so you're truly stacking your Present Pile with value. It's the simplest way to get that "I-knew-you'd-love-it" glow.
                  </p>
                  <Button variant="editorial" asChild>
                    <a href="https://amzn.to/3IRuOm9" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Item 5 */}
              <Card>
                <CardHeader>
                  <CardTitle>Ice N Fire - Surprise Hidden Jewelry Soy Candle (Bubble Gum scent)</CardTitle>
                  <CardDescription>A Candle & Treasure Hunt in One</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    A candle that's a gift and a treasure hunt? Yes, please. This bubble gum-scented soy candle has a mystery piece of jewelry (like a hidden necklace) inside. It's the perfect, indulgent little surprise for a relaxing night in.
                  </p>
                  <Button variant="editorial" asChild>
                    <a href="https://amzn.to/4nQfxkK" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Item 6 */}
              <Card>
                <CardHeader>
                  <CardTitle>SKIN1004 Madagascar Centella Poremizing Clear Toner 210ml</CardTitle>
                  <CardDescription>K-Beauty Excellence</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    You can't have a luxury pile without the ultimate K-Beauty haul. This line is for the skincare aficionado who appreciates clinical-level results with beautiful, minimalist packaging. This clear toner works to refine pores and leave skin looking airbrushed.
                  </p>
                  <Button variant="editorial" asChild>
                    <a href="https://amzn.to/48WI2sf" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Item 7 */}
              <Card>
                <CardHeader>
                  <CardTitle>SKIN1004 Madagascar Centella Poremizing Quick Clay Stick Mask 27g</CardTitle>
                  <CardDescription>On-the-Go Flawless Skin</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The perfect on-the-go tool for flawless skin. This quick clay stick mask is a simple, no-mess way to get that deep clean and refine pores. It's an investment in their face, making it a guaranteed hit.
                  </p>
                  <Button variant="editorial" asChild>
                    <a href="https://amzn.to/3W2e6Dv" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Item 8 */}
              <Card>
                <CardHeader>
                  <CardTitle>SKIN1004 Madagascar Centella Poremizing Fresh Ampoule 100ml</CardTitle>
                  <CardDescription>Concentrated Hydration Boost</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The finishing touch to the ultimate skincare regimen. This fresh ampoule is the concentrated boost of hydration and clarity that makes a dramatic difference.
                  </p>
                  <Button variant="editorial" asChild>
                    <a href="https://amzn.to/4h3IyGU" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Home & Lifestyle Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Home & Lifestyle: Elevated Essentials</h2>
            
            <div className="space-y-6">
              {/* Item 9 */}
              <Card>
                <CardHeader>
                  <CardTitle>HexClad Hybrid Nonstick 10-Inch Fry Pan with Tempered Glass Lid</CardTitle>
                  <CardDescription>The Pan That Ends All Debates</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    This isn't just a frying pan; it's the pan that ends the debate between stainless steel and nonstick. It's a hybrid marvel that delivers performance (sears like cast iron) and convenience (cleans like nonstick). This gift says, "I support your passion for cooking, but I also support your need for an easy clean-up."
                  </p>
                  <Button variant="editorial" asChild>
                    <a href="https://amzn.to/4omYzuh" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Item 10 */}
              <Card>
                <CardHeader>
                  <CardTitle>Nespresso CitiZ & Milk Platinum Single Serve Coffee and Espresso Machine by De'Longhi</CardTitle>
                  <CardDescription>Your Personal Barista</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    For the person who believes a $7 latte is a lifestyle—but is ready for an upgrade. This sleek, platinum-finish machine is the ultimate coffee and espresso solution. It's the easiest way to achieve that "Wow!" moment before their morning meeting.
                  </p>
                  <Button variant="editorial" asChild>
                    <a href="https://amzn.to/4qp8UHZ" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Item 11 */}
              <Card>
                <CardHeader>
                  <CardTitle>Bedsure 100% Rayon Derived from Bamboo Sheets Queen Size Set</CardTitle>
                  <CardDescription>Cooling Luxury for Hot Sleepers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    If you've ever struggled to find the perfect gift for a hot sleeper, this is your secret code cracked. These cooling sheets are the luxurious, life-changing difference between a restless night and a deeply recovered one.
                  </p>
                  <Button variant="editorial" asChild>
                    <a href="https://amzn.to/42BpDNV" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Item 12 */}
              <Card>
                <CardHeader>
                  <CardTitle>funest Makeup Brush Holder Organizer, 360° Rotating</CardTitle>
                  <CardDescription>Aesthetic Organization Perfection</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    For the person whose desk or vanity deserves a serious aesthetic upgrade. This rotating organizer keeps every tool and accessory in its place, making those viral beauty trends (or just a regular Tuesday morning routine) feel completely effortless.
                  </p>
                  <Button variant="editorial" asChild>
                    <a href="https://amzn.to/4nQfzcm" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Fashion & Fitness Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Fashion & Fitness: The Core Pieces</h2>
            
            <div className="space-y-6">
              {/* Item 13 */}
              <Card>
                <CardHeader>
                  <CardTitle>Peloton Indoor Exercise Bikes, Original Peloton Bike and Bike+</CardTitle>
                  <CardDescription>The Ultimate Fitness Investment</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The ultimate piece of high-tech gear. It's not just a bike; it's a community, a schedule, and a motivational coach all rolled into one. This is the big-ticket item that says, "I'm buying into your passion for fitness," and is personally vetted to become a huge hit.
                  </p>
                  <Button variant="editorial" asChild>
                    <a href="https://amzn.to/3IUQg9U" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Item 14 */}
              <Card>
                <CardHeader>
                  <CardTitle>Ray-Ban Women's Rb4378 Sunglasses</CardTitle>
                  <CardDescription>Timeless Classic Accessory</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Some classics are non-negotiable. These Havana/Gradient Brown sunglasses are a sleek, timeless accessory. They're the social currency that completes any look, ensuring they're never rolling their eyes at being "too grown-up".
                  </p>
                  <Button variant="editorial" asChild>
                    <a href="https://amzn.to/4nNx9gY" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Item 15 */}
              <Card>
                <CardHeader>
                  <CardTitle>kate spade handbag for women Madison SMALL satchel (Toasted hazelnut)</CardTitle>
                  <CardDescription>Chic Versatile Investment Piece</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Every luxury pile needs a chic, versatile handbag. This small satchel in a beautiful toasted hazelnut shade is the perfect size—it fits all the essentials without becoming a bottomless pit. It's an investment piece that is guaranteed to earn bragging rights.
                  </p>
                  <Button variant="editorial" asChild>
                    <a href="https://amzn.to/4q74QM1" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Item 16 */}
              <Card>
                <CardHeader>
                  <CardTitle>Outdoor Bluetooth Speaker with Flame Atmosphere</CardTitle>
                  <CardDescription>Music Meets Ambiance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Because great music and cozy ambiance are always in style. This portable speaker combines a quality sound system with a flickering flame light, making it the perfect accessory for outdoor gatherings. It's a simple way to elevate an evening and enhance their patio aesthetics.
                  </p>
                  <Button variant="editorial" asChild>
                    <a href="https://amzn.to/48ZfgXW" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default LuxuryPile;
