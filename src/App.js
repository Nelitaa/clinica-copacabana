import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Instalaciones from './pages/Instalaciones';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/instalaciones" element={<Instalaciones />} />
      </Routes>
    </div>
  );
}

export default App
