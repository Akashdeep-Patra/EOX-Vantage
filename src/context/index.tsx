import { createContext } from "react";
import { NewsInstance } from "../components/news-card";

export const ArticleContext = createContext<{
  articles: NewsInstance[];
  setArticles: (articles: NewsInstance[]) => void;
}>({
  articles: [],
  setArticles: () => {}
});
