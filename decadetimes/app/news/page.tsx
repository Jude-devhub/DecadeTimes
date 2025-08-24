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



export default async function newsPage() {
const today = new Date();
today.setDate(today.getDate() - 7); // subtract 7 days
const lastWeek = today.toISOString().split("T")[0];

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=war&from=${lastWeek}&sortBy=popularity&apiKey=${apiKey}`
  ); //API for testing
  const data = (await response.json()) as ApiResponse;

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
