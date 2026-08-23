export interface ReelItem {
  id: string;
  reelCode: string;
  title: string;
  category: "Corporate Video" | "Wedding & Events" | "Social Media Ad" | "Reels" | "Talking Head" | "Brand Commercial";
  thumbnail: string;
  instagramUrl: string;
  embedUrl: string;
  views?: string;
  description: string;
  tags: string[];
}

export const reelsData: ReelItem[] = [
  {
    id: "reel-1",
    reelCode: "Dbk4uoKRx9Z",
    title: "Behind the Scenes: Production & Cinematography",
    category: "Corporate Video",
    thumbnail: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/Dbk4uoKRx9Z/",
    embedUrl: "https://www.instagram.com/reel/Dbk4uoKRx9Z/embed",
    views: "Behind The Scenes",
    description: "BTS of multi-camera corporate shoot capturing cinematography, lighting setup, and executive production in action.",
    tags: ["Behind The Scenes", "4K Production", "On-Location"],
  },
  {
    id: "reel-2",
    reelCode: "DbtLjMjyfbb",
    title: "Luxury Wedding Cinematography & Pre-Wedding Shoots",
    category: "Wedding & Events",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/DbtLjMjyfbb/",
    embedUrl: "https://www.instagram.com/reel/DbtLjMjyfbb/embed",
    views: "Wedding Film",
    description: "Cinematic 4K wedding films, pre-wedding shoots, and aerial drone coverage produced by our in-house media team.",
    tags: ["Wedding Film", "In-House Crew", "Pre-Wedding"],
  },
  {
    id: "reel-3",
    reelCode: "Dak883LveMD",
    title: "Performance Marketing & Digital Services Promo",
    category: "Social Media Ad",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/Dak883LveMD/",
    embedUrl: "https://www.instagram.com/reel/Dak883LveMD/embed",
    views: "Marketing Services",
    description: "Full-funnel digital marketing services: Meta & Google Ads, bespoke graphic design, and automated lead generation.",
    tags: ["Digital Marketing", "Lead Gen", "Meta & Google Ads"],
  },
  {
    id: "reel-4",
    reelCode: "DZ4z4mvx5uv",
    title: "Cambridge Management: Corporate Brand Shoot",
    category: "Corporate Video",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/DZ4z4mvx5uv/",
    embedUrl: "https://www.instagram.com/reel/DZ4z4mvx5uv/embed",
    views: "Corporate Campaign",
    description: "Executive promotional brand shoot for Cambridge Management highlighting leadership authority and brand prestige.",
    tags: ["Corporate Shoot", "Brand Video", "Executive Series"],
  },
  {
    id: "reel-5",
    reelCode: "DZuSZWuxMO0",
    title: "Dynamic Social Media Engagement & Viral Reel Edit",
    category: "Reels",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/DZuSZWuxMO0/",
    embedUrl: "https://www.instagram.com/reel/DZuSZWuxMO0/embed",
    views: "Viral Reel",
    description: "High-retention vertical editing with kinetic typography, beat-synced cuts, and conversion hooks.",
    tags: ["Viral Reel", "Sound Design", "Kinetic Subtitles"],
  },
  {
    id: "reel-6",
    reelCode: "DEkXmgnSE-d",
    title: "Brand Talking Head & Founder Authority Interview",
    category: "Talking Head",
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/DEkXmgnSE-d/",
    embedUrl: "https://www.instagram.com/reel/DEkXmgnSE-d/embed",
    views: "Talking Head",
    description: "Studio-lit talking head interview format with crystal-clear audio, dynamic lower thirds, and executive framing.",
    tags: ["Talking Head", "Founder Authority", "Studio Audio"],
  },
  {
    id: "reel-7",
    reelCode: "DEkWmk9Sxfh",
    title: "Brand Promotional Video & Commercial Campaign",
    category: "Corporate Video",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/DEkWmk9Sxfh/",
    embedUrl: "https://www.instagram.com/reel/DEkWmk9Sxfh/embed",
    views: "Promo Commercial",
    description: "Full brand commercial shoot demonstrating business value proposition, operations, and service excellence.",
    tags: ["Promo Video", "Commercial Hero", "Brand Shoot"],
  },
  {
    id: "reel-8",
    reelCode: "DFASF25xNWU",
    title: "On-Location Commercial Brand Shoot & Production",
    category: "Brand Commercial",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/DFASF25xNWU/",
    embedUrl: "https://www.instagram.com/reel/DFASF25xNWU/embed",
    views: "Brand Shoot",
    description: "Multi-camera on-location cinema shoot capturing team execution, customer trust, and corporate grandeur.",
    tags: ["Brand Shoot", "Cinema Camera", "In-House Crew"],
  },
];
