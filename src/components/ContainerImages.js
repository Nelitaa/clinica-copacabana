import React from 'react';
import PropTypes from 'prop-types';
import arrowLeft from '../assets/icons/arrowLeft.png';
import arrowRight from '../assets/icons/arrowRight.png';

const ContainerImages = (props) => {
  const { title, photo, icon } = props;

  return (
    <div className="images-container">
      <div>
        <img className={title === 'Instalaciones' ? '' : 'hide'} src={arrowLeft} alt="Fecha" />
        <img className="photos" src={photo} alt="Fotos de la Clínica Copacabana" />
        <img className={title === 'Instalaciones' ? '' : 'hide'} src={arrowRight} alt="Fecha" />
      </div>
      <img className={title === 'Planes y Medicina Preventiva' ? 'whatsapp-button' : 'hide'} src={icon} alt="Icono" />
    </div>
  );
};

export default ContainerImages;

ContainerImages.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
