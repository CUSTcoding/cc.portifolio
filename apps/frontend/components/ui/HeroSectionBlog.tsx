'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types/index';
import { PostActions } from './PostActions';

interface HeroSectionProps {
  featuredPosts: Post[];
  latestPosts: Post[];
}

export function HeroSection({ featuredPosts, latestPosts }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentPost = featuredPosts[currentIndex];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
      {/* Carrossel Principal Grande (8 colunas) */}
      <div className="lg:col-span-8 relative rounded-3xl overflow-hidden h-[460px] flex flex-col justify-end group shadow-sm border border-gray-100">
        <Image
          src={currentPost.imageUrl}
          alt={currentPost.title}
          fill
          priority
          className="object-cover transition-all duration-700"
        />

        {/* Card em Vidro Jateado (Blur) na parte inferior */}
        <div className="relative z-10 m-4 p-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 text-white shadow-lg">
          <span className="inline-block bg-white text-gray-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            ● {currentPost.category}
          </span>
          <Link href={`/blog/${currentPost.slug}`}>
            <h2 className="text-xl md:text-2xl font-semibold leading-snug mb-2 hover:underline">
              {currentPost.title}
            </h2>
          </Link>
          <p className="text-xs text-white/80 mb-4">
            {currentPost.date} • {currentPost.readTime}
          </p>

          <PostActions
            initialLikes={currentPost.stats.likes}
            initialComments={currentPost.stats.comments}
            initialZaps={currentPost.stats.zapsSats}
          />
        </div>

        {/* Botões do Carrossel */}
        {featuredPosts.length > 1 && (
          <div className="absolute top-4 right-4 z-20 flex space-x-2">
            <button
              onClick={prevSlide}
              className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-all"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-all"
            >
              ›
            </button>
          </div>
        )}
      </div>

      {/* Sidebar: Latest Post (4 colunas) */}
      <div className="lg:col-span-4 flex flex-col justify-between">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Latest post</h3>
        <div className="space-y-4">
          {latestPosts.map((post) => (
            <div key={post.id} className="flex gap-4 items-start pb-3 border-b border-gray-100 last:border-0">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                <Image src={post.imageUrl} alt={post.title} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <Link href={`/blog/${post.slug}`}>
                  <h4 className="text-xs font-semibold text-gray-900 leading-snug line-clamp-2 hover:text-gray-600 transition-colors">
                    {post.title}
                  </h4>
                </Link>
                <p className="text-[10px] text-gray-400 mt-1 mb-2">
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
      </div>
    </div>
  );
}