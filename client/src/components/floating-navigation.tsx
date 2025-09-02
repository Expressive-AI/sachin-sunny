import { useEffect, useRef, useState } from "react";
import { Download, ChevronDown } from "lucide-react";

interface FloatingNavigationProps {
  activeSection: string;
}

export default function FloatingNavigation({ activeSection }: FloatingNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const islandRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#research", label: "Research" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  // Close the island when clicking outside
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (islandRef.current && !islandRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <nav
      className={
        "floating-nav fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 md:px-6 md:py-3 md:rounded-2xl md:shadow-lg md:backdrop-blur md:bg-background/80 md:border md:border-border"
      }
      data-testid="floating-navigation"
    >
      {/* Mobile overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/60 backdrop-blur-[2px] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Desktop navigation */}
      <div className="hidden md:flex items-center gap-3 md:gap-6">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => scrollToSection(item.href)}
            className={`font-mono text-sm font-medium transition-colors hover:text-primary ${
              activeSection === item.href.substring(1)
                ? "text-primary font-semibold"
                : "text-foreground"
            }`}
            data-testid={`nav-link-${item.label.toLowerCase()}`}
          >
            {item.label}
          </button>
        ))}
        <a
          href="/SachinPortfolio.pdf"
          download
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-mono text-sm font-medium transition-all duration-200 hover:shadow-md flex items-center space-x-2"
          data-testid="button-download-resume"
        >
          <Download size={16} />
          <span>Resume</span>
        </a>
        <div className="hidden sm:flex items-center gap-1.5 pl-3 ml-1 border-l text-xs text-muted-foreground">
          <img src="/logo.png" alt="Expressive AI logo" className="h-4 w-4 rounded-sm" />
          <span className="whitespace-nowrap">Built with Expressive AI</span>
        </div>
      </div>

      <div className="md:hidden flex items-center justify-center">
        <div ref={islandRef} className="relative z-50">
          {/* Pill trigger */}
          <button
            aria-expanded={isOpen}
            aria-controls="mobile-nav-items"
            onClick={() => setIsOpen((v) => !v)}
            className="w-36 rounded-full border border-border bg-background/80 backdrop-blur shadow-lg flex items-center justify-between gap-2 px-3 py-2"
          >
            <div className="flex items-center gap-2 min-w-3">
              <img src="/logo.png" alt="Expressive AI logo" className="h-4 w-4 rounded-sm" />
              <span className="font-mono text-xs truncate">Menu</span>
            </div>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
            />
          </button>

          {/* Dropdown panel */}
          <div
            id="mobile-nav-items"
            className={`${
              isOpen
                ? "pointer-events-auto opacity-100 translate-y-1 scale-100"
                : "pointer-events-none opacity-0 -translate-y-1 scale-95"
            } absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 w-[min(95vw,24rem)] rounded-xl border border-border bg-card shadow-xl transition-all duration-200 ease-out origin-top`}
            role="menu"
          >
            <div className="grid gap-1 p-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left rounded-md px-3 py-2 font-mono text-sm transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/SachinPortfolio.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="mt-1 bg-primary hover:bg-primary/90 text-primary-foreground w-full rounded-md px-3 py-2 font-mono text-sm transition-colors text-center"
                data-testid="button-download-resume-mobile"
              >
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
