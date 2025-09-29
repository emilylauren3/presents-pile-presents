const Footer = () => {
  const footerLinks = {
    Categories: [
      { name: "By Recipient", href: "#" },
      { name: "By Occasion", href: "#" },
      { name: "By Price", href: "#" },
      { name: "By Interest", href: "#" },
    ],
    About: [
      { name: "Our Story", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Affiliate Disclosure", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
    Follow: [
      { name: "Instagram", href: "#" },
      { name: "Pinterest", href: "#" },
      { name: "Facebook", href: "#" },
    ],
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="content-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">
              The Present Pile
            </h3>
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
