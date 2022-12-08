import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react"

import Nav from './components/nav'
import AllArticles from './components/all-articles';
import Title from './components/title';
import AllTopics from './components/AllTopics';
import ArticlesByTopic from './components/ArticlesByTopic';
import FullArticle from './components/FullArticle';
import HomeHeader from './components/HomeHeader';
import ErrorPage from './components/ErrorPage';
import BottomNav from './components/BottomNav';
import { ThemeProvider } from '@mui/material/styles';
import theme from './ThemeProvider.jsx'
import Profile from './components/Profile';

function App() {

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrderBy] = useState("");
  const [sort_by, setSortBy] = useState("");
  const [loggedInUser, setUser] = useState("jessjelly");


  return (
    <BrowserRouter>
    <div className="App">
    <ThemeProvider theme={theme}>
    <Nav loggedInUser={loggedInUser} />
    <Routes>
    <Route path="/articles" element={<AllArticles setArticles={setArticles} articles={articles} isLoading={isLoading} setIsLoading={setIsLoading} order={order} setOrderBy={setOrderBy}/>} />

    <Route path="/" element={<HomeHeader loggedInUser={loggedInUser} />} />
    <Route path="/topics" element={<AllTopics />} />
    <Route path="/topics/:topic" element={<ArticlesByTopic setArticles={setArticles} articles={articles} isLoading={isLoading} setIsLoading={setIsLoading} order={order} setOrderBy={setOrderBy}/>} />
    <Route path="/users/jessjelly" element={<Profile loggedInUser={loggedInUser}/>} />

    <Route path="/articles/:article_id" element={<FullArticle loggedInUser={loggedInUser}/>} />
    <Route path="*" element={ErrorPage} />
    </Routes>
<BottomNav/>
</ThemeProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;
