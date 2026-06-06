import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioComponent from "@/components/Portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio & Proven Results | IMMNAVEED",
  description: "Explore our portfolio of successful brand developments, high-converting performance marketing campaigns, and fast Next.js websites.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <PortfolioComponent />
      </main>
      <Footer />
    </div>
  );
}
