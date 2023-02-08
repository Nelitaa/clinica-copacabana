import PropTypes from 'prop-types';
import Paragraphs from './Paragraphs';
import Title from './Title';
import Logo from './Logo';

const ContainerInformation = (props) => {
  const { title, icon, logo, paragraph } = props;

  return (
  <div className="container-information">
    <Title title={title} icon={icon} />
    <div>{logo ? <Logo logo={logo} /> :null}</div>
    <div>{paragraph ? <Paragraphs paragraphs={paragraph} /> : null}</div>
  </div>
  );
};

export default ContainerInformation;

ContainerInformation.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  paragraph: PropTypes.arrayOf(PropTypes.string),
  logo: PropTypes.string,
};
