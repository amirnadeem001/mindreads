export type BlogCategory =
  | "Mental Health"
  | "Anxiety"
  | "Relationships"
  | "Mindfulness"
  | "Self Growth";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  readTime: string;
  createdAt: string;
  updatedAt: string;
};

export type BlogInput = {
  title: string;
  category: BlogCategory;
  excerpt: string;
  content: string;
  image: string;
  author?: string;
  readTime?: string;
};
