"use client";
import Link from "next/link";
import React from "react";

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
const Newscard: React.FC<propsDataType> = ({title, description, source, urlToImage, publishedAt, url, author }) => {
  return (
    <div className="card bg-base-100 w-fit shadow-sm md:w-fit lg:w-fit ">
      
      <figure className="size-auto">
        <img
          src={urlToImage}
          alt="News Image"
        />
      </figure>
      
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description}
          <Link href={`/article/${source.id}`} className="">
            {" "}
            ...Read more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Newscard;
