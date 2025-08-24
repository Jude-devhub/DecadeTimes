import React from "react";
import NewsCard from "@/components/ui/NewsCard";
import SecondNewsCard from "@/components/ui/SecondNewsCard";

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



export default async function SportsPage() {
const today = new Date();
today.setDate(today.getDate() - 1); // subtract 1 day
const yesterday = today.toLocaleDateString("en-CA");

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=sports&from=${yesterday}&sortBy=popularity&apiKey=${apiKey}`
  ); //API for testing
  const data = (await response.json()) as ApiResponse;

  const articles = data.articles;

  return (
    <div
      className="bg-amber-100 p-2
     grid grid-cols-1 gap-2 
     md:grid md:grid-cols-2 md:gap-4
     lg:grid lg:grid-cols-3 lg:gap-4 
     "
    >
      {articles.map((article, index) => (
        <SecondNewsCard key={index} article={article} index={index} />
      ))}
    </div>
  );
}
