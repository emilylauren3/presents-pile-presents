import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { gifts } from "@/data/gifts";
import { categorizeGiftsByPrice, priceCategories } from "@/lib/priceCategories";

const ByPrice = () => {
  const categorizedGifts = categorizeGiftsByPrice(gifts);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop by Price</h1>
            <p className="text-muted-foreground text-lg">
              Find the perfect gift within your budget. From thoughtful tokens to premium splurges.
            </p>
          </header>

          <div className="bg-muted/50 p-4 rounded-lg mb-8">
            <p className="text-sm">
              <strong>Affiliate Disclosure:</strong> This post contains affiliate links. We may earn a commission at no extra cost to you when you purchase through our links.
            </p>
          </div>

          {priceCategories.map((category) => {
            const categoryGifts = categorizedGifts.get(category.name) || [];
            
            if (categoryGifts.length === 0) return null;

            return (
              <section key={category.name} className="mb-12">
                <h2 className="text-3xl font-bold mb-2">{category.name}</h2>
                <p className="text-muted-foreground mb-6">{category.description}</p>
                
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

export default ByPrice;