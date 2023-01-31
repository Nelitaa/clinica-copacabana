import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Installations from './pages/Installations';
import Services from './pages/Services';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/servicios" element={<Services />} />
        <Route path="/instalaciones" element={<Installations />} />
      </Routes>
    </div>
  );
}

export default App
