export default function FinalCTA() {
    return (
          <section className="relative overflow-hidden py-24">
                <div
                          aria-hidden="true"
                          className="absolute left-1/2 top-1/2 -z-10 h-96 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
                        />
                <div className="mx-auto max-w-2xl px-6 text-center">
                        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                  Start creating professional AI content today
                        </h2>
                        <p className="mt-4 text-lg text-muted">
                                  Grab the free AI Creator Starter Kit. No email, no signup, one
                                  click to download.
                        </p>
                        <div className="mt-8">
                                  <a
                                                href="/starter-kit.pdf"
                                                download
                                                className="inline-block rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
                                              >
                                              Download Free Starter Kit
                                  </a>
                        </div>
                </div>
          </section>
        );
}
