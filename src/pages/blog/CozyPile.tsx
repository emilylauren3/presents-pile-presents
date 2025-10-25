import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { gifts } from "@/data/gifts";

const CozyPile = () => {
  const cozyGifts = gifts.filter((gift) => gift.guideSource === "Cozy Pile");

  // Group gifts by category
  const categories = {
    "Cozy Essentials": cozyGifts.filter((g) => g.category === "Cozy Essentials"),
    "Cozy Reading": cozyGifts.filter((g) => g.category === "Cozy Reading"),
    "Cozy Comfort": cozyGifts.filter((g) => g.category === "Cozy Comfort"),
    "Cozy Beverages": cozyGifts.filter((g) => g.category === "Cozy Beverages"),
    "Cozy Wellness": cozyGifts.filter((g) => g.category === "Cozy Wellness"),
    "Cozy Luxury": cozyGifts.filter((g) => g.category === "Cozy Luxury"),
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">The Cozy Pile</h1>
            <p className="text-muted-foreground text-lg mb-6">
              Warmth, comfort, and all things hygge for the homebody in your life. From plush blankets to heated essentials, discover gifts that create the perfect cozy atmosphere.
            </p>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm">
                <strong>Affiliate Disclosure:</strong> This post contains affiliate links. We may earn a commission at no extra cost to you when you purchase through our links.
              </p>
            </div>
          </header>

          {Object.entries(categories).map(([categoryName, categoryGifts]) => {
            if (categoryGifts.length === 0) return null;
            
            return (
              <section key={categoryName} className="mb-12">
                <h2 className="text-3xl font-bold mb-6">{categoryName}</h2>
                <div className="space-y-6">
                  {categoryGifts.map((gift) => (
                    <Card key={gift.id}>
                      <CardHeader>
                        <CardTitle>{gift.title}</CardTitle>
                        <CardDescription>{gift.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">{gift.fullDescription}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-primary">
                            ${gift.price.toFixed(2)}
                          </span>
                          <Button variant="editorial" asChild>
                            <a href={gift.affiliateLink} target="_blank" rel="noopener noreferrer">
                              View on Amazon
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            );
          })}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default CozyPile;
