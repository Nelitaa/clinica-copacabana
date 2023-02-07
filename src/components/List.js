import PropTypes from 'prop-types';

const List = ({ list }) => {
  return (
    <ul className="list-information">
      {list.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
}

export default List;

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};
