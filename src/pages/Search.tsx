import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search as SearchIcon, ArrowRight, ExternalLink, X } from "lucide-react";
import { gifts } from "@/data/gifts";
import { Badge } from "@/components/ui/badge";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");

  // Blog posts data
  const blogPosts = [
    {
      title: "The Stocking Stuffer Edit: Trendy, Viral, and Genius Gifts Under $25",
      link: "/blog/stocking-stuffers",
      description: "Five comprehensive lists full of trendy, viral, and genius stocking stuffer ideas—all under $25.",
      keywords: ["stocking", "stuffers", "under $25", "gifts", "christmas", "holiday"]
    },
    {
      title: "Stocking Stuffers for Her",
      link: "/blog/stocking-stuffers-for-her",
      description: "14 trendy beauty, skincare, and lifestyle essentials perfect for the special women in your life—all under $25!",
      keywords: ["stocking", "stuffers", "her", "women", "beauty", "skincare", "under $25"]
    },
    {
      title: "Stocking Stuffers for Him",
      link: "/blog/stocking-stuffers-for-him",
      description: "17 practical gadgets, grooming essentials, and fun treats for the guys on your list",
      keywords: ["stocking", "stuffers", "him", "men", "gadgets", "grooming", "under $25"]
    },
    {
      title: "Stocking Stuffers Teen/Tween Girls",
      link: "/blog/stocking-stuffers-teen-tween-girls",
      description: "18 viral must-haves from beauty essentials to collectibles that tween and teen girls will love",
      keywords: ["stocking", "stuffers", "teen", "tween", "girls", "beauty", "collectibles", "under $25"]
    },
    {
      title: "Boys Stocking Stuffers: Teen/Tween Edition",
      link: "/blog/stocking-stuffers-teen-tween-boys",
      description: "17 gaming gear, fidget toys, and collectibles perfect for tween and teen boys",
      keywords: ["stocking", "stuffers", "teen", "tween", "boys", "gaming", "collectibles", "under $25"]
    },
    {
      title: "Stocking Stuffers for Kids",
      link: "/blog/stocking-stuffers-for-kids",
      description: "21 fun toys, books, and treats that will delight younger children on Christmas morning",
      keywords: ["stocking", "stuffers", "kids", "children", "toys", "books", "under $25"]
    },
    {
      title: "Top Toy Picks For the Holiday Season",
      link: "/blog/top-holiday-toys",
      description: "25+ must-have toys and gifts for kids ages 2-12 that will make Christmas morning magical.",
      keywords: ["toys", "holiday", "christmas", "kids", "children"]
    },
    {
      title: "Gifts for the Man Who Has Everything? 10 Must-Have Tech Gadgets",
      link: "/blog/tech-gifts-for-men",
      description: "10 must-have tech gadgets and high-tech gear that will actually impress the man who has everything.",
      keywords: ["tech", "gadgets", "men", "him", "technology", "electronics"]
    },
    {
      title: "The Preteen Puzzle: The Ultimate, No-Fail Gift Guide for 10–13 Year Olds",
      link: "/blog/preteen-gift-guide",
      description: "The ultimate gift guide for preteens aged 10-13, solving the toughest gifting challenge.",
      keywords: ["preteen", "10-13", "tween", "gifts"]
    },
    {
      title: "The Hottest Tech & Gadgets for Tween Boys",
      link: "/blog/tech-gadgets-tween-boys",
      description: "12 must-have tech toys and gadgets perfect for boys aged 10-13, from gaming gear to RC cars.",
      keywords: ["tech", "gadgets", "tween", "boys", "gaming"]
    },
    {
      title: "The Viral Must-Have Accessories for Tween Girls",
      link: "/blog/accessories-tween-girls",
      description: "12 trending accessories every tween girl wants, from styling tools to creative kits.",
      keywords: ["accessories", "tween", "girls", "trending", "viral"]
    },
    {
      title: "Best Gifts and Toys for All Tweens",
      link: "/blog/gifts-all-tweens",
      description: "10 universal gifts that work for any tween, regardless of gender or interests.",
      keywords: ["gifts", "toys", "tweens", "universal"]
    },
    {
      title: "Luxury Pile",
      link: "/blog/luxury-pile",
      description: "Premium, high-end gifts for those special occasions.",
      keywords: ["luxury", "premium", "expensive", "high-end"]
    },
    {
      title: "Cozy Pile",
      link: "/blog/cozy-pile",
      description: "Warm, comfortable gifts perfect for relaxation.",
      keywords: ["cozy", "comfort", "relaxation", "warm"]
    }
  ];

  // Search function
  const performSearch = () => {
    const query = searchQuery.toLowerCase().trim();
    const min = minPrice ? parseFloat(minPrice) : 0;
    const max = maxPrice ? parseFloat(maxPrice) : Infinity;

    if (!query && !minPrice && !maxPrice) {
      return { gifts: [], blogPosts: [] };
    }

    // Search gifts
    const matchedGifts = gifts.filter(gift => {
      const matchesPrice = gift.price >= min && gift.price <= max;
      
      if (!query) return matchesPrice;

      const matchesQuery = 
        gift.title.toLowerCase().includes(query) ||
        gift.description.toLowerCase().includes(query) ||
        gift.fullDescription.toLowerCase().includes(query) ||
        gift.category?.toLowerCase().includes(query) ||
        gift.guideSource.toLowerCase().includes(query) ||
        gift.price.toString().includes(query);

      return matchesQuery && matchesPrice;
    });

    // Search blog posts
    const matchedBlogPosts = query ? blogPosts.filter(post => {
      return (
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.keywords.some(keyword => keyword.toLowerCase().includes(query))
      );
    }) : [];

    return { gifts: matchedGifts, blogPosts: matchedBlogPosts };
  };

  const results = performSearch();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    setSearchParams(params);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setMinPrice("");
    setMaxPrice("");
    setSearchParams({});
  };

  useEffect(() => {
    setSearchQuery(searchParams.get("q") || "");
    setMinPrice(searchParams.get("minPrice") || "");
    setMaxPrice(searchParams.get("maxPrice") || "");
  }, [searchParams]);

  const hasActiveSearch = searchQuery || minPrice || maxPrice;
  const totalResults = results.gifts.length + results.blogPosts.length;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="content-container section-spacing">
        <div className="max-w-4xl mx-auto">
          {/* Search Header */}
          <div className="mb-12">
            <h1 className="display-lg mb-6">Search The Present Pile</h1>
            <p className="body-lg text-muted-foreground mb-8">
              Search through our gift guides and product recommendations
            </p>

            {/* Search Input */}
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search by keyword, product name, category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="pl-10"
                  />
                </div>
                <Button onClick={handleSearch}>
                  Search
                </Button>
              </div>

              {/* Price Filters */}
              <div className="flex gap-2 items-center">
                <Input
                  type="number"
                  placeholder="Min price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="w-32"
                  min="0"
                  step="0.01"
                />
                <span className="text-muted-foreground">to</span>
                <Input
                  type="number"
                  placeholder="Max price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="w-32"
                  min="0"
                  step="0.01"
                />
                {hasActiveSearch && (
                  <Button variant="ghost" size="sm" onClick={clearSearch}>
                    <X className="h-4 w-4 mr-1" />
                    Clear
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Results Summary */}
          {hasActiveSearch && (
            <div className="mb-8">
              <p className="text-muted-foreground">
                Found <span className="font-semibold text-foreground">{totalResults}</span> result{totalResults !== 1 ? 's' : ''}
                {searchQuery && ` for "${searchQuery}"`}
                {(minPrice || maxPrice) && ` in price range $${minPrice || '0'} - $${maxPrice || '∞'}`}
              </p>
            </div>
          )}

          {/* Blog Posts Results */}
          {results.blogPosts.length > 0 && (
            <section className="mb-12">
              <h2 className="display-sm mb-6">Gift Guides</h2>
              <div className="space-y-4">
                {results.blogPosts.map((post) => (
                  <Card key={post.link} className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        <Link to={post.link} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription>{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild variant="editorial">
                        <Link to={post.link}>
                          View Guide
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Gift Products Results */}
          {results.gifts.length > 0 && (
            <section>
              <h2 className="display-sm mb-6">Products</h2>
              <div className="space-y-6">
                {results.gifts.map((gift) => (
                  <Card key={gift.id} className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{gift.title}</CardTitle>
                          <CardDescription className="mb-2">{gift.description}</CardDescription>
                          <div className="flex gap-2 flex-wrap">
                            <Badge variant="secondary" className="text-primary font-semibold">
                              ${gift.price.toFixed(2)}
                            </Badge>
                            {gift.category && (
                              <Badge variant="outline">{gift.category}</Badge>
                            )}
                            <Badge variant="outline" className="text-xs">
                              {gift.guideSource}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{gift.fullDescription}</p>
                      <Button asChild variant="default">
                        <a href={gift.affiliateLink} target="_blank" rel="noopener noreferrer">
                          View on Amazon
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* No Results */}
          {hasActiveSearch && totalResults === 0 && (
            <div className="text-center py-12">
              <SearchIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or price range
              </p>
              <Button onClick={clearSearch} variant="outline">
                Clear Search
              </Button>
            </div>
          )}

          {/* Initial State */}
          {!hasActiveSearch && (
            <div className="text-center py-12">
              <SearchIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Start searching</h3>
              <p className="text-muted-foreground">
                Enter a keyword or price range to find gifts and guides
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
