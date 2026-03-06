import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Book an Appointment", href: "#contact", isButton: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Mdingi Midwifery Services Logo" className="h-12 w-auto" />
          <span className="hidden sm:block font-heading text-primary-foreground text-lg font-semibold leading-tight">
            Mdingi Midwifery<br />
            <span className="text-primary text-sm">& Wellness Clinic</span>
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.isButton ? (
                <a
                  href={link.href}
                  className="bg-primary text-primary-foreground font-body font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  href={link.href}
                  className="font-body text-primary-foreground/80 hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-secondary border-t border-primary/20 pb-4">
          <ul className="flex flex-col items-center gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.isButton ? (
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="bg-primary text-primary-foreground font-body font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-body text-primary-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
