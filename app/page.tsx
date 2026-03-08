const contactEmail = "sendmailtoabdullah@gmail.com";
const inquiryHref =
  "mailto:sendmailtoabdullah@gmail.com?subject=Inquiry%20about%20flipmystock.com";

const reasons = [
  {
    title: "Short and memorable",
    description:
      "The name is easy to say, easy to recall, and compact enough to look sharp across product, media, and investor-facing touchpoints."
  },
  {
    title: "Action-led positioning",
    description:
      "Flip brings movement and momentum, while stock anchors the brand clearly inside markets, finance, and investing."
  },
  {
    title: "Natural fintech fit",
    description:
      "It suits AI stock analysis, trading tools, retail investing platforms, market intelligence products, and education-led finance brands."
  },
  {
    title: ".com credibility",
    description:
      "A clean .com still signals trust, permanence, and category authority for buyers, users, media partners, and investors."
  },
  {
    title: "Strong brand surface area",
    description:
      "The name is flexible enough for product naming, content marketing, social presence, launch campaigns, and paid acquisition."
  },
  {
    title: "Global audience ready",
    description:
      "Plain English wording makes it accessible to broad consumer and startup audiences without feeling overly niche or region-specific."
  }
];

const useCases = [
  {
    title: "AI stock research platform",
    description:
      "A founder-friendly brand for tools that summarize filings, surface signals, and turn market data into clearer decisions."
  },
  {
    title: "Retail trading app",
    description:
      "A confident name for a mobile-first trading experience designed around modern onboarding, watchlists, and execution."
  },
  {
    title: "Market signals dashboard",
    description:
      "A natural fit for a product focused on screeners, alerts, trend detection, and market-moving event intelligence."
  },
  {
    title: "Investing newsletter or media brand",
    description:
      "Strong enough for a content-led business covering stock ideas, market commentary, education, or premium research."
  },
  {
    title: "Trading education product",
    description:
      "A clear brand candidate for courses, memberships, coaching programs, or communities built around smarter stock decisions."
  },
  {
    title: "Portfolio analytics tool",
    description:
      "Well suited to software that helps investors review portfolio performance, allocations, risk exposure, and rebalancing ideas."
  }
];

const brandSignals = [
  "Built for attention",
  "Designed for recall",
  "Ready for the right founder"
];

