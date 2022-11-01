import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react"

import Nav from './components/nav'
import AllArticles from './components/all-articles';
import Title from './components/title';
import AllTopics from './components/AllTopics';
import ArticlesByTopic from './components/ArticlesByTopic';


function App() {

  const [articles, setArticles] = useState([]);


  return (
    <BrowserRouter>
    <div className="App">
    <Title/>
    <Nav/>
    <Routes>

    <Route path="/" element={<AllArticles setArticles={setArticles} articles={articles}/>} />
    <Route path="/topics" element={<AllTopics />} />
    <Route path="/topics/:topic" element={<ArticlesByTopic setArticles={setArticles} articles={articles}/>} />
    </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
