export interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishDate: Date;
  category: string;
  tags: string[];
  imageUrl: string;
  readTime: number;
  featured: boolean;
  slug: string;
  likes?: number;
  comments?: number;
}
