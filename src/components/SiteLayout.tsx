import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MapPin, Instagram } from "lucide-react";

const NAV = [
  { to: "/", label: "Domů" },
  { to: "/o-mne", label: "O mně" },
  { to: "/sluzby", label: "Služby & Ceník" },
  { to: "/galerie", label: "Galerie" },
  { to: "/reference", label: "Reference" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export const BOOKING_URL = "https://noona.app/cs/natallyhair/book?source=BrowseByCountries&rank=27";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 bg-background/80 backdrop-blur-xl border-b border-primary/10" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full overflow-hidden ring-1 ring-primary/40 group-hover:ring-primary transition-all">
            <img src="/images/logo.jpg" alt="Natally Hair logo" className="w-full h-full object-cover" />
          </div>
          <div className="leading-none">
            <div className="font-display text-xl tracking-wide gold-text">Natally Hair</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">Pardubice</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => {
            const active = path === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative text-sm tracking-wide transition-colors ${
                  active ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn-gold">
            Rezervace
          </a>
        </div>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-6 mt-3 rounded-2xl glass p-6"
          >
            <nav className="flex flex-col gap-4">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-lg font-display tracking-wide text-foreground/90 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn-gold mt-2 self-start">
                Rezervace
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative mt-32 border-t border-primary/15">
      <div className="absolute inset-x-0 top-0 h-px gold-line" />
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-primary/40">
              <img src="/images/logo.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="font-display text-2xl gold-text">Natally Hair</div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Salon, kde se snoubí krása, péče a individuální přístup. Vaše dokonalé vlasy v srdci Pardubic.
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Kontakt</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="flex gap-3"><MapPin size={16} className="text-primary mt-0.5 shrink-0" />Masarykovo náměstí 2633<br />Hotel Labe — 3. patro, dveře 320<br />530 02 Pardubice</li>
            <li className="flex gap-3"><Phone size={16} className="text-primary mt-0.5 shrink-0" /><a href="tel:+420605452650" className="hover:text-primary">+420 605 452 650</a></li>
            <li className="flex gap-3"><Instagram size={16} className="text-primary mt-0.5 shrink-0" /><a href="https://www.instagram.com/natally_vlasy/" target="_blank" rel="noreferrer" className="hover:text-primary">@natally_vlasy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Navigace</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-foreground/80 hover:text-primary transition">{n.label}</Link>
              </li>
            ))}
          </ul>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn-outline mt-6">Rezervovat termín</a>
        </div>
      </div>
      <div className="border-t border-primary/10 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Natally Hair · Vyrobeno s láskou v Pardubicích
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className="pt-32"
    >
      {children}
    </motion.main>
  );
}

export default function SiteLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
