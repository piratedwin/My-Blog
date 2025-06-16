import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, Folder, TrendingUp } from 'lucide-react';
import { useBlog } from '../context/BlogContext';

export function Sidebar() {
  const { categories, tags, posts } = useBlog();

  // Get recent posts (last 3)
  const recentPosts = posts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <aside className="space-y-8">
      {/* Recent Posts */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Recent Posts</h3>
        </div>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <article key={post.id} className="group">
              <Link
                to={`/post/${post.slug}`}
                className="block hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors duration-200"
              >
                <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 mb-1">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Folder className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
        </div>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/?category=${category.slug}`}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
            >
              <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                {category.name}
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Tag className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Popular Tags</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag.id}
              to={`/?tag=${tag.slug}`}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
            >
              {tag.name}
              <span className="ml-1 text-xs">({tag.count})</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-md p-6 text-white">
        <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
        <p className="text-blue-100 text-sm mb-4">
          Get the latest posts delivered right to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="w-full bg-white text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
}