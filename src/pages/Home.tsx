import React from 'react';
import { BlogCard } from '../components/BlogCard';
import { Sidebar } from '../components/Sidebar';
import { useBlog } from '../context/BlogContext';
import { Star, TrendingUp } from 'lucide-react';

export function Home() {
  const { posts, featuredPosts } = useBlog();

  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to <span className="text-blue-600">ModernBlog</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover insights, tutorials, and best practices in web development, design, and technology. 
          Stay ahead with the latest trends and techniques.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <main className="lg:col-span-3">
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center space-x-2 mb-6">
                <Star className="w-6 h-6 text-yellow-500" />
                <h2 className="text-2xl font-bold text-gray-900">Featured Posts</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} featured />
                ))}
              </div>
            </section>
          )}

          {/* Latest Posts */}
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Latest Posts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regularPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-base font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200">
              Load More Posts
            </button>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}