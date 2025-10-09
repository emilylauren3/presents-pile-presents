import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PreteenGiftGuide = () => {
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
                The Preteen Puzzle: The Ultimate, No-Fail Gift Guide for 10–13 Year Olds
              </h1>
              <p className="body-lg text-muted-foreground mb-4">
                Struggling to find a gift for a preteen? I've cracked the code with this ultimate, no-fail gift guide for 10-13 year olds they'll actually use.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                <span className="bg-muted px-2 py-1 rounded">gift guide</span>
                <span className="bg-muted px-2 py-1 rounded">preteens</span>
                <span className="bg-muted px-2 py-1 rounded">tweens</span>
                <span className="bg-muted px-2 py-1 rounded">holidays</span>
                <span className="bg-muted px-2 py-1 rounded">parenting</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="bg-muted/50 border-l-4 border-primary p-4 mb-8">
                <p className="text-sm font-semibold text-primary mb-2">Affiliate Disclaimer</p>
                <p className="text-sm">This gift guide contains affiliate links. We may earn a commission if you purchase through a link at no extra cost to you.</p>
              </div>

              <p className="lead mb-6">
                Like many moms and dads (and grandparents, aunts, and best friends!), I recently struggled to find a gift that my newly 12-year-old son would actually be excited about. That struggle is <strong>real</strong>, and it's usually silent—because let's be honest, asking a preteen what they want usually results in a grunt and a blank stare.
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-display font-semibold mb-4">The Preteen Challenge</h2>
                <p className="mb-4">
                  Preteens are the ultimate challenge. They've outgrown the toy aisle (mostly), but they roll their eyes at anything "<strong>too grown-up</strong>." They're stuck in the hilarious, maddening limbo between kid and teenager, making them arguably the hardest group on the planet to shop for. You're not just buying a gift; you're buying a piece of social currency that either earns bragging rights or gets buried under a pile of hoodies.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-display font-semibold mb-4">The Secret: Interest-Based Gifting</h2>
                <p className="mb-4">
                  I've done the weeks of deep-diving, stealth-researching, and even consulting my son's most-opinionated friends. I cracked the code, and the secret is surprisingly simple: Stop buying "age-appropriate" toys, and start buying into their passions. It's all about interest-based gifting.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-display font-semibold mb-4">Your Ultimate Gift Guide</h2>
                <p className="mb-4">
                  That's why I've done the heavy lifting for you! Welcome to The Present Pile's ultimate gift guide for tweens (10–13 years old). I've gathered the most-wanted tech, the trending games, and the coolest accessories of the year—and filtered out all the junk they'll forget about by Tuesday.
                </p>
                <p className="mb-6">
                  To make this as easy as possible (and to keep those eye-rolls to an absolute minimum), I've broken down these gifts into separate, curated lists. Whether the tween in your life is obsessed with gaming culture, the latest beauty trends, STEM projects, or room aesthetics, you'll find the perfect, I-knew-you'd-love-it present right here.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-display font-semibold mb-4">How to Navigate This Guide</h2>
                <p className="mb-4">
                  Dive into the sections below to start stacking your Present Pile and finally achieve that "<strong>Wow!</strong>" moment you've been hoping for.
                </p>
                <p className="mb-4">Click below to jump straight to the list you need:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>🎁 <Link to="/blog/tech-gadgets-tween-boys" className="text-primary hover:underline">The Hottest Tech & Gadgets for Tween Boys (Under $50, $100, and $200)</Link></li>
                  <li>🎀 <Link to="/blog/accessories-tween-girls" className="text-primary hover:underline">The Viral & Must-Have Accessories for Tween Girls (Under $50, $100, and $200)</Link></li>
                  <li>🎮 <Link to="/blog/gifts-all-tweens" className="text-primary hover:underline">Best Gifts and Toys for All Tweens</Link></li>
                </ul>
              </section>

              <hr className="my-12 border-border" />

              <section className="mb-12">
                <h2 className="text-2xl font-display font-semibold mb-4">That's a Wrap! (For Now...)</h2>
                <p className="mb-4">
                  We've just unwrapped 34 fantastic gift ideas across those three must-have categories, and hopefully, you've found the perfect present for the pre-teen on your list.
                </p>
                <p className="mb-4">
                  From the ultimate FUJIFILM INSTAX camera to the high-tech ELEGOO Robot Car and the super-cozy Hobestluk Bean Bag, this list is packed with things they'll genuinely love. Remember, every item here is personally vetted, often including the things that became huge hits in my own house (like those amazing SCRIB3D Pens and the Doctor Squish Maker!).
                </p>
                <p className="mb-6">
                  If you didn't quite find what you were looking for this time, don't worry—the gift hunt is never over! There will always be another list ready to peruse right here on The Present Pile.
                </p>
                <p className="font-semibold text-primary">
                  Happy gifting, and check back soon for the next drop of best gifts!
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PreteenGiftGuide;
