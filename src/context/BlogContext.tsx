import React, { createContext, useContext, useState, ReactNode } from 'react';
import { BlogPost, Category, Tag } from '../types/blog';
import { blogPosts, categories, tags } from '../data/blogPosts';

interface BlogContextType {
  posts: BlogPost[];
  categories: Category[];
  tags: Tag[];
  featuredPosts: BlogPost[];
  getPostBySlug: (slug: string) => BlogPost | undefined;
  getPostsByCategory: (category: string) => BlogPost[];
  getPostsByTag: (tag: string) => BlogPost[];
  searchPosts: (query: string) => BlogPost[];
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

interface BlogProviderProps {
  children: ReactNode;
}

export function BlogProvider({ children }: BlogProviderProps) {
  const [posts] = useState<BlogPost[]>(blogPosts);
  const [categoriesData] = useState<Category[]>(categories);
  const [tagsData] = useState<Tag[]>(tags);

  const featuredPosts = posts.filter(post => post.featured);

  const getPostBySlug = (slug: string): BlogPost | undefined => {
    return posts.find(post => post.slug === slug);
  };

  const getPostsByCategory = (category: string): BlogPost[] => {
    return posts.filter(post => 
      post.category.toLowerCase() === category.toLowerCase()
    );
  };

  const getPostsByTag = (tag: string): BlogPost[] => {
    return posts.filter(post => 
      post.tags.some(postTag => 
        postTag.toLowerCase() === tag.toLowerCase()
      )
    );
  };

  const searchPosts = (query: string): BlogPost[] => {
    const lowercaseQuery = query.toLowerCase();
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  };

  const value: BlogContextType = {
    posts,
    categories: categoriesData,
    tags: tagsData,
    featuredPosts,
    getPostBySlug,
    getPostsByCategory,
    getPostsByTag,
    searchPosts,
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
}