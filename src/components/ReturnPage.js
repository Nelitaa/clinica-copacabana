import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrowRightLong from '../assets/icons/arrowRightLong.png';

const routes = {
  "/servicios/consultas": true,
  "/servicios/maternidad": true,
  "/servicios/especialidades": true,
  "/servicios/cuidados-intensivos": true,
  "/servicios/internacion": true,
  "/servicios/emergencias": true,
  "/servicios/estudios-diagnosticos": true,
  "/servicios/cuidado-y-prevencion": true,
};

const ReturnPage = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    if (routes[window.location.pathname]) {
      navigate('/servicios');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="return-container">
      <button type="button" onClick= { handleReturn }>
        <img src={arrowRightLong} alt="Fecha" />
        <p>Volver</p>
      </button>
    </div>
  );
}

export default ReturnPage;
