import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesComponent from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | IMMNAVEED Digital Growth Agency",
  description: "Explore our full suite of digital growth services including brand development, Meta ads, Google ads, Next.js web development, and startup consulting.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <ServicesComponent />
      </main>
      <Footer />
    </div>
  );
}
