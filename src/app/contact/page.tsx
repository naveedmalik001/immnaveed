import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactComponent from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | IMMNAVEED Digital Growth Agency",
  description: "Get in touch with IMMNAVEED to discuss your brand strategy, performance marketing, or custom Next.js web development needs.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <ContactComponent />
      </main>
      <Footer />
    </div>
  );
}
