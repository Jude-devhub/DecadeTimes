import React from "react";
import NewsCard from '@/components/ui/NewsCard';

const apiKey = process.env.NEWS_API_KEY;

interface propsDataType {
  source: {
    id: string,
    name: string
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}


export default async function businessNews () {
    const response = await fetch(`https://newsapi.org/v2/everything?q=Nigeria&from=2025-08-01&sortBy=popularity&apiKey=${apiKey}`); //API for testing
    const items = await response.json();
   
  return (
     <div className="bg-amber-100 p-2
     grid grid-cols-1 gap-2 
     md:grid md:grid-cols-2 md:gap-4
     lg:grid lg:grid-cols-3 lg:gap-4 
     ">  
      
      {items.articles.map((item: propsDataType) => (
        <NewsCard key={item.source.id} title={item.title} description={item.description} 
        source={item.source} urlToImage={item.urlToImage} url={item.url} publishedAt={item.publishedAt} author={item.author} />
      ))}
    </div>
  );
}