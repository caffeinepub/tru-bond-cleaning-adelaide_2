import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-navy">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <img
            src="/assets/generated/logo-transparent.dim_400x120.png"
            alt="Tru Bond Cleaning Adelaide Logo"
            className="h-12 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={`nav.link.${i + 1}`}
              className="text-white/90 hover:text-gold font-medium transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button
              data-ocid="nav.primary_button"
              className="bg-gold text-navy font-semibold hover:bg-gold/90 shadow-gold"
            >
              Get a Free Quote
            </Button>
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-navy-dark border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="text-white/90 hover:text-gold font-medium py-2 border-b border-white/10"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}>
            <Button className="w-full bg-gold text-navy font-semibold hover:bg-gold/90">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
