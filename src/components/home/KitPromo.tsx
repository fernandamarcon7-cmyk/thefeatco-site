import Link from "next/link";
import { KIT_PROMO } from "@/lib/store";

/** Faixa da promoção do kit: desconto levando 2 camisetas. */
export default function KitPromo() {
  return (
    <section className="bg-ink px-4 py-20 text-center text-cream sm:px-8 sm:py-28">
      <p className="font-mono text-[11px] tracking-[0.3em] text-cream/60 uppercase">{KIT_PROMO.kicker}</p>
      <h2 className="mt-5 font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.85] uppercase">
        {KIT_PROMO.title[0]}
        <br />
        {KIT_PROMO.title[1]}
      </h2>
      <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-cream/80">{KIT_PROMO.text}</p>
      <Link
        href="/produtos"
        className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-cream px-10 font-mono text-xs tracking-[0.25em] text-ink uppercase transition-opacity hover:opacity-85"
      >
        Montar meu kit
      </Link>
    </section>
  );
}
