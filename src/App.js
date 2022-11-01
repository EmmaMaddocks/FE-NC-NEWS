import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/nav'
import AllArticles from './components/all-articles';
import Title from './components/title';
import AllTopics from './components/AllTopics';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Title/>
    <Nav/>
    <Routes>

    <Route path="/" element={<AllArticles />} />
    <Route path="/topics" element={<AllTopics />} />
    </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
