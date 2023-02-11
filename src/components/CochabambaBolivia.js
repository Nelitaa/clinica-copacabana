import PropTypes from 'prop-types';

const CochabambaBolivia = ({ title }) => {
  return (
    <h3 className={title === 'footer' ? 'title-level3-white' : 'title-level3'}>Cochabamba - Bolivia</h3>
  );
};

export default CochabambaBolivia;

CochabambaBolivia.propTypes = {
  title: PropTypes.string,
};
