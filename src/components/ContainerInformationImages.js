import PropTypes from 'prop-types';
import ContainerInformation from "./ContainerInformation";
import ContainerImages from "./ContainerImages";

const ContainerInformationImages = (props) => {
  const { title, icon, paragraph, list, photo } = props;

  return (
    <div className="installations-content">
      <ContainerInformation title={title} icon={icon} paragraph={paragraph} list={list} />
      <ContainerImages title={title} photo={photo} />
    </div>
  );
}

export default ContainerInformationImages;

ContainerInformationImages.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  paragraph: PropTypes.arrayOf(PropTypes.string),
  list: PropTypes.arrayOf(PropTypes.string),
  photo: PropTypes.string,
};
