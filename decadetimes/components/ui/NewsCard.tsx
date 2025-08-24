"use client";
import Link from "next/link";
import React from "react";

interface NewsArticle {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

interface NewscardProps {
  article: NewsArticle;
  index: number;
}

const Newscard: React.FC<NewscardProps> = ({ article, index }) => {

  const publishedDate = new Date(article.publishedAt);
  const formattedDate = publishedDate.toISOString().split('T')[0];
  return (
    <div
      className={`card bg-base-100 w-fit shadow-sm md:w-fit lg:w-fit    
    ${++index % 2 === 0 ? "lg:col-span-2 lg:row-span-2 bg-white" : "bg-white"}`}
    >
      <Link href={`${article.url}`} target="_blank" rel="noopener noreferrer">
        <figure className="size-auto">
          <img src={article.urlToImage} alt="News Image" />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{article.title}</h2>
          <p>
            {article.description}...{" "}
            <span className="italic text-blue-500">Read more</span>
          </p>
          <p className="text-sm italic">Source: {article.source.name}</p>
          <p className="text-sm italic">Published at: {formattedDate}</p>
          <p className="text-sm italic">by {article.author ? article.author : "Unknown"}</p>
          
          
        </div>
      </Link>
    </div>
  );
};

export default Newscard;
