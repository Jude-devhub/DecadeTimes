import React from "react";

interface NewsArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

interface NewsCardProps {
  article: NewsArticle;
  index: number;
}

export default function SecondNewsCard({ article, index }: NewsCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">
          {index + 1}. {article.title}
        </h2>
        <p className="text-sm text-gray-700 mb-2">{article.description}</p>
        <p className="text-xs text-gray-500 mb-2">
          {new Date(article.publishedAt).toLocaleString()}
        </p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
