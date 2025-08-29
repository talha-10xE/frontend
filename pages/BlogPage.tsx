
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { BlogPost } from '../types';

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img className="w-full h-48 object-cover" src={post.images[0].src} alt={post.images[0].alt} />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="inline-block bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
};

const BlogPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Cats vs Dogs Blog</h1>
        <p className="mt-2 text-lg text-gray-600">Fun Pet Battles, Debates, and More</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
