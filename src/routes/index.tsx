import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Scissors, Coffee, Award } from "lucide-react";
import { PageShell, BOOKING_URL } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({ component: Home });

const FEATURES = [
  { icon: Award, title: "Certifikované techniky", desc: "Malibu C, Foliyage, Color Touch, AirTouch a další moderní postupy." },
  { icon: Scissors, title: "Individuální přístup", desc: "Konzultace a střih ušitý přesně na míru tvaru obličeje a stylu." },
  { icon: Coffee, title: "Zážitek navíc", desc: "Výběrová káva, domácí limonáda nebo sklenka prosecca k vašemu termínu." },
];

const WORKS = ["work-1", "work-2", "work-3", "work-4"];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="/images/hero.jpg" alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
            className="lg:col-span-7"
          >
            <div className="eyebrow mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-primary" /> Kadeřnický salon · Pardubice
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              Váš sen.<br />
              <span className="gold-text italic">Dokonalé vlasy.</span>
            </h1>
            <p className="mt-8 text-lg text-foreground/75 max-w-xl leading-relaxed">
              Vítejte v <strong className="text-primary font-medium">Natally Hair</strong> — místě, kde se snoubí krása, péče a individuální přístup. Dopřejte si chvíli pro sebe v elegantním prostředí Hotelu Labe.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn-gold">
                Rezervovat termín <ArrowRight size={14} />
              </a>
              <Link to="/sluzby" className="btn-outline">Prohlédnout ceník</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden ring-1 ring-primary/20 shadow-2xl">
              <img src="/images/work-1.jpg" alt="Práce Natally Hair" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 aspect-square rounded-2xl overflow-hidden ring-1 ring-primary/30 float">
              <img src="/images/salon.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl px-5 py-4">
              <div className="text-xs eyebrow">Hodnocení</div>
              <div className="font-display text-2xl gold-text">★ 5.0</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 hover:-translate-y-1 transition-transform duration-500"
            >
              <f.icon className="text-primary mb-5" size={28} strokeWidth={1.4} />
              <h3 className="font-display text-2xl mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="reveal-img aspect-[3/4]"><img src="/images/work-2.jpg" alt="" className="w-full h-full object-cover" /></div>
              <div className="reveal-img aspect-[3/4] mt-12"><img src="/images/salon.jpg" alt="" className="w-full h-full object-cover" /></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="eyebrow mb-4 flex items-center gap-2"><Sparkles size={14} /> Můj příběh</div>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Můj sen, <span className="gold-text italic">vaše dokonalé vlasy</span></h2>
            <p className="text-foreground/75 leading-relaxed mb-4">
              Kadeřnictví je pro mě vášní už od dětství. Mým snem bylo vytvořit vlastní salon, kde se snoubí krása, péče a individuální přístup — a právě tak vzniklo Natally Hair.
            </p>
            <p className="text-foreground/75 leading-relaxed mb-8">
              Neustále se vzdělávám a absolvuji odborná školení, jako je <em className="text-primary not-italic">Malibu C čištění vlasů</em> nebo techniky <em className="text-primary not-italic">Foliyage a Color Touch</em>, abych vám mohla nabídnout služby na té nejvyšší úrovni.
            </p>
            <Link to="/o-mne" className="btn-outline">Více o mně <ArrowRight size={14} /></Link>
          </motion.div>
        </div>
      </section>

      {/* WORK GALLERY STRIP */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <div className="eyebrow mb-4">Portfolio</div>
          <h2 className="font-display text-4xl md:text-5xl">Proměny, které <span className="gold-text italic">mluví za vše</span></h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Inspirujte se výsledky, které podtrhují jedinečnost každého klienta.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 px-3">
          {WORKS.map((w, i) => (
            <motion.div
              key={w}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
              className="reveal-img aspect-[3/4]"
            >
              <img src={`/images/${w}.jpg`} alt="" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/galerie" className="btn-outline">Celá galerie <ArrowRight size={14} /></Link>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center glass rounded-3xl p-12">
          <div className="text-6xl gold-text font-display leading-none mb-6">“</div>
          <p className="font-display text-2xl md:text-3xl leading-snug text-foreground/90">
            Obrovská spokojenost! Vlasy jsou naprosto nádherné, přesně podle mých představ – takový výsledek jsem jinde ještě nezažila. Je vidět, že je práce dělaná s láskou, citem a zkušeností.
          </p>
          <div className="mt-8 eyebrow">— Tereza Písková</div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl p-12 md:p-20 text-center glass">
          <div className="absolute inset-0 shine pointer-events-none" />
          <div className="relative">
            <div className="eyebrow mb-4">Rezervace</div>
            <h2 className="font-display text-4xl md:text-6xl mb-6">Připravena na <span className="gold-text italic">změnu?</span></h2>
            <p className="text-foreground/75 max-w-xl mx-auto mb-8">
              Vyberte si termín online nebo zavolejte na <a href="tel:+420605452650" className="text-primary">+420 605 452 650</a>.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="btn-gold">Rezervovat online</a>
              <Link to="/kontakt" className="btn-outline">Kontaktovat</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
