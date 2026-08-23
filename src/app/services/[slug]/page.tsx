import { getServiceBySlug, servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import BookingWidget from "@/components/sections/BookingWidget";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static routes for all 7 services
export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Generate SSR SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      images: [service.heroImage],
      type: "article",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white text-[#0F172A] min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-[100px] pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-8 uppercase tracking-widest">
            <Link href="/" className="hover:text-[#0E8A94] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#0E8A94] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#0E8A94]">{service.category}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
            {/* Left: Text Content */}
            <div>
              <div className="mb-4">
                <span className="badge-teal text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8C4] animate-pulse" />
                  {service.category}
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] leading-[1.08] tracking-tight mb-6">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
                {service.content}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3.5">
                <Link
                  href="/contact"
                  className="btn-orange flex items-center justify-center gap-2 text-sm font-bold"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919018636473"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp flex items-center justify-center text-sm font-bold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
              <img 
                src={service.heroImage} 
                alt={service.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Features & Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 border-t border-slate-200 pt-14 mb-16">
            
            {/* Features */}
            <div className="card-white p-7 sm:p-8 bg-white border border-slate-200">
              <h3 className="font-display text-xl font-extrabold text-[#0F172A] mb-6">What&apos;s Included in Deliverables</h3>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#0E8A94] flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-[#0F172A]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="card-white p-7 sm:p-8 bg-white border border-slate-200">
              <h3 className="font-display text-xl font-extrabold text-[#0F172A] mb-6">Key Business Benefits</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-200">
                    <div className="w-2 h-2 rounded-full bg-[#14B8C4] mt-1.5 flex-shrink-0" />
                    <span className="text-xs font-semibold text-[#0F172A]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Lead Booking */}
        <BookingWidget />
      </main>

      <Footer />
    </div>
  );
}
