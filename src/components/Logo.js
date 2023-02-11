import PropTypes from 'prop-types';

const Logo = ({ logo }) => {
  return (
      <img className="contact-logo" src={logo} alt="Logo" />
  );
}

export default Logo;

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
};
