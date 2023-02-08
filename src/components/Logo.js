import PropTypes from 'prop-types';

const Logo = (props) => {
  const { title, logo } = props;

  return (
    <div>
      <img className="contact-logo" src={logo} alt={title} />
    </div>
  );
}

export default Logo;

Logo.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};
