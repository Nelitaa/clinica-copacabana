import propTypes from 'prop-types';

const WhatsappButton = ({ whatsappButton }) => {
  return (
    <a href='https://wa.me/59179959570' target='_blank' rel='noreferrer'>
      <img className='contact_button' src={whatsappButton} alt='Botón de contacto' />
    </a>
  );
};

export default WhatsappButton;

WhatsappButton.propTypes = {
  whatsappButton: propTypes.string.isRequired,
};
