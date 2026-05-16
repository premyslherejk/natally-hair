import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Heart, GraduationCap, Sparkles } from "lucide-react";
import { PageShell, BOOKING_URL } from "@/components/SiteLayout";

export const Route = createFileRoute("/o-mne")({
  head: () => ({
    meta: [
      { title: "O mně — Natally Hair Pardubice" },
      { name: "description", content: "Poznejte Natálku — kadeřnici, pro kterou je její profese vášní už od dětství." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7">
            <div className="eyebrow mb-6">O mně</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Vášeň <span className="gold-text italic">od dětství</span>, salon ze srdce.
            </h1>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed">
              Jmenuji se Natálka a kadeřnictví je mojí vášní už od malička. Mým snem bylo vytvořit místo, kde se cítíte výjimečně — kde péče o vlasy jde ruku v ruce s pohodou, časem pro sebe a šálkem dobré kávy.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.1 }} className="lg:col-span-5">
            <div className="reveal-img aspect-[4/5] rounded-3xl ring-1 ring-primary/30">
              <img src="/images/work-3.jpg" alt="Natally Hair" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { icon: Heart, title: "Práce s láskou", text: "Každá návštěva je pro mě o vás. Beru si čas na konzultaci, abych pochopila vaše představy i typ vlasů." },
            { icon: GraduationCap, title: "Stálé vzdělávání", text: "Pravidelně absolvuji odborná školení — Malibu C, Foliyage, Color Touch, AirTouch i další moderní techniky." },
            { icon: Sparkles, title: "Zážitek pro vás", text: "Příjemné prostředí v centru Pardubic, výběrová káva, domácí limonáda nebo sklenka prosecca." },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <c.icon className="text-primary mb-4" size={28} strokeWidth={1.4} />
              <h3 className="font-display text-2xl mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto glass rounded-3xl p-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Pojďme začít <span className="gold-text italic">vaši proměnu</span></h2>
          <p className="text-foreground/75 mb-8 max-w-xl mx-auto">Rezervujte si termín online — vyberete si přesně čas, který vám vyhovuje.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn-gold">Rezervovat termín</a>
            <Link to="/sluzby" className="btn-outline">Ceník služeb</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
