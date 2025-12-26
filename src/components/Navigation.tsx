import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container-narrow flex items-center justify-between py-4">
        <a
          href="#"
          className="text-xl font-semibold text-primary hover:opacity-80 transition-opacity"
        >
          AC
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="font-mono text-primary text-xs mr-1">
                  0{index + 1}.
                </span>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              className="px-4 py-2 border border-primary text-primary text-sm rounded-md hover:bg-primary/10 transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="container-narrow py-4 space-y-4">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="font-mono text-primary text-xs mr-2">
                    0{index + 1}.
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/resume.pdf"
                className="inline-block px-4 py-2 border border-primary text-primary text-sm rounded-md"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
