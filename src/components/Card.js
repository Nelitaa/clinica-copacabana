import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { title, image, path } = props;

  return (
    <div className="card">
      <Link to={path}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
