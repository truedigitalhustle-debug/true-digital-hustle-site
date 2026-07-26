import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import WhatYoullGet from "@/components/WhatYoullGet";
import WhyItWorks from "@/components/WhyItWorks";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
    <Header />
    <main className="flex-1">
    <Hero />
    <SocialProof />
    <WhatYoullGet />
    <WhyItWorks />
    <FAQ />
    <FinalCTA />
    </main>
    <Footer />
    </div>
    );
}
</div>
