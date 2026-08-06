export interface Post {
  id: string;
  title: string;
  excerpt?: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  slug: string;
  stats: {
    likes: number;
    comments: number;
    zapsSats: number; // Quantidade de Satoshis recebidos via Zap
  };
}