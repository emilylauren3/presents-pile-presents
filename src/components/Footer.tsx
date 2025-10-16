import logo from "@/assets/logo.png";
import { Instagram, Facebook, ExternalLink } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Categories: [
      { name: "By Price", href: "/by-price" },
      { name: "Blog", href: "/blog" },
    ],
    About: [
      { name: "Contact", href: "#" },
      { name: "Affiliate Disclosure", href: "/affiliate-disclosure" },
      { name: "Privacy Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/thepresentpile", icon: Instagram },
    { name: "Pinterest", href: "https://www.pinterest.com/ThePresentPile", icon: ExternalLink },
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61581456816886", icon: Facebook },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="content-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="The Present Pile Logo" className="h-10 w-10" />
              <h3 className="text-xl font-display font-semibold">
                The Present Pile
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Curated gift guides for the thoughtful giver.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="caption mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="caption mb-4">Follow</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} The Present Pile. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              We earn a commission from qualifying purchases as an Amazon Associate.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
