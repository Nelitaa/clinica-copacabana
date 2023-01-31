import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Installations from './pages/Installations';
import Services from './pages/Services';
import Queries from './pages/Queries';
import Maternity from './pages/Maternity';
import Specialties from './pages/Specialties';
import IntensiveCare from './pages/IntensiveCare';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/servicios" element={<Services />} />
        <Route path="/servicios/consultas" element={<Queries />} />
        <Route path="/servicios/maternidad" element={<Maternity />} />
        <Route path="/servicios/especialidades" element={<Specialties />} />
        <Route path="/servicios/cuidados-intensivos" element={<IntensiveCare />} />
        <Route path="/instalaciones" element={<Installations />} />
      </Routes>
    </div>
  );
}

export default App
