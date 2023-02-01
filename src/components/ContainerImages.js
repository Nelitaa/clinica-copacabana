import React from 'react';
import PropTypes from 'prop-types';
import arrowLeft from '../assets/icons/arrowLeft.png';
import arrowRight from '../assets/icons/arrowRight.png';

const ContainerImages = (props) => {
  const { title, photo } = props;

  return (
    <div className="images-container">
      <img className={title === 'Instalaciones' ? '' : 'hide'} src={arrowLeft} alt="Fecha" />
      <img className="photos" src={photo} alt="Fotos de la Clínica Copacabana" />
      <img className={title === 'Instalaciones' ? '' : 'hide'} src={arrowRight} alt="Fecha" />
      
    </div>
  );
};

export default ContainerImages;

ContainerImages.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
