import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Продукция", href: "#products" },
    { name: "О нас", href: "#about" },
    { name: "Преимущества", href: "#features" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/files/e62696bd-eb99-417e-b7c5-bec7497d01b3.jpg" 
              alt="BarBear Product" 
              className="w-10 h-10 rounded-full hidden md:block"
            />
            <span className="text-2xl font-bold text-primary">BarBear</span>
          </div>
        </Link>

        {/* Product Image - visible on desktop */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://cdn.poehali.dev/files/8b3463fb-4ecd-4b9f-9f34-addf705d87c4.jpg" 
            alt="BarBear Matte Paste" 
            className="h-16 rounded-lg shadow-md transition-all duration-300 hover:scale-105" 
          />
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button>Оптовый заказ</Button>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg animate-fade-in">
          <div className="container-custom py-5 flex flex-col space-y-4">
            {/* Mobile product image */}
            <div className="flex justify-center mb-2">
              <img 
                src="https://cdn.poehali.dev/files/8b3463fb-4ecd-4b9f-9f34-addf705d87c4.jpg" 
                alt="BarBear Matte Paste" 
                className="h-16 rounded-lg shadow-md" 
              />
            </div>
            
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full">Оптовый заказ</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
