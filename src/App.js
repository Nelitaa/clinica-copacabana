import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Installations from './pages/Installations';
import Services from './pages/Services';
import Queries from './pages/Queries';
import Maternity from './pages/Maternity';
import Specialties from './pages/Specialties';
import IntensiveCare from './pages/IntensiveCare';
import Internment from './pages/Internment';
import Emergencies from './pages/Emergencies';
import DiagnosticStudies from './pages/DiagnosticStudies';
import CareAndPrevention from './pages/CareAndPrevention';
import Contact from './pages/Contact';
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
        <Route path="/servicios/internacion" element={<Internment />} />
        <Route path="/servicios/emergencias" element={<Emergencies />} />
        <Route path="/servicios/estudios-diagnosticos" element={<DiagnosticStudies />} />
        <Route path="/servicios/cuidado-y-prevencion" element={<CareAndPrevention />} />
        <Route path="/instalaciones" element={<Installations />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App
