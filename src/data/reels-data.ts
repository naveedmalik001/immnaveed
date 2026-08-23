export interface ReelItem {
  id: string;
  title: string;
  category: "Reels" | "Corporate Video" | "Wedding & Events" | "Social Media Ad";
  thumbnail: string;
  instagramUrl: string;
  embedUrl?: string;
  views?: string;
  description: string;
  tags: string[];
}

export const reelsData: ReelItem[] = [
  {
    id: "reel-1",
    title: "Corporate Brand Film & Cinematic B-Roll",
    category: "Corporate Video",
    thumbnail: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/C321sample1/",
    embedUrl: "https://www.instagram.com/reel/C321sample1/embed",
    views: "48.5K Views",
    description: "High-end corporate shoot showcasing executive workspaces, drone perspectives, and seamless sound design.",
    tags: ["4K Production", "Corporate", "Color Graded"],
  },
  {
    id: "reel-2",
    title: "Viral Lifestyle & Product Reel Edit",
    category: "Reels",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/C321sample2/",
    embedUrl: "https://www.instagram.com/reel/C321sample2/embed",
    views: "124K Views",
    description: "Fast-paced vertical reel engineered for maximum viewer retention, sound effects, and kinetic subtitles.",
    tags: ["Viral Reel", "Sound Design", "Motion Graphics"],
  },
  {
    id: "reel-3",
    title: "Luxury Cinematic Wedding Film",
    category: "Wedding & Events",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/C321sample3/",
    embedUrl: "https://www.instagram.com/reel/C321sample3/embed",
    views: "89.2K Views",
    description: "Produced entirely by our in-house production team — romantic lighting, emotional storytelling, and 4K aerial shots.",
    tags: ["In-House Production", "Wedding Film", "Drone 4K"],
  },
  {
    id: "reel-4",
    title: "High-ROAS Meta & Google Video Ad",
    category: "Social Media Ad",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/C321sample4/",
    embedUrl: "https://www.instagram.com/reel/C321sample4/embed",
    views: "64.1K Views",
    description: "Conversion-optimized performance video ad designed with 3-second hook variations and clear CTA triggers.",
    tags: ["Meta Ad", "Direct Response", "High ROAS"],
  },
  {
    id: "reel-5",
    title: "Event Aftermovie & Concert Highlights",
    category: "Wedding & Events",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/C321sample5/",
    embedUrl: "https://www.instagram.com/reel/C321sample5/embed",
    views: "52.8K Views",
    description: "Dynamic multi-camera coverage with beat-synced transitions and atmospheric lighting capture.",
    tags: ["Event Shoot", "Multi-Cam", "Beat Synced"],
  },
  {
    id: "reel-6",
    title: "Founder Interview & Masterclass Series",
    category: "Corporate Video",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/reel/C321sample6/",
    embedUrl: "https://www.instagram.com/reel/C321sample6/embed",
    views: "37.4K Views",
    description: "Studio lit 2-camera interview with crystal-clear audio recording, lower thirds, and executive branding.",
    tags: ["Studio Setup", "Audio Mastered", "Executive Series"],
  },
];
