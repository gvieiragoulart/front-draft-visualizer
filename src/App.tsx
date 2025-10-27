import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import LivePage from './pages/LivePage';
import UpcomingPage from './pages/UpcomingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/live" element={<LivePage />} />
            <Route path="/upcoming" element={<UpcomingPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
