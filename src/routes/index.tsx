import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import logo from "@/assets/logo.png.asset.json";
import tortas from "@/assets/tortas.jpg";
import pudim from "@/assets/pudim.jpg";
import bolos from "@/assets/bolos.jpg";
import morangos from "@/assets/morangos.jpg";
import bolachas from "@/assets/bolachas.jpg";
import boloPote from "@/assets/bolo-pote.jpg";

const WHATS = `https://wa.me/5551981255174?text=${encodeURIComponent("Olá! Vim pelo site e gostaria de fazer um pedido.")}`;
const PHONE = "(51) 9 8125-5174";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nessa Doces | Confeitaria artesanal" },
      { name: "description", content: "Tortas, pudins, bolos, morangos cravejados, bolachas e bolo de pote feitos com carinho. Peça pelo WhatsApp." },
      { property: "og:title", content: "Nessa Doces | Confeitaria artesanal" },
      { property: "og:description", content: "Doces feitos com carinho para adoçar seus momentos. Peça pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const doces = [
  { nome: "Tortas", desc: "Massa amanteigada e recheios frescos da estação.", img: tortas },
  { nome: "Pudim", desc: "Cremoso, lisinho e com calda de caramelo dourada.", img: pudim },
  { nome: "Bolos", desc: "Bolos fofinhos e recheados para toda ocasião.", img: bolos },
  { nome: "Morangos cravejados no palito", desc: "Morangos com chocolate e confeitos delicados.", img: morangos },
  { nome: "Bolachas e biscoitos", desc: "Crocantes, amanteigados e feitos à mão.", img: bolachas },
  { nome: "Bolo de pote", desc: "Camadas de bolo e creme para comer de colher.", img: boloPote },
];

function Wave() {
  return (
    <svg viewBox="0 0 120 12" className="mx-auto mt-3 h-3 w-24 text-rose" aria-hidden>
      <path d="M2 6 Q 12 0 22 6 T 42 6 T 62 6 T 82 6 T 102 6 T 118 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Title({ children }: { children: string }) {
  return (
    <div className="reveal mb-10 text-center">
      <h2 className="font-display text-4xl font-semibold md:text-5xl">{children}</h2>
      <Wave />
    </div>
  );
}

function Blob({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className={`block h-12 w-full md:h-20 ${flip ? "rotate-180" : ""} ${className}`} aria-hidden>
      <path d="M0 40 C 240 90 480 0 720 30 S 1200 80 1440 30 V80 H0Z" fill="currentColor" />
    </svg>
  );
}

function WhatsIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.3-.3-.4-.6-.5Z" />
    </svg>
  );
}

function Index() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const btn = "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105";

  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      {/* Hero */}
      <section className="relative bg-cream px-6 pb-16 pt-14 text-center md:pt-20">
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-blush/50 blur-2xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blush/40 blur-2xl" />
        <div className="fade-in-up relative mx-auto flex max-w-xl flex-col items-center">
          <img src={logo.url} alt="Logo Nessa Doces com moldura de morangos" width={700} height={700} className="h-60 w-60 rounded-full shadow-soft md:h-80 md:w-80" />
          <p className="mt-8 font-display text-3xl italic leading-snug md:text-4xl">Doces feitos com carinho para adoçar seus momentos</p>
          <a href={WHATS} target="_blank" rel="noopener noreferrer" className={`${btn} mt-8`}>
            <WhatsIcon /> Fazer meu pedido
          </a>
          <a href="#doces" className="mt-6 text-sm font-semibold text-muted-foreground underline-offset-4 hover:underline">Ver nossos doces ↓</a>
        </div>
      </section>
      <Blob flip className="text-cream" />

      {/* Doces */}
      <section id="doces" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <Title>Nossos doces</Title>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-8 md:gap-y-12">
          {doces.map((d, i) => (
            <article key={d.nome} className="reveal group" style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
              <div className={`overflow-hidden rounded-[2rem] bg-blush shadow-soft ${i % 2 ? "md:mt-8" : ""}`}>
                <img src={d.img} alt={`${d.nome} da Nessa Doces`} loading="lazy" width={816} height={816} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold md:text-2xl">{d.nome}</h3>
              <p className="mt-1 text-sm text-muted-foreground md:text-base">{d.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Como pedir */}
      <Blob className="text-blush" />
      <section className="bg-blush px-6 py-14">
        <div className="mx-auto max-w-4xl">
          <Title>Como pedir</Title>
          <ol className="grid gap-6 md:grid-cols-3">
            {[
              ["Escolha o doce", "Dê uma olhada no cardápio e escolha seus favoritos."],
              ["Chame no WhatsApp", "Mande uma mensagem contando o que deseja."],
              ["Combine a entrega", "Acertamos juntos a entrega ou a retirada."],
            ].map(([t, d], i) => (
              <li key={t} className="reveal rounded-[2rem] bg-background p-7 text-center shadow-soft">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cream font-display text-2xl font-semibold text-primary">{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
          <div className="reveal mt-10 text-center">
            <a href={WHATS} target="_blank" rel="noopener noreferrer" className={btn}><WhatsIcon /> Fazer meu pedido</a>
          </div>
        </div>
      </section>
      <Blob flip className="text-blush" />

      {/* Sobre */}
      <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div className="reveal overflow-hidden rounded-[45%_55%_50%_50%/55%_45%_55%_45%] shadow-soft">
          <img src={bolos} alt="Bolo artesanal com cobertura rosa e morangos" loading="lazy" width={816} height={816} className="aspect-square w-full object-cover" />
        </div>
        <div className="reveal text-center md:text-left">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">Sobre a Nessa Doces</h2>
          <svg viewBox="0 0 120 12" className="mt-3 h-3 w-24 text-rose max-md:mx-auto" aria-hidden><path d="M2 6 Q 12 0 22 6 T 42 6 T 62 6 T 82 6 T 102 6 T 118 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Cada doce da Nessa Doces nasce na cozinha de casa, feito à mão, com ingredientes escolhidos com cuidado e muito carinho. Acreditamos que um doce bonito e gostoso transforma qualquer momento em uma lembrança especial — e é isso que queremos levar até você.
          </p>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-cream px-6 py-12 text-center">
        <img src={logo.url} alt="Logo Nessa Doces" loading="lazy" width={96} height={96} className="mx-auto h-24 w-24 rounded-full" />
        <a href={WHATS} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-primary hover:underline">
          <WhatsIcon /> {PHONE}
        </a>
        <p className="mt-4 font-display text-xl italic">Obrigada por adoçar seus dias com a gente!</p>
        <p className="mt-4 text-xs text-muted-foreground">© {new Date().getFullYear()} Nessa Doces</p>
      </footer>

      <a href={WHATS} target="_blank" rel="noopener noreferrer" aria-label="Pedir pelo WhatsApp" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition hover:scale-105">
        <WhatsIcon className="h-7 w-7" />
      </a>
    </main>
  );
}
