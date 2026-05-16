import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { PageShell, BOOKING_URL } from "@/components/SiteLayout";

export const Route = createFileRoute("/reference")({
  head: () => ({
    meta: [
      { title: "Reference — Natally Hair Pardubice" },
      { name: "description", content: "Co o salonu Natally Hair říkají naši klienti." },
    ],
  }),
  component: References,
});

const REVIEWS = [
  { name: "Tereza Písková", text: "Obrovská spokojenost! Vlasy jsou naprosto nádherné, přesně podle mých představ – takový výsledek jsem jinde ještě nezažila. Je vidět, že je práce dělaná s láskou, citem a zkušeností. Přístup byl velmi milý a profesionální, celou dobu jsem se cítila skvěle. Kadeřnici můžu jedině doporučit a určitě se budu ráda vracet 🤍✨" },
  { name: "Veronika", text: "Byla jsem u Natálky na melírech a byla jsem maximálně spokojená. Milý a profesionální přístup, vše mi dopředu vysvětlila a poradila s odstínem. Melíry jsou krásné, přirozené a vlasy zůstaly zdravé a lesklé. Příjemná atmosféra a hezké prostředí. Určitě doporučuji a ráda se vrátím ❤️✂️" },
  { name: "Václav Volf", text: "Ještě jednou bych rád poděkoval za krásný střih, příjemné popovídání, dobrou kávu a příjemné prostředí. Jste příjemná mladá dáma, která má ráda svoji práci. Ať se Vám i nadále daří. Rád se k Vám opět vrátím. :-)" },
  { name: "Annie Kokrdová", text: "Jsem velice spokojená. Natálka má úžasný přístup ke klientům. Krásné prostředí, dobrá káva (a to nejsem milovník kávy 🤭) a skvělá atmosféra. Moje vlasy díky ní vypadají o mnoho lépe, než když jsem jí poznala. Kdyby to šlo, dala bych 10/10. Určitě se k ní vrátím 😊" },
];

function References() {
  return (
    <PageShell>
      <section className="px-6 py-12 text-center max-w-3xl mx-auto">
        <div className="eyebrow mb-6">Reference</div>
        <h1 className="font-display text-5xl md:text-7xl">Slova, která <span className="gold-text italic">hřejí u srdce</span></h1>
        <p className="mt-6 text-foreground/75">
          V salonu Natally Hair se neustále vzděláváme a sledujeme nejnovější trendy. Každý zákazník je pro nás jedinečný a naše práce je vždy individuálně přizpůsobena.
        </p>
        <div className="flex justify-center gap-1 mt-6 text-primary">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 relative"
            >
              <div className="text-5xl gold-text font-display leading-none mb-3">“</div>
              <blockquote className="text-foreground/85 leading-relaxed">{r.text}</blockquote>
              <figcaption className="mt-6 eyebrow">— {r.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn-gold">Rezervovat termín</a>
      </section>
    </PageShell>
  );
}
