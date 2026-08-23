import { getServiceBySlug, servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight, Phone, MessageSquare, HelpCircle, ShieldCheck, Sparkles, Layers, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import BookingWidget from "@/components/sections/BookingWidget";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static routes for all 9 services for SSR & SSG pre-rendering
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

  const canonicalUrl = `https://www.immnaveed.in/services/${service.slug}`;

  return {
    title: `${service.seoTitle} | Er. Naveed Malik`,
    description: service.seoDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.title} | IMMNAVEED`,
      description: service.seoDescription,
      url: canonicalUrl,
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | IMMNAVEED`,
      description: service.seoDescription,
      images: [service.heroImage],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Schema.org Structured Data for Service & Breadcrumbs
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.immnaveed.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.immnaveed.in/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": `https://www.immnaveed.in/services/${service.slug}`
          }
        ]
      },
      {
        "@type": "Service",
        "@id": `https://www.immnaveed.in/services/${service.slug}#service`,
        "name": service.title,
        "serviceType": service.category,
        "description": service.shortDescription,
        "provider": {
          "@type": "Organization",
          "name": "IMMNAVEED",
          "url": "https://www.immnaveed.in"
        },
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${service.title} Inclusions`,
          "itemListElement": service.features.map((f) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": f
            }
          }))
        }
      }
    ]
  };

  // Other related services
  const otherServices = servicesData.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="bg-white text-[#0F172A] min-h-screen flex flex-col font-sans">
      {/* Dynamic Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Navbar />

      <main className="flex-grow pt-[90px] pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumb Bar */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-slate-400 my-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#0E8A94] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#0E8A94] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#0E8A94] truncate">{service.category}</span>
          </nav>

          {/* Hero Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 sm:mb-20">
            {/* Left: Text Content */}
            <div className="lg:col-span-7">
              <div className="mb-4">
                <span className="badge-teal text-xs py-1 px-3">
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
                  className="btn-orange flex items-center justify-center gap-2 text-sm font-bold shadow-md"
                >
                  <span>Inquire for {service.category}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`https://wa.me/919018636473?text=${encodeURIComponent(`Hello Er. Naveed Malik, I would like to inquire about ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp flex items-center justify-center text-sm font-bold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Consultation</span>
                </a>
              </div>
            </div>

            {/* Right: Hero Image Container */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
              <img 
                src={service.heroImage} 
                alt={service.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#041E42]/90 backdrop-blur-md border border-slate-700/80 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#14B8C4]">Direct Team Execution</p>
                  <p className="text-[11px] text-slate-300">100% In-House Delivery</p>
                </div>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
          </div>

          {/* Features & Benefits Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Features Deliverables */}
            <div className="card-white p-7 sm:p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#14B8C4]/15 text-[#0E8A94] flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-[#0F172A]">Deliverables &amp; Inclusions</h2>
                  <p className="text-xs text-slate-400">Everything provided under this service</p>
                </div>
              </div>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 bg-[#F8FAFC] p-3.5 rounded-2xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#0E8A94] flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-[#0F172A]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Benefits */}
            <div className="card-white p-7 sm:p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#F7931E]/15 text-[#F7931E] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-[#0F172A]">Key Commercial ROI</h2>
                  <p className="text-xs text-slate-400">Why this drives bottom-line growth</p>
                </div>
              </div>

              <ul className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 bg-[#F8FAFC] p-3.5 rounded-2xl border border-slate-200">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#14B8C4] mt-1.5 flex-shrink-0" />
                    <span className="text-xs font-semibold text-[#0F172A]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Related Other Services Switcher */}
          <div className="pt-10 border-t border-slate-200 mb-16">
            <h3 className="font-display text-xl font-bold text-[#0F172A] mb-6">
              Explore Related Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherServices.map((other) => (
                <Link
                  key={other.id}
                  href={`/services/${other.slug}`}
                  className="card-white p-5 group flex flex-col justify-between border border-slate-200 hover:border-[#14B8C4] transition-colors rounded-2xl"
                >
                  <div>
                    <span className="badge-teal text-[9px] py-0.5 px-2 mb-2 inline-block">
                      {other.category}
                    </span>
                    <h4 className="font-display text-sm font-bold text-[#0F172A] group-hover:text-[#0E8A94] transition-colors line-clamp-1 mb-1">
                      {other.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-2 font-normal">
                      {other.shortDescription}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0E8A94] uppercase tracking-wider mt-4">
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Lead Capture Booking Component */}
        <BookingWidget />
      </main>

      <Footer />
    </div>
  );
}
