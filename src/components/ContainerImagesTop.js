import PropTypes from 'prop-types';
import arrowLeft from '../assets/icons/arrowLeft.png';
import arrowRight from '../assets/icons/arrowRight.png';

const ContainerImagesTop = (props) => {
  const { title, photo } = props;

  return (
    <div>
      <img className={title === 'Instalaciones' ? '' : 'hide'} src={arrowLeft} alt="Fecha" />
      <img className="photos" src={photo} alt={`Fotos de ${title}`} />
      <img className={title === 'Instalaciones' ? '' : 'hide'} src={arrowRight} alt="Fecha" />
    </div>
  );
};

export default ContainerImagesTop;

ContainerImagesTop.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
