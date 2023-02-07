import PropTypes from 'prop-types';
import Paragraphs from './Paragraphs';
import Title from './Title';

const ContainerInformation = (props) => {
  const { title, icon, logo, subTitle, paragraph } = props;

  return (
  <div className="container-information">
    <Title title={title} icon={icon} />
    {/* <img className={logo ? "logo-icon" : "hide"} src={logo} alt={title} /> */}
    <div>{paragraph ? <Paragraphs paragraphs={paragraph} /> : null}</div>
  </div>
  );
};

export default ContainerInformation;

ContainerInformation.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  subTitle: PropTypes.string,
  paragraph: PropTypes.arrayOf(PropTypes.string),
  logo: PropTypes.string,
};
