import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-black antialiased selection:bg-brand-orange selection:text-white">
      {/* Sticky top navigation header */}
      <Navbar />

      {/* Main Page Layout Container */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Contact />
      </main>

      {/* Structured professional corporate footer */}
      <Footer />
    </div>
  );
}