function SectionHeading({
  eyebrow,
  title,
  description,
  titleId
}: {
  eyebrow: string;
  title: string;
  description: string;
  titleId: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className="mt-4 font-[var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[#050816]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_32%),radial-gradient(circle_at_85%_18%,rgba(16,185,129,0.14),transparent_20%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.1),transparent_25%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-400/12 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="flex items-center justify-between py-6 sm:py-8">
          <a
            href="#top"
            className="font-[var(--font-display)] text-sm font-medium tracking-[0.24em] text-slate-200 transition hover:text-white"
          >
            FLIPMYSTOCK.COM
          </a>
          <nav
            className="hidden items-center gap-6 text-sm text-slate-300 md:flex"
            aria-label="Primary"
          >
            <a href="#why-this-domain-works" className="transition hover:text-white">
              Why it works
            </a>
            <a href="#use-cases" className="transition hover:text-white">
              Use cases
            </a>
            <a href="#brand-potential" className="transition hover:text-white">
              Brand potential
            </a>
            <a href="#acquisition" className="transition hover:text-white">
              Acquisition
            </a>
          </nav>
        </header>

        <section
          id="top"
          className="grid min-h-[calc(100vh-5rem)] items-center gap-14 pb-20 pt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:pb-28 lg:pt-10"
        >
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.12)]">
              Premium .com Domain
            </span>

            <h1 className="mt-8 font-[var(--font-display)] text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              flipmystock.com
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-200 sm:text-2xl">
              A bold .com brand for fintech, trading, and AI investing products.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              This domain is available for acquisition for founders, operators, and investors
              looking for a memorable market-facing brand with modern fintech range and .com
              credibility.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={inquiryHref}
                className="inline-flex items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-white"
              >
                Inquire to Purchase
              </a>
              <a
                href="#why-this-domain-works"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
              >
                View Brand Potential
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:gap-4">
              <span>Direct contact:</span>
              <a
                href={inquiryHref}
                className="font-medium text-slate-100 transition hover:text-cyan-200"
              >
                {contactEmail}
              </a>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-[0_18px_80px_rgba(2,8,23,0.45)] backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-400">
                  Domain Snapshot
                </p>
                <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-200">
                  Available
                </span>
              </div>

              <div className="mt-10">
                <p className="font-[var(--font-display)] text-3xl font-semibold text-white">
                  flipmystock.com
                </p>
                <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">
                  A sharp digital asset for a serious fintech, investing, or trading-led brand.
                </p>
              </div>

              <div className="mt-8 grid gap-3">
                {[
                  "Memorable action + finance naming",
                  "Strong .com trust signal",
                  "Clear fit for modern market products"
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-4 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/8 bg-slate-950/50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Purchase Contact
                </p>
                <a
                  href={inquiryHref}
                  className="mt-3 block font-[var(--font-display)] text-xl font-medium text-white transition hover:text-cyan-200"
                >
                  {contactEmail}
                </a>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Domain transfer can be handled securely through a reputable marketplace or escrow
                  process.
                </p>
              </div>
            </div>
          </aside>
        </section>

        <section
          id="why-this-domain-works"
          aria-labelledby="why-title"
          className="border-t border-white/8 py-20 sm:py-24"
        >
          <SectionHeading
            eyebrow="Why This Domain Works"
            title="A premium name with clarity, energy, and category fit."
            description="The best domain assets feel intuitive the first time you hear them. flipmystock.com combines movement, finance, and memorability in a format that still feels credible at company scale."
            titleId="why-title"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-3xl border border-white/8 bg-white/[0.035] p-7 shadow-[0_12px_40px_rgba(2,8,23,0.24)] backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.05]"
              >
                <h3 className="font-[var(--font-display)] text-xl font-medium text-white">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{reason.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="use-cases"
          aria-labelledby="use-cases-title"
          className="border-t border-white/8 py-20 sm:py-24"
        >
          <SectionHeading
            eyebrow="Ideal Use Cases"
            title="Illustrative brand-fit examples for the right operator."
            description="These are potential positioning directions only, not existing products or claims about current business operations."
            titleId="use-cases-title"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {useCases.map((useCase) => (
              <article
                key={useCase.title}
                className="group rounded-3xl border border-white/8 bg-slate-950/45 p-7 transition duration-200 hover:border-emerald-300/20 hover:bg-slate-950/65"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200/70">
                  Brand-fit example
                </p>
                <h3 className="mt-4 font-[var(--font-display)] text-xl font-medium text-white">
                  {useCase.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{useCase.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="brand-potential"
          aria-labelledby="brand-potential-title"
          className="border-t border-white/8 py-20 sm:py-24"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(12,18,38,0.88),rgba(6,10,24,0.96))] p-8 shadow-[0_16px_60px_rgba(2,8,23,0.36)] sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="Brand Potential"
              title="A name that feels active, modern, and market-aware."
              description="FlipMyStock combines action with financial context, giving the brand movement and category recognition without leaning on generic buzzwords. It feels direct enough for consumer products and credible enough for serious software or media."
              titleId="brand-potential-title"
            />

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {brandSignals.map((signal) => (
                <div
                  key={signal}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-8 text-center"
                >
                  <p className="font-[var(--font-display)] text-2xl font-medium tracking-tight text-white">
                    {signal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="acquisition"
          aria-labelledby="acquisition-title"
          className="border-t border-white/8 py-20 sm:py-24"
        >
          <div className="rounded-[2rem] border border-cyan-300/15 bg-cyan-300/[0.06] p-8 shadow-[0_16px_60px_rgba(8,47,73,0.24)] sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200/80">
              Acquisition
            </p>
            <h2
              id="acquisition-title"
              className="mt-4 font-[var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              This domain is available for acquisition.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Serious inquiries only. If you are evaluating flipmystock.com for a product launch,
              portfolio acquisition, or brand expansion, reach out directly to discuss terms.
            </p>

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={inquiryHref}
                className="inline-flex items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-white"
              >
                Inquire to Purchase
              </a>
              <a
                href={inquiryHref}
                className="text-lg font-medium text-white transition hover:text-cyan-100"
              >
                {contactEmail}
              </a>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-300">
              Domain transfer can be arranged securely through a reputable marketplace or escrow
              process.
            </p>
          </div>
        </section>

        <section
          id="secure-acquisition-options"
          aria-labelledby="secure-acquisition-options-title"
          className="border-t border-white/8 py-20 sm:py-24"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_16px_60px_rgba(2,8,23,0.28)] backdrop-blur sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="Transaction Structure"
              title="Secure Acquisition Options"
              description="For qualified buyers, transfer can be structured through established marketplace channels or a private agreement, depending on preference and deal terms."
              titleId="secure-acquisition-options-title"
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <article className="rounded-3xl border border-cyan-300/12 bg-slate-950/50 p-7 transition duration-200 hover:border-cyan-300/20 hover:bg-slate-950/65">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                  Marketplace Transfer Options
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="https://sedo.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:text-cyan-100"
                  >
                    Sedo
                  </a>
                  <a
                    href="https://dan.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:text-cyan-100"
                  >
                    Dan.com
                  </a>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-300">
                  Secure transfer and payment handling available through reputable domain
                  marketplaces including <span className="font-semibold text-white">Sedo</span> and{" "}
                  <span className="font-semibold text-white">Dan.com</span>.
                </p>
              </article>

              <article className="rounded-3xl border border-white/10 bg-slate-950/45 p-7 transition duration-200 hover:border-white/16 hover:bg-slate-950/60">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
                  Direct Agreement Option
                </p>
                <p className="mt-5 text-sm leading-7 text-slate-300">
                  For buyers who prefer a direct agreement, private arrangements can also be
                  discussed. Payment via PayPal is available upon mutual agreement. PayPal account
                  details will be shared once terms are finalized.
                </p>
                <p className="mt-5 text-sm leading-7 text-slate-400">
                  Marketplace-based transfer remains the primary path for buyers seeking a familiar,
                  structured closing process.
                </p>
              </article>
            </div>

            <p className="mt-8 border-t border-white/8 pt-6 text-sm leading-7 text-slate-400">
              Transfer can be completed securely through an agreed marketplace or structured
              private transaction.
            </p>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>flipmystock.com</p>
          <p>Available for acquisition</p>
          <a href={inquiryHref} className="transition hover:text-white">
            {contactEmail}
          </a>
        </div>
      </footer>
    </main>
  );
}
