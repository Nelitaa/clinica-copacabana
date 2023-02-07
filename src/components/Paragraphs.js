import PropTypes from 'prop-types';
import List from './List';

const Paragraphs = ({ paragraphs }) => {
  return (
    <div>
      {paragraphs.map((paragraph, index) => {
        switch (typeof paragraph) {
          case 'string':
            return <p key={index}>{paragraph}</p>;
          case 'object':
            return <List key={index} list={paragraph} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Paragraphs;

Paragraphs.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])).isRequired,
};
