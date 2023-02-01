import PropTypes from 'prop-types';
import ContainerImagesTop from './ContainerImagesTop';
import ContainerImagesBottom from './ContainerImagesBottom';

const ContainerImages = (props) => {
  const { title, photo, iconContact } = props;

  return (
    <div className="images-container">
      <ContainerImagesTop title={title} photo={photo} />
      <ContainerImagesBottom iconContact={iconContact} />
    </div>
  );
};

export default ContainerImages;

ContainerImages.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  iconContact: PropTypes.string,
};
