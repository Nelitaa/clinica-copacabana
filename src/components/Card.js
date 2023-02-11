import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { title, image, path, section } = props;

  return (
    <Link to={path} className={section ? 'card' : 'card_home'}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  section: PropTypes.string,
};
