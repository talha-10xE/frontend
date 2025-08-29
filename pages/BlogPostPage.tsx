
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center">
        <h1 className="text-4xl font-bold">Post not found!</h1>
        <Link to="/blog" className="text-blue-500 hover:underline mt-4 inline-block">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">{post.title}</h1>
        <p className="mt-2 text-lg text-gray-500">{post.excerpt}</p>
      </header>
      
      <div className="prose prose-lg max-w-none text-gray-800" dangerouslySetInnerHTML={{ __html: post.content }} />

      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {post.images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} className="rounded-lg shadow-md w-full object-cover" />
        ))}
      </div>

      <footer className="mt-10 border-t pt-6 text-center">
        <Link to="/blog" className="text-gray-600 hover:text-gray-900 font-bold transition-colors">
          &larr; Back to all posts
        </Link>
      </footer>
    </article>
  );
};

export default BlogPostPage;
