import PropTypes from 'prop-types';

const ContainerImagesBottom = ({iconContact}) => {
  return (
    <button className="icon-contact" type="button">
      <a href="https://wa.me/59179959570" target="_blank" rel="noreferrer">
        <img src={iconContact} alt="Botón de contacto" />
      </a>
    </button>
  );
};

export default ContainerImagesBottom;

ContainerImagesBottom.propTypes = {
  iconContact: PropTypes.string.isRequired,
};
