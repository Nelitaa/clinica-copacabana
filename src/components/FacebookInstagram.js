import PropTypes from 'prop-types';

const FacebookInstagram = (props) => {
  const { facebookIcon, instagramIcon } = props;

  return (
    <div className="facebook-instagram-container">
      <a className="contact-facebook" href="https://www.facebook.com/clinicacopacabana" target="_blank" rel="noreferrer">
        <img src={facebookIcon} alt="Icono de facebook" />
      </a>
      <hr />
      <a className="contact-instagram" href="https://www.instagram.com/clinicacopacabana/" target="_blank" rel="noreferrer">
        <img src={instagramIcon} alt="Icono de instagram" />
      </a>
    </div>
  );
};

export default FacebookInstagram;

FacebookInstagram.propTypes = {
  facebookIcon: PropTypes.string,
  instagramIcon: PropTypes.string,
};
