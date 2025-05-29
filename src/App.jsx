import './App.css';
import Article from './pages/Article.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Article />} />
    </Routes>
  </Router>
  );
};

export default App;
