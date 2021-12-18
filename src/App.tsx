import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardGrid from "./components/card-grid";
import NewsCard, { NewsInstance } from "./components/news-card";
import { ArticleContext } from "./context";
import "./styles.scss";
export default function App() {
  const [articles, setArticles] = useState<NewsInstance[]>([]);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get<NewsInstance[]>(
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/newsf6e2440.json"
        );
        setArticles(data.sort((a, b) => b.TIMESTAMP - a.TIMESTAMP));
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="App">
        <ArticleContext.Provider value={{articles,setArticles}}>
        
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<CardGrid articles= {articles} isLoading = {isLoading} setText={setText} text={text}/>} />
      <Route path=":ID" element={<NewsCard />} />
    </Routes>
  </BrowserRouter>
  </ArticleContext.Provider>
    </div>
  );
}
