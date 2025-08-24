import React from "react";
import NewsCard from "@/components/ui/NewsCard";

const apiKey = process.env.NEWS_API_KEY;

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

interface ApiResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}



export default async function businessNews() {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=business&from=2025-08-01&sortBy=popularity&apiKey=${apiKey}`
  ); //API for testing
  const data : ApiResponse = await response.json();

  const articles = data.articles;

  return (
    <div
      className="p-2
     grid grid-cols-1 gap-2 
     md:grid md:grid-cols-2 md:gap-4
     lg:grid lg:grid-cols-3 lg:gap-4 
     "
    >
      {articles.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).map((article, index) => (
        <NewsCard key={index} article={article} index={index} />
        
      ))}
    </div>
  );
}
