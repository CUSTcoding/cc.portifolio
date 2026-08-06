import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types/index';
import { PostActions } from './PostActions';

interface FoundersCornerProps {
  posts: Post[];
}

export function FoundersCorner({ posts }: FoundersCornerProps) {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Founders corner</h3>
        <div className="flex space-x-2">
          <button className="w-8 h-8 rounded-full border border-gray-200 text-gray-400 hover:text-gray-900 flex items-center justify-center text-xs">
            ←
          </button>
          <button className="w-8 h-8 rounded-full border border-gray-200 text-gray-400 hover:text-gray-900 flex items-center justify-center text-xs">
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-50/50 border border-gray-100 rounded-3xl p-4 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="relative h-44 rounded-2xl overflow-hidden mb-4 bg-gray-200">
                <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
              </div>
              <div className="mb-2">
                <span className="text-[10px] font-semibold text-[#934427] uppercase tracking-wider">
                  ● {post.category}
                </span>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h4 className="text-base font-bold text-gray-900 leading-snug mb-2 hover:underline">
                  {post.title}
                </h4>
              </Link>
              <p className="text-xs text-gray-500 line-clamp-3 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div>
              <p className="text-[10px] text-gray-400 mb-3">
                {post.date} • {post.readTime}
              </p>
              <PostActions
                initialLikes={post.stats.likes}
                initialComments={post.stats.comments}
                initialZaps={post.stats.zapsSats}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Paginação inferior */}
      <div className="flex items-center justify-center space-x-2 mt-10 text-xs font-semibold text-gray-400">
        <button className="w-6 h-6 flex items-center justify-center">←</button>
        <button className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center">1</button>
        <button className="w-6 h-6 hover:text-gray-900 flex items-center justify-center">2</button>
        <button className="w-6 h-6 hover:text-gray-900 flex items-center justify-center">3</button>
        <button className="w-6 h-6 hover:text-gray-900 flex items-center justify-center">4</button>
        <button className="w-6 h-6 hover:text-gray-900 flex items-center justify-center">5</button>
        <button className="w-6 h-6 flex items-center justify-center">→</button>
      </div>
    </section>
  );
}