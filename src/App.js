import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
