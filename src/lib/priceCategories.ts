import { Gift } from "@/data/gifts";

export interface PriceCategory {
  name: string;
  min: number;
  max: number;
  description: string;
}

export const priceCategories: PriceCategory[] = [
  {
    name: "Under $25",
    min: 0,
    max: 25,
    description: "Thoughtful tokens and delightful surprises"
  },
  {
    name: "Under $50",
    min: 25,
    max: 50,
    description: "Quality gifts with impact"
  },
  {
    name: "Under $100",
    min: 50,
    max: 100,
    description: "Premium selections for special occasions"
  },
  {
    name: "Under $200",
    min: 100,
    max: 200,
    description: "Impressive gifts that make a statement"
  },
  {
    name: "Premium Gifts $300+",
    min: 300,
    max: Infinity,
    description: "Luxury investments for the extraordinary"
  }
];

export function categorizeGiftsByPrice(gifts: Gift[]): Map<string, Gift[]> {
  const categorizedGifts = new Map<string, Gift[]>();
  
  // Initialize all categories
  priceCategories.forEach(category => {
    categorizedGifts.set(category.name, []);
  });
  
  // Sort gifts into categories
  gifts.forEach(gift => {
    for (const category of priceCategories) {
      if (gift.price >= category.min && gift.price < category.max) {
        const categoryGifts = categorizedGifts.get(category.name) || [];
        categoryGifts.push(gift);
        categorizedGifts.set(category.name, categoryGifts);
        break;
      }
    }
  });
  
  return categorizedGifts;
}
