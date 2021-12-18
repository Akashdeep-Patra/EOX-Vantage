import React, { useContext } from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleContext } from "../../context";
import "./NewsCard.style.scss";

export interface NewsInstance {
  ID: string;
  TITLE: string;
  URL: string;
  PUBLISHER: string;
  CATEGORY: string;
  HOSTNAME: string;
  TIMESTAMP: number;
}
const NewsCard: React.FC<{ article?: NewsInstance }> = ({ article }) => {
  const { articles } = useContext(ArticleContext);
  const params = useParams();
  const navigate = useNavigate()
  const data = article ? article : articles.find((art) => art.ID.toString() === params.ID?.toString());
  return (
    <>
      {data && (
        <button
          key={data.ID}
          onClick={() => {
           navigate(`/${data.ID}`)
          }}
          className="card_container"
        >
          <h1 className="title">{data.TITLE}</h1>
          <h2 className="publisher">Publisher : {data.PUBLISHER}</h2>
          <h3 className="hostname">Host : {data.HOSTNAME}</h3>
          <span className="category">Category : {data.CATEGORY}</span>
          <span className="time">
            Date : {new Date(data.TIMESTAMP).toLocaleDateString("en-US")}
          </span>
        </button>
      )}
    </>
  );
};

export default NewsCard;
