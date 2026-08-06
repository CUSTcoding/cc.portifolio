
import { HeroSection } from '@/components/ui/HeroSectionBlog';
import { FoundersCorner } from '@/components/ui/FoundersCorner';
import { Post } from '@/types/index';

const featuredPosts: Post[] = [
  {
    id: 'f1',
    title: 'Enhancing Team Collaboration with SaaS Products: A Game-Changer for Modern Workflows',
    category: 'Category',
    date: 'Aug 10',
    readTime: '10 min read',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    slug: 'enhancing-team-collaboration',
    stats: { likes: 142, comments: 18, zapsSats: 2100 },
  },
  {
    id: 'f2',
    title: 'Building Decentralized Apps with Next.js and Lightning Network',
    category: 'Tech',
    date: 'Aug 12',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    slug: 'building-decentralized-apps',
    stats: { likes: 98, comments: 12, zapsSats: 5400 },
  },
];

const latestPosts: Post[] = [
  {
    id: 'l1',
    title: 'Creating an Intuitive User Interface (UI) for Your SaaS Product',
    category: 'Design',
    date: 'Aug 10',
    readTime: '10 min read',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&auto=format&fit=crop',
    slug: 'creating-intuitive-ui',
    stats: { likes: 45, comments: 5, zapsSats: 850 },
  },
  {
    id: 'l2',
    title: 'Tips for designing clear and user-friendly navigation menus.',
    category: 'UX',
    date: 'Aug 10',
    readTime: '10 min read',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop',
    slug: 'tips-designing-navigation',
    stats: { likes: 62, comments: 9, zapsSats: 1200 },
  },
  {
    id: 'l3',
    title: 'Exploring how to establish a visual hierarchy that guides users.',
    category: 'Design',
    date: 'Aug 10',
    readTime: '10 min read',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=400&auto=format&fit=crop',
    slug: 'visual-hierarchy',
    stats: { likes: 31, comments: 2, zapsSats: 400 },
  },
];

const foundersPosts: Post[] = [
  {
    id: 'c1',
    title: 'Our people make the difference',
    excerpt: 'We\'re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
    category: 'Category',
    date: 'Aug 10',
    readTime: '10 min read',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop',
    slug: 'our-people-make-the-difference-1',
    stats: { likes: 88, comments: 14, zapsSats: 1500 },
  },
  {
    id: 'c2',
    title: 'Our people make the difference',
    excerpt: 'We\'re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
    category: 'Category',
    date: 'Aug 10',
    readTime: '10 min read',
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop',
    slug: 'our-people-make-the-difference-2',
    stats: { likes: 112, comments: 23, zapsSats: 3400 },
  },
  {
    id: 'c3',
    title: 'Our people make the difference',
    excerpt: 'We\'re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
    category: 'Category',
    date: 'Aug 10',
    readTime: '10 min read',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop',
    slug: 'our-people-make-the-difference-3',
    stats: { likes: 54, comments: 8, zapsSats: 920 },
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#161615]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <HeroSection featuredPosts={featuredPosts} latestPosts={latestPosts} />
        <FoundersCorner posts={foundersPosts} />
      </div>
    </div>
  );
}