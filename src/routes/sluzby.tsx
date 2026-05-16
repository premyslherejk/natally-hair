import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, BOOKING_URL } from "@/components/SiteLayout";

export const Route = createFileRoute("/sluzby")({
  head: () => ({
    meta: [
      { title: "Služby & Ceník — Natally Hair Pardubice" },
      { name: "description", content: "Kompletní ceník služeb salonu Natally Hair: dámské, pánské i dětské střihy, barvení, melír, AirTouch, Malibu C." },
    ],
  }),
  component: Services,
});

type Item = { name: string; desc: string; price: string };
const SECTIONS: { title: string; items: Item[] }[] = [
  {
    title: "Ceník dámy",
    items: [
      { name: "Střih", desc: "Precizní střih, mytí, profesionální foukaná a finální styling.", price: "530 – 920 Kč" },
      { name: "Střih pouze strojkem", desc: "Střih strojkem, mytí, foukaná a styling.", price: "240 Kč" },
      { name: "Střih ofiny", desc: "Úprava a zastřižení ofiny dle vašeho stylu.", price: "100 Kč" },
      { name: "Čištění Malibu C", desc: "Hloubkové čištění vlasů Malibu C s mytím, foukanou a stylingem.", price: "1 000 – 1 300 Kč" },
      { name: "Žehlení / kulmování", desc: "Profesionální úprava bez mytí a foukané.", price: "280 – 390 Kč" },
      { name: "Ošetření vlásků", desc: "Výživa Kérastase včetně mytí, foukané a stylingu.", price: "760 – 930 Kč" },
      { name: "Barvení / odbarvování", desc: "Včetně mytí, foukané a finálního stylingu.", price: "800 Kč" },
      { name: "Tónování", desc: "Tónování vlasů včetně mytí, foukané a stylingu.", price: "1 030 – 1 470 Kč" },
      { name: "Melír a tónování", desc: "Melír po celé hlavě s následným tónováním.", price: "2 150 – 3 300 Kč" },
      { name: "Zesvětlení vlásků (AirTouch)", desc: "Jemný, přirozený a plynulý přechod barev.", price: "2 500 – 3 500 Kč" },
    ],
  },
  {
    title: "Ceník páni",
    items: [
      { name: "Střih", desc: "Pánský střih včetně mytí, foukané a stylingu.", price: "420 Kč" },
      { name: "Střih pouze strojkem", desc: "Strojkem včetně mytí, foukané a stylingu.", price: "240 Kč" },
      { name: "Úprava vousů", desc: "Úprava vousů pro čistý a upravený vzhled.", price: "110 – 140 Kč" },
      { name: "Barvení / odbarvování", desc: "Včetně mytí, foukané a stylingu.", price: "970 Kč" },
      { name: "Tónování", desc: "Pánské tónování vlasů.", price: "970 Kč" },
      { name: "Melír a tónování", desc: "Pánský melír s tónováním.", price: "1 850 Kč" },
    ],
  },
  {
    title: "Ceník děti do 7 let",
    items: [
      { name: "Střih chlapci", desc: "Chlapecký střih do 7 let včetně mytí, foukané a stylingu.", price: "350 Kč" },
      { name: "Střih dívky", desc: "Dívčí střih do 7 let včetně mytí, foukané a stylingu.", price: "360 – 420 Kč" },
    ],
  },
];

function Services() {
  return (
    <PageShell>
      <section className="px-6 py-12 text-center max-w-4xl mx-auto">
        <div className="eyebrow mb-6">Služby & Ceník</div>
        <h1 className="font-display text-5xl md:text-7xl">Péče šitá <span className="gold-text italic">na míru</span></h1>
        <p className="mt-6 text-foreground/75 max-w-2xl mx-auto">
          Všechny ceny jsou orientační — finální cena záleží na délce, hustotě vlasů a zvolené technice. Rádi vám vše předem upřesníme při konzultaci.
        </p>
      </section>

      {SECTIONS.map((sec, si) => (
        <section key={sec.title} className="px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl mb-8 flex items-center gap-4"
            >
              <span className="w-12 h-px bg-primary" />
              {sec.title}
            </motion.h2>
            <div className="grid gap-3">
              {sec.items.map((it, i) => (
                <motion.div
                  key={it.name}
                  initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (si * 0.05) + i * 0.04 }}
                  className="group glass rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 hover:border-primary/40 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">{it.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{it.desc}</p>
                  </div>
                  <div className="font-display text-2xl gold-text whitespace-nowrap">{it.price}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-12">
          <h2 className="font-display text-3xl md:text-4xl mb-4">Vyberte si termín online</h2>
          <p className="text-muted-foreground mb-8">Pohodlná rezervace 24/7 přes Noona.</p>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn-gold">Rezervovat termín</a>
        </div>
      </section>
    </PageShell>
  );
}
