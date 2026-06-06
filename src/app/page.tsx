import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-black antialiased selection:bg-brand-orange selection:text-white">
      {/* Sticky top navigation header */}
      <Navbar />

      {/* Main Page Layout Container */}
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        
        {/* Simple CTA linking to the dedicated contact page */}
        <section className="py-24 bg-brand-black text-center px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">Ready to scale your business?</h2>
          <p className="text-neutral-400 max-w-lg mx-auto mb-10">
            Let's build a dedicated growth pipeline with performance marketing and custom web solutions tailored for you.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-900/30"
          >
            Get In Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      {/* Structured professional corporate footer */}
      <Footer />
    </div>
  );
}
