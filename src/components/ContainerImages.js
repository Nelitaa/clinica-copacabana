import PropTypes from 'prop-types';
import ContainerImagesTop from './ContainerImagesTop';
import ContainerImagesBottom from './ContainerImagesBottom';

const ContainerImages = (props) => {
  const { title, photo, iconContact } = props;

  return (
    <div className="images-container">
      <ContainerImagesTop title={title} photo={photo} />
      <div className={iconContact ? 'schedule-appointment' : 'hide'}>
        <ContainerImagesBottom iconContact={iconContact} />
      </div>
    </div>
  );
};

export default ContainerImages;

ContainerImages.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  iconContact: PropTypes.string,
};
