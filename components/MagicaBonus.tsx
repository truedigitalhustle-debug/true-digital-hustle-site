export default function MagicaBonus() {
    return (
          <section className="py-24">
            <div className="mx-auto max-w-4xl px-6">
              <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-card via-card to-accent/10 p-10 sm:p-14">
                <div
                  aria-hidden="true"
                  className="absolute right-[-4rem] top-[-4rem] h-56 w-56 rounded-full bg-accent-2/20 blur-[100px]"
                />

                <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent-2">
                  Exclusive Bonus
          </span>

                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Exclusive Magica Bonus
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            I personally use Magica for AI video creation. Sign up through my
            referral link and redeem my promo code to receive 10 million
                  bonus credits, subject to Magica&apos;s current referral program.
                </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3 rounded-xl border border-border bg-background/40 px-5 py-3">
              <span className="text-xs font-medium uppercase tracking-wider text-muted">
                      Promo Code
              </span>
                    <span className="font-mono text-base font-semibold text-foreground">
                      GG4VFJF
                    </span>
                  </div>

                  <a
                    href="https://try.magica.com/mack"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] sm:w-auto"
                  >
                    Try Magica + Get 10M Credits
            </a>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-muted">
            Affiliate disclosure: I may earn a commission if you sign up
            through my referral link, at no additional cost to you.
                </p>
              </div>
            </div>
          </section>
        );
}
