import React from "react";
import NewsCard from '@/components/ui/NewsCard';

interface propsDataType {
    id: string,
  title: string;
  body: string;
}


export default async function HomePage () {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts"); //API for testing
    const items = await response.json();
   
  return (
     <div className="bg-amber-100 p-2
     grid grid-cols-1 gap-2 
     md:grid md:grid-cols-2 md:gap-2
     lg:grid lg:grid-cols-3 lg:gap-2 
     ">  
      
      {items.map((item: propsDataType) => (
        <NewsCard key={item.id} title={item.title} body={item.body} id={item.id} />
      ))}
    </div>
  );
}


