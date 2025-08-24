// Import utility function and icons
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

// Define the navigation menu items
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  // State to track if user has scrolled down
  const [isScrolled, setIsScrolled] = useState(false);
  // State to track if mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to listen for scroll events
  useEffect(() => {
    // Function to check if user has scrolled
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Add scroll listener when component mounts
    window.addEventListener("scroll", handleScroll);
    
    // Remove scroll listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Navigation bar - fixed at the top of the page
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        // Change background when scrolled
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      {/* Container for navbar content */}
      <div className="container flex items-center justify-between">
        
        {/* Logo/Name */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Ira </span>{" "}
            Sharma
          </span>
        </a>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex space-x-8">
          {/* Map through navigation items to create links */}
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {/* Show X icon when menu is open, hamburger when closed */}
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            // Show/hide menu based on isMenuOpen state
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {/* Mobile menu items */}
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)} // Close menu when link is clicked
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};