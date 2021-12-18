import React from "react";
import NewsCard, { NewsInstance } from "../news-card";
import "./CardGrid.style.scss";

const CardGrid: React.FC<{ text: string,setText:(text:string)=>void,articles:NewsInstance[],isLoading:boolean }> = ({text,setText,isLoading,articles}) => {


 

 

  const filtered = articles.filter(
    (article) =>
      article.TITLE.includes(text) ||
      article.PUBLISHER.includes(text) ||
      article.HOSTNAME.includes(text)
  )
  return (
    <>
    <input
        placeholder="Start typing to search for articles"
        onChange={(e) => setText(e.target.value)}
        className="input"
      ></input>
    <div className="grid">
      { isLoading ? <p>Loading...</p> : filtered.map((article) => (
        <NewsCard key={article.ID} article={article} />
      ))}
    </div>
    </>
  );
};

export default CardGrid;
