'use client';

import { useState } from 'react';

interface PostActionsProps {
  initialLikes: number;
  initialComments: number;
  initialZaps: number;
}

export function PostActions({ initialLikes, initialComments, initialZaps }: PostActionsProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [zaps, setZaps] = useState(initialZaps);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(!isLiked);
  };

  const handleZap = (e: React.MouseEvent) => {
    e.preventDefault();
    setZaps((prev) => prev + 21);
  };

  return (
    <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-500 font-medium">
      {/* Botão de Reação / Curtida */}
      <button
        onClick={handleLike}
        className={`flex items-center space-x-1.5 hover:text-red-500 transition-colors ${
          isLiked ? 'text-red-500 font-semibold' : ''
        }`}
      >
        <span>{isLiked ? '❤️' : '🤍'}</span>
        <span>{likes}</span>
      </button>

      {/* Botão de Comentários */}
      <div className="flex items-center space-x-1.5 hover:text-gray-800 transition-colors cursor-pointer">
        <span>💬</span>
        <span>{initialComments}</span>
      </div>

      {/* Botão de Zaps (Satoshis) */}
      <button
        onClick={handleZap}
        title="Enviar Zap (Satoshis)"
        className="flex items-center space-x-1 bg-amber-50 text-amber-700 hover:bg-amber-100 px-2 py-1 rounded-full border border-amber-200/60 transition-colors"
      >
        <span>⚡</span>
        <span className="font-bold">{zaps.toLocaleString()} sats</span>
      </button>
    </div>
  );
}