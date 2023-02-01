
import { PropTypes } from 'prop-types';
import Paragraphs from './Paragraphs';

const MissionVision = (props) => {
  const { title, icon, paragraph } = props;

  return (
    <div className='mission-vision'>
      <img src={icon} alt={`Ícono de ${title}`} />
      <div>
        <h3 className="title-level3">{title}</h3>
        <Paragraphs paragraphs={paragraph} />
      </div>
    </div>
  );
}

export default MissionVision;

MissionVision.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  paragraph: PropTypes.arrayOf(PropTypes.string).isRequired,
};
