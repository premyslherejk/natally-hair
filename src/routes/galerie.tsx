import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Instagram } from "lucide-react";
import { PageShell } from "@/components/SiteLayout";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Fotogalerie — Natally Hair Pardubice" },
      { name: "description", content: "Ukázky práce salonu Natally Hair — proměny, barvení, melír i AirTouch." },
    ],
  }),
  component: Gallery,
});

const IMAGES = [
  "gal-1", "work-1", "gal-2", "work-2", "gal-3", "work-3",
  "gal-4", "work-4", "gal-5", "gal-6", "salon", "hero",
];

function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <PageShell>
      <section className="px-6 py-12 text-center max-w-3xl mx-auto">
        <div className="eyebrow mb-6">Fotogalerie</div>
        <h1 className="font-display text-5xl md:text-7xl">Práce, která <span className="gold-text italic">mluví sama za sebe</span></h1>
        <p className="mt-6 text-foreground/75">
          Společně tvoříme účesy, které podtrhují přirozenou krásu a zajišťují, že odcházíte spokojení a sebevědomí.
        </p>
      </section>

      <section className="px-3 md:px-6 py-12">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 max-w-7xl mx-auto">
          {IMAGES.map((img, i) => (
            <motion.button
              key={img + i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              onClick={() => setActive(`/images/${img}.jpg`)}
              className="block w-full mb-3 reveal-img cursor-zoom-in"
            >
              <img src={`/images/${img}.jpg`} alt="" loading="lazy" className="w-full h-auto object-cover" />
            </motion.button>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <p className="eyebrow mb-4"># Více mých prací</p>
        <a href="https://www.instagram.com/natally_vlasy/" target="_blank" rel="noreferrer" className="btn-outline">
          <Instagram size={16} /> @natally_vlasy
        </a>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button className="absolute top-6 right-6 text-foreground p-2"><X /></button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              src={active} alt="" className="max-h-[90vh] max-w-full rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageShell>
  );
}
