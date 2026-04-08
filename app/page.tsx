import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="pt-24">
      <div className="overflow-hidden border-y border-red-200 bg-stone-400 py-3">
        <div className="banner-marquee text-white font-sans text-xs sm:text-sm font-semibold tracking-[0.08em] whitespace-nowrap">
          <span className="banner-marquee__content">
            Hey Family, the website is a work in progress... subject to change!!
          </span>
          <span className="banner-marquee__content" aria-hidden="true">
            Hey Family, the website is a work in progress... subject to change!!
          </span>
        </div>
      </div>
      <Hero />
      <section className="bg-charcoal text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-gold-300 mb-6">Are you exicted?</h2>
          <div className="h-1 w-20 bg-gradient-gold rounded mb-8" />
          <div className="space-y-6 text-gray-200 text-base sm:text-lg leading-relaxed">
            <p>
              Get ready for a weekend of fun and a special history trip to Marvell,
              Arkansas. This gathering is designed to bring every branch of the
              family together in one place.
            </p>
            <p>
              Everyone&apos;s attendance matters as we dive into the legacy Sunny started,
              reconnect across generations, and create fresh memories for the ones who
              follow us.
            </p>
            <p>
              The Sunny-Side is the first gathering of the descendants of Dwidell
              &quot;Sunny&quot; Hoskins Jr. - a prestigious family legacy weekend honoring
              where we came from and celebrating where the Hoskins family is going next.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeOcQy7LyXt3jQr8Xwf7T0xrnsiIDMuhqvaNGUyXkuKXl_QlQ/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-4 bg-gradient-gold text-charcoal font-serif font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300"
            >
              RSVP Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
