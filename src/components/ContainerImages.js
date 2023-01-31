import React from 'react';
import PropTypes from 'prop-types';
import arrowLeft from '../assets/icons/arrowLeft.png';
import arrowRight from '../assets/icons/arrowRight.png';

const ContainerImages = ({ photo }) => {
  return (
    <div className="images-container">
      <img src={arrowLeft} alt="Fecha" />
      <img className="photos" src={photo} alt="Fotos de la Clínica Copacabana" />
      <img src={arrowRight} alt="Fecha" />
    </div>
  );
};

export default ContainerImages;

ContainerImages.propTypes = {
  photo: PropTypes.string.isRequired,
};
