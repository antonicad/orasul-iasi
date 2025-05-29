import './App.css';
import Article from './pages/Article.jsx';
import { HashRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Article />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
