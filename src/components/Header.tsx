import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const categories = [
    { name: "By Recipient", href: "#recipient" },
    { name: "By Occasion", href: "#occasion" },
    { name: "By Price", href: "#price" },
    { name: "Top Piles", href: "#top" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="content-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-3">
              <img src={logo} alt="The Present Pile Logo" className="h-12 w-12" />
              <h1 className="text-2xl font-display font-semibold text-foreground">
                The Present Pile
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="caption text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {category.name}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
