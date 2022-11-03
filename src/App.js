import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react"

import Nav from './components/nav'
import AllArticles from './components/all-articles';
import Title from './components/title';
import AllTopics from './components/AllTopics';
import ArticlesByTopic from './components/ArticlesByTopic';
import FullArticle from './components/FullArticle';


function App() {

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrderBy] = useState("");
  const [sort_by, setSortBy] = useState("");

  const loggedInUser = "jessjelly";


  return (
    <BrowserRouter>
    <div className="App">
    <Title/>
    <Nav/>
    <Routes>

    <Route path="/" element={<AllArticles setArticles={setArticles} articles={articles} isLoading={isLoading} setIsLoading={setIsLoading} order={order} setOrderBy={setOrderBy}/>} />
    <Route path="/topics" element={<AllTopics />} />
    <Route path="/topics/:topic" element={<ArticlesByTopic setArticles={setArticles} articles={articles} isLoading={isLoading} setIsLoading={setIsLoading} order={order} setOrderBy={setOrderBy}/>} />
    <Route path="/articles/:article_id" element={<FullArticle loggedInUser={loggedInUser}/>} />
    </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
