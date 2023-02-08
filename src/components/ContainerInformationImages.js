import PropTypes from 'prop-types';
import ContainerInformation from "./ContainerInformation";
import ContainerImages from "./ContainerImages";

const ContainerInformationImages = (props) => {
  const { title, icon, paragraph, photo, iconContact, logo } = props;

  return (
    <div className="installations-content">
      <ContainerInformation title={title} icon={icon} paragraph={paragraph} logo={logo} />
      <ContainerImages title={title} photo={photo} iconContact={iconContact} />
    </div>
  );
}

export default ContainerInformationImages;

ContainerInformationImages.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  paragraph: PropTypes.arrayOf(PropTypes.string),
  photo: PropTypes.string,
  iconContact: PropTypes.string,
  logo: PropTypes.string,
};
