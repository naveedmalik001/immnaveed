import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutComponent from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | IMMNAVEED Digital Growth Agency",
  description: "Learn about IMMNAVEED, India's premier digital growth agency specializing in brand strategy, performance marketing, and Next.js development.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <AboutComponent />
      </main>
      <Footer />
    </div>
  );
}
