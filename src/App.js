import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/nav'
import AllArticles from './components/all-articles';
import Title from './components/title';
import FullArticle from './components/FullArticle';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Title/>
    <Nav/>
    <Routes>

    <Route path="/" element={<AllArticles />} />

    <Route path="/articles/:article_id" element={<FullArticle />} />
    </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
