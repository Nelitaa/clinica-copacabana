import PropTypes from 'prop-types';

const Paragraphs = ({ paragraphs }) => {
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default Paragraphs;

Paragraphs.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
