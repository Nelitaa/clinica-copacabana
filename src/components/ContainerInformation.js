import PropTypes from 'prop-types';
import Title from './Title';

const ContainerInformation = (props) => {
  const { title, icon, subTitle, list, subTitle2, list2, paragraph, paragraph2, paragraph3, logo } = props;

  return (
  <div className="container-information">
    <Title title={title} icon={icon} />
    <img className={logo ? "logo-icon" : "hide"} src={logo} alt={title} />
    <h3 className={subTitle ? "subTitle-information" : "hide-list-information"}>{subTitle}</h3>
    <p>{paragraph}</p>
    <ul className={list ? "list-information" : "hide-list-information"}>
      {list && list.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>
  );
};

export default ContainerInformation;

ContainerInformation.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  paragraph: PropTypes.string,
  list: PropTypes.array,
  paragraph2: PropTypes.string,
  list2: PropTypes.array,
  subTitle: PropTypes.string,
  subTitle2: PropTypes.string,
  paragraph3: PropTypes.string,
  logo: PropTypes.string,
};
