import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, MapPin, Instagram, Calendar, Clock } from "lucide-react";
import { PageShell, BOOKING_URL } from "@/components/SiteLayout";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Natally Hair Pardubice" },
      { name: "description", content: "Najdete nás na Masarykově náměstí 2633, Hotel Labe — 3. patro, Pardubice. Telefon: +420 605 452 650." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell>
      <section className="px-6 py-12 text-center max-w-3xl mx-auto">
        <div className="eyebrow mb-6">Kontakt</div>
        <h1 className="font-display text-5xl md:text-7xl">Najdete <span className="gold-text italic">nás v centru</span></h1>
        <p className="mt-6 text-foreground/75">
          Svůj termín si můžete pohodlně rezervovat telefonicky nebo přes online rezervační systém.
        </p>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-8 space-y-6">
            <div>
              <div className="eyebrow mb-1">Adresa</div>
              <div className="flex gap-3 items-start">
                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                <p className="text-foreground/90 leading-relaxed">
                  <strong>Natally Hair</strong><br />
                  Masarykovo náměstí 2633<br />
                  Hotel Labe — 3. patro, dveře 320<br />
                  530 02 Pardubice
                </p>
              </div>
            </div>
            <div>
              <div className="eyebrow mb-1">Telefon</div>
              <a href="tel:+420605452650" className="flex gap-3 items-center text-foreground/90 hover:text-primary">
                <Phone className="text-primary" size={20} /> +420 605 452 650
              </a>
            </div>
            <div>
              <div className="eyebrow mb-1">Instagram</div>
              <a href="https://www.instagram.com/natally_vlasy/" target="_blank" rel="noreferrer" className="flex gap-3 items-center text-foreground/90 hover:text-primary">
                <Instagram className="text-primary" size={20} /> @natally_vlasy
              </a>
            </div>
            <div>
              <div className="eyebrow mb-1">Otevírací doba</div>
              <div className="flex gap-3 items-start">
                <Clock className="text-primary mt-1 shrink-0" size={20} />
                <p className="text-foreground/80">
                  Termíny dle online rezervace <br />
                  <span className="text-muted-foreground text-sm">Vyberte si přesný čas, který vám vyhovuje.</span>
                </p>
              </div>
            </div>
            <div className="pt-2 flex flex-wrap gap-3">
              <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn-gold"><Calendar size={14} /> Online rezervace</a>
              <a href="tel:+420605452650" className="btn-outline"><Phone size={14} /> Zavolat</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-2xl overflow-hidden ring-1 ring-primary/20 min-h-[420px]">
            <iframe
              title="Mapa Natally Hair Pardubice"
              src="https://www.google.com/maps?q=Masarykovo+n%C3%A1m%C4%9Bst%C3%AD+2633,+Pardubice&output=embed"
              className="w-full h-full min-h-[420px] border-0 grayscale-[20%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
