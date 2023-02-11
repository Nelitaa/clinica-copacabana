import PropTypes from 'prop-types';

const Logo = (props) => {
  const { logo, title } = props;

  return (
      <img className={title === 'footer' ? 'logo-footer' : 'contact-logo'} src={logo} alt="Logo" />
  );
}

export default Logo;

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string,
};
