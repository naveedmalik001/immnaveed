import { getServiceBySlug, servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static routes for all services
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
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-8 uppercase tracking-widest">
            <Link href="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-orange">{service.category}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 sm:mb-24">
            {/* Left: Text Content */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-black leading-[1.1] tracking-tight mb-6">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-neutral-500 leading-relaxed mb-8">
                {service.content}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white font-bold text-sm px-6 py-4 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200 group"
                >
                  Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: Humanized Hero Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-neutral-200/50">
              {/* Fallback to simple img tag since we are passing local public paths and want to avoid next/image strict config errors if any */}
              <img 
                src={service.heroImage} 
                alt={service.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Features & Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 border-t border-neutral-100 pt-16 sm:pt-24">
            
            {/* Features */}
            <div>
              <h3 className="text-2xl font-black text-brand-black mb-6">What's Included</h3>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 bg-brand-gray p-4 rounded-xl border border-neutral-100">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-brand-black">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-black text-brand-black mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 bg-brand-gray p-4 rounded-xl border border-neutral-100">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                    <span className="text-sm font-medium text-brand-black">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
