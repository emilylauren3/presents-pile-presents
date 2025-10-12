import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const GiftsAllTweens = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <article className="py-12">
          <div className="content-container max-w-4xl">
            <Button asChild variant="ghost" className="mb-6">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <header className="mb-12">
              <p className="caption text-primary mb-4">Gift Guide</p>
              <h1 className="display-lg mb-6">
                Best Gifts and Toys for All Tweens
              </h1>
              <p className="body-lg text-muted-foreground">
                Universal gifts perfect for any tween
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              {/* Product 1 */}
              <section className="mb-12 pb-12 border-b border-border">
                <h2 className="text-2xl font-display font-semibold mb-4">1. WILSON NBA Basketballs (Team & Color Options)</h2>
                <p>
                  Looking for a gift that encourages active fun? These WILSON NBA Basketballs are a perfect score for any pre-teen, appealing to boys and girls alike.
                </p>
                <p>
                  Whether they are dedicated team fans or just love a pop of color, these high-quality outdoor balls get them moving:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>For the Sports Fan:</strong> Show team spirit with the classic Toronto Raptors edition (standard Size 7, traditional brown).</li>
                  <li><strong>For the Trendsetter:</strong> The Pink DRV Outdoor option (Size 6, includes a pump) is a vibrant and slightly smaller ball, often a better fit for younger players.</li>
                </ul>
                <p>
                  With options for team pride or stylish play, these durable balls fall in a great price range and are officially approved by the NBA.
                </p>
                <p className="font-semibold text-primary mt-4">Price Category: $29 - $45 (Varies by style and size)</p>
                <p className="text-sm text-muted-foreground mt-2">Key Features: Official NBA Brand, Durable for Outdoor Use, Options for Team Logos (Raptors) or Fun Colors (Pink), Available in Sizes 6 & 7.</p>
                <Button asChild variant="default" className="mt-4">
                  <a href="https://amzn.to/48E0Igk" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                </Button>
              </section>

              {/* Product 2 */}
              <section className="mb-12 pb-12 border-b border-border">
                <h2 className="text-2xl font-display font-semibold mb-4">2. The Maze Runner Series 5-Book Collection Set</h2>
                <p>
                  If your pre-teen is looking for a book series they can't put down, this is it! The Maze Runner Series by James Dashner is a hugely popular science fiction/dystopian collection that blends thrilling survival and intense mystery.
                </p>
                <p>
                  This 5-book set collects all the main stories, giving them an instant library of page-turning action. It's perfect for the reader who loves fast-paced plots, shocking twists, and high-stakes adventure—especially if they've enjoyed the popular movie adaptations. With thousands of high ratings from readers, it's a guaranteed hit for middle-grade and young adult bookworms.
                </p>
                <p className="text-sm text-muted-foreground mt-2">Key Features: 5-Book Collection, High-Rated Thriller/Sci-Fi Series, Great Value for a Complete Set, Perfect for Fans of Dystopian Adventure.</p>
                <Button asChild variant="default" className="mt-4">
                  <a href="https://amzn.to/4nWKdQO" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                </Button>
              </section>

              {/* Product 3 */}
              <section className="mb-12 pb-12 border-b border-border">
                <h2 className="text-2xl font-display font-semibold mb-4">3. The Complete 'Summer I Turned Pretty' Trilogy (Boxed Set)</h2>
                <p>
                  This is the ultimate gift for any pre-teen or teen reader obsessed with romance and summer vibes! The 'Summer I Turned Pretty' Trilogy by Jenny Han is a global phenomenon known for its sweet, dramatic love triangle and relatable coming-of-age story.
                </p>
                <p>
                  This beautiful boxed set includes all three novels, so your reader can dive into Belly's world and follow the story through to the very last page. It's a highly requested series, especially popular due to the TV show adaptation, making it a guaranteed, swoon-worthy gift.
                </p>
                <p className="font-semibold text-primary mt-4">Price Category: Under $50 (Great value for three popular hardcover books!)</p>
                <p className="text-sm text-muted-foreground mt-2">Key Features: Complete 3-Book Set, Popular Teen Romance/Drama, TV Show Tie-in, Perfect for Fans of Love Triangles and Summer Stories.</p>
                <Button asChild variant="default" className="mt-4">
                  <a href="https://amzn.to/4gNO8xf" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                </Button>
              </section>

              {/* Product 4 */}
              <section className="mb-12 pb-12 border-b border-border">
                <h2 className="text-2xl font-display font-semibold mb-4">4. SCRIB3D P1 3D Printing Pen with Display—My Personal Must-Have!</h2>
                <p>
                  Okay, trust me on this one: the SCRIB3D P1 3D Pen is seriously awesome. I know because my son and my stepson both got this last Christmas, and it was a total hit! It's one of those gifts that actually gets used, and it's equally cool for boys and girls who love to create.
                </p>
                <p>
                  This pen is like a magic wand that lets them draw into the air, turning their doodles into real 3D objects. It's way less complicated than a full 3D printer, but it still sparks that awesome creativity and STEM interest.
                </p>
                <p>
                  For $39.99, it's a fantastic value because the kit includes literally everything they need to start: the pen with a handy display, three starter colors of PLA plastic, and a Stencil Book + Project Guide to walk them through their first masterpieces. If you want a gift that gets them off the screen and building something real, this is it!
                </p>
                <p className="font-semibold text-primary mt-4">Price Category: $39.99</p>
                <p className="text-sm text-muted-foreground mt-2">Key Features: Easy-to-Use 3D Drawing, Includes Starter Plastic and Stencils, Great for Creativity and STEM Fun.</p>
                <Button asChild variant="default" className="mt-4">
                  <a href="https://amzn.to/46GPsgE" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                </Button>
              </section>

              {/* Product 5 */}
              <section className="mb-12 pb-12 border-b border-border">
                <h2 className="text-2xl font-display font-semibold mb-4">5. Doctor Squish - Shiny Glitter Squishy Maker Station</h2>
                <p>
                  If you're looking for a gift that's totally hands-on and creative, this Amazon Exclusive kit is brilliant. It lets your pre-teen make their own squishies (you know, those stress-relief toys that are everywhere). This station is all about shiny glitter, letting them mix and fill their own custom squishy balls with glitter, slime, and colorful fun.
                </p>
                <p>
                  It's great for both boys and girls because it combines the fun of science and slime with personalized crafting. For $34.99, it's a super cool activity that results in fun, squishy toys they can keep, trade, or just squeeze all day!
                </p>
                <p className="font-semibold text-primary mt-4">Price Category: $34.99</p>
                <p className="text-sm text-muted-foreground mt-2">Key Features: Make Your Own Squishies, Includes Glitter and Slime, Promotes Hands-On Creativity, A Popular Toy Trend.</p>
                <Button asChild variant="default" className="mt-4">
                  <a href="https://amzn.to/4gPP0kV" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                </Button>
              </section>

              {/* Product 6 */}
              <section className="mb-12 pb-12 border-b border-border">
                <h2 className="text-2xl font-display font-semibold mb-4">6. Voltz Toys Brushless 24V Go Kart - ThunderDrift</h2>
                <p>
                  Alright, I think I just found the ultimate splurge-worthy gift for your kids this Holiday season! It's definitely on my list! Forget bikes, this Voltz Toys ThunderDrift Go Kart is a high-performance machine that is going to make your driveway the coolest spot on the block.
                </p>
                <p>
                  This isn't just any ride-on; it features a powerful Brushless 24V motor and specialized wheels for high-performance drifting—it's basically a real-life Mario Kart! And let's talk features: it has a variable speed throttle, built-in Bluetooth, and an MP3 player so your kids can blast their favorite tunes while they ride.
                </p>
                <p>
                  Most importantly, it includes protective gears, which is a huge bonus and peace of mind for parents. If you have multiple kids to shop for, this is a show-stopping item that will have them begging to play outside!
                </p>
                <p className="font-semibold text-primary mt-4">Price Category: Under $300 priced at $279</p>
                <p className="text-sm text-muted-foreground mt-2">Key Features: High-Performance Drifting, Brushless 24V Motor, Built-in Bluetooth/MP3 Player, Includes Protective Gear, Great for Boys & Girls.</p>
                <Button asChild variant="default" className="mt-4">
                  <a href="https://amzn.to/4nY0Ag6" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                </Button>
              </section>

              {/* Product 7 */}
              <section className="mb-12 pb-12 border-b border-border">
                <h2 className="text-2xl font-display font-semibold mb-4">7. LEGO ONE PIECE - The Going Merry Pirate Ship</h2>
                <p>
                  Okay, this one is personally exciting! As a parent whose son is obsessed with the show, seeing LEGO bring the iconic Going Merry Pirate Ship to life is just awesome—this is definitely going on my personal list, too!
                </p>
                <p>
                  This large building block set is a must-have for any ONE PIECE fan (boys and girls ages 10+). It allows them to construct the legendary ship of the Straw Hat Crew, providing hours of engaging building time and tons of material for imaginative pretend play. The finished ship looks fantastic on display, but it's packed with details for recreating their favorite anime adventures. It even includes Straw Hat Crew Toy Figures!
                </p>
                <p>
                  Given that over 300 were bought last month, you know this is a highly popular and well-received set. It's the perfect big-impact gift for a birthday or the holidays.
                </p>
                <p className="font-semibold text-primary mt-4">Price Category: $169.98</p>
                <p className="text-sm text-muted-foreground mt-2">Key Features: Iconic ONE PIECE Ship, Includes Straw Hat Crew Figures, High-Demand Collectible/Playset, Appeals to Boys & Girls 10+.</p>
                <Button asChild variant="default" className="mt-4">
                  <a href="https://amzn.to/42XkZts" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                </Button>
              </section>

              {/* Product 8 */}
              <section className="mb-12 pb-12 border-b border-border">
                <h2 className="text-2xl font-display font-semibold mb-4">8. LEGO Creator 3-in-1 Wild Animals Panda Family</h2>
                <p>
                  If you're looking for a clever gift that offers tons of creative playtime, this LEGO Creator 3-in-1 Panda Family kit is an excellent choice! It's perfect for kids aged 8 and up (boys and girls) and is clearly a hit, with over 600 sets bought last month. The best part about the 3-in-1 sets is the amazing value: your child can build the adorable Panda Family first, then completely rebuild the same bricks into two totally new animals—a cute Penguin or a majestic Orca. It's basically three great gifts in one box! This set is ideal for encouraging problem-solving skills and imaginative play long after the first build is done.
                </p>
                <p className="font-semibold text-primary mt-4">Price Category: $38.93</p>
                <p className="text-sm text-muted-foreground mt-2">Key Features: 3-in-1 Building Options (Panda, Penguin, Orca), Great Value, Encourages Creativity and Rebuilding Fun</p>
                <Button asChild variant="default" className="mt-4">
                  <a href="https://amzn.to/46L7uhP" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                </Button>
              </section>

              {/* Product 9 */}
              <section className="mb-12 pb-12 border-b border-border">
                <h2 className="text-2xl font-display font-semibold mb-4">9. ELEGOO UNO R3 Smart Robot Car Kit V4</h2>
                <p>
                  If you're looking for a gift that's genuinely educational and super fun, this ELEGOO Smart Robot Car Kit is a phenomenal choice. My son received this from his uncle, and let me tell you, it was a real hit!
                </p>
                <p>
                  This kit is designed for Arduino learners—it teaches your pre-teen (boys and girls alike!) the basics of programming, electronics, and robotics in a hands-on way. They get to build their own functional robot car that includes an UNO R3 board, line tracking, an ultrasonic sensor, and an IR remote control.
                </p>
                <Button asChild variant="default" className="mt-4">
                  <a href="https://amzn.to/3VJlhAo" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                </Button>
              </section>

              {/* Product 10 */}
              <section className="mb-12">
                <h2 className="text-2xl font-display font-semibold mb-4">10. LEGO Wednesday & Enid's Dorm Room Playset</h2>
                <p>
                  I totally get it—we are a huge LEGO family too! I could put a million sets on this list, but I'll make sure this awesome Wednesday & Enid's Dorm Room Playset is the grand finale.
                </p>
                <p>
                  This set is a total must-have for any pre-teen who is obsessed with the Wednesday show (and let's be honest, that's most of them!). It lets them recreate the iconic Nevermore Academy room, perfectly capturing the contrast between Wednesday's dark side and Enid's colorful world.
                </p>
                <p>
                  It comes with four minifigures and tons of great details for imaginative pretend play, including the typewriter and the disco ball! It's a fantastic gift for boys and girls ages 10 and up, combining the fun of LEGO building with their favorite pop culture obsession.
                </p>
                <p className="font-semibold text-primary mt-4">Price Category: $98.98</p>
                <p className="text-sm text-muted-foreground mt-2">Key Features: Iconic Wednesday Dorm Room, Includes 4 Minifigures, Great for Pretend Play and Display, Perfect Pop Culture Gift.</p>
                <Button asChild variant="default" className="mt-4">
                  <a href="https://amzn.to/3WndEQd" target="_blank" rel="noopener noreferrer">View on Amazon</a>
                </Button>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default GiftsAllTweens;
