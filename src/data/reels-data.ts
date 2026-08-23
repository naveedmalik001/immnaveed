export interface ReelItem {
  id: string;
  reelCode: string;
  title: string;
  category: "Reels" | "Corporate Video" | "Brand Commercial" | "Talking Head" | "Wedding & Events";
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
    title: "Cinematic Visual Storytelling & Dynamic Transitions",
    category: "Reels",
    thumbnail: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/Dbk4uoKRx9Z/",
    embedUrl: "https://www.instagram.com/reel/Dbk4uoKRx9Z/embed",
    views: "Viral Reel",
    description: "High-energy editing with custom speed ramping, sound effects, and color-graded visual rhythm.",
    tags: ["Viral Edit", "Color Graded", "Kinetic Sound"],
  },
  {
    id: "reel-2",
    reelCode: "DbtLjMjyfbb",
    title: "High-Retention Lifestyle & Social Media Reel",
    category: "Reels",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/DbtLjMjyfbb/",
    embedUrl: "https://www.instagram.com/reel/DbtLjMjyfbb/embed",
    views: "Featured",
    description: "Engineered for maximum viewer retention with dynamic captions, pacing, and visual engagement hooks.",
    tags: ["Retention Hacks", "Dynamic Subtitles", "Reel Edit"],
  },
  {
    id: "reel-3",
    reelCode: "Dak883LveMD",
    title: "Creative Cinematic Story & Flow Edit",
    category: "Reels",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/Dak883LveMD/",
    embedUrl: "https://www.instagram.com/reel/Dak883LveMD/embed",
    views: "Trending",
    description: "Seamless transitions synced precisely with the musical tempo and emotional cadence.",
    tags: ["Beat Sync", "Transitions", "Audio Design"],
  },
  {
    id: "reel-4",
    reelCode: "DZ4z4mvx5uv",
    title: "Aesthetic Brand Showcase & Visual Polish",
    category: "Brand Commercial",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/DZ4z4mvx5uv/",
    embedUrl: "https://www.instagram.com/reel/DZ4z4mvx5uv/embed",
    views: "Client Favorite",
    description: "Premium visual pacing designed to highlight product details and elevate brand perception.",
    tags: ["Brand Polish", "4K Visuals", "Commerce Reel"],
  },
  {
    id: "reel-5",
    reelCode: "DZuSZWuxMO0",
    title: "Dynamic Social Media Engagement Reel",
    category: "Reels",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/DZuSZWuxMO0/",
    embedUrl: "https://www.instagram.com/reel/DZuSZWuxMO0/embed",
    views: "High Reach",
    description: "Captivating short-form video crafted for rapid algorithm pickup and audience interaction.",
    tags: ["Viral Reach", "Hook Optimization", "Reel Growth"],
  },
  {
    id: "reel-6",
    reelCode: "DEkXmgnSE-d",
    title: "Brand Talking Head & Authority Interview",
    category: "Talking Head",
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/DEkXmgnSE-d/",
    embedUrl: "https://www.instagram.com/reel/DEkXmgnSE-d/embed",
    views: "Brand Authority",
    description: "Professional talking head interview format with crisp studio audio, lower thirds, and executive framing.",
    tags: ["Talking Head", "Studio Audio", "Executive Authority"],
  },
  {
    id: "reel-7",
    reelCode: "DEkWmk9Sxfh",
    title: "Brand Promotional Video & Campaign Hero",
    category: "Corporate Video",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/DEkWmk9Sxfh/",
    embedUrl: "https://www.instagram.com/reel/DEkWmk9Sxfh/embed",
    views: "Commercial Hero",
    description: "Full promotional video shoot showcasing business value, service excellence, and team capabilities.",
    tags: ["Promo Video", "Campaign Hero", "Commercial Shoot"],
  },
  {
    id: "reel-8",
    reelCode: "DFASF25xNWU",
    title: "On-Location Brand Shoot & Production",
    category: "Brand Commercial",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/DFASF25xNWU/",
    embedUrl: "https://www.instagram.com/reel/DFASF25xNWU/embed",
    views: "Production Shoot",
    description: "On-location multi-camera cinema shoot capturing operational grandeur, team dynamics, and brand essence.",
    tags: ["Brand Shoot", "Cinema Camera", "In-House Crew"],
  },
];
