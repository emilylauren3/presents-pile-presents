import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import giftCollection1 from "@/assets/gift-collection-1.jpg";
import giftCollection2 from "@/assets/gift-collection-2.jpg";
import giftCollection3 from "@/assets/holiday-toys-collection.jpg";

const categories = [
  {
    title: "The Cozy Pile",
    description: "Warmth, comfort, and all things hygge for the homebody in your life.",
    image: giftCollection1,
    tag: "For Home Lovers",
    link: "/blog/cozy-pile",
  },
  {
    title: "The Luxury Pile",
    description: "Elevated gifts that make a statement. For those special splurge-worthy moments.",
    image: giftCollection2,
    tag: "Premium Selection",
    link: "/blog/luxury-pile",
  },
  {
    title: "Top Holiday Toys",
    description: "The best toys for kids ages 2-12 that will make Christmas morning magical.",
    image: giftCollection3,
    tag: "Holiday Gifts",
    link: "/blog/top-holiday-toys",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="section-spacing bg-secondary/30">
      <div className="content-container">
        <div className="text-center mb-16">
          <p className="caption text-primary mb-3">Popular Collections</p>
          <h2 className="display-md mb-4">Explore Our Top Piles</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughtfully curated gift ideas organized by theme, occasion, and recipient
          </p>
        </div>

        <div className="editorial-grid">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="group cursor-pointer"
            >
              <article>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="caption bg-background/90 text-foreground px-3 py-1 rounded-sm">
                      {category.tag}
                    </span>
                  </div>
                </div>
                <h3 className="display-sm mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="body-md text-muted-foreground mb-4">
                  {category.description}
                </p>
                <button className="btn-minimal group/link">
                  View Collection
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
