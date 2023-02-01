import React from 'react';
import PropTypes from 'prop-types';

const ContainerInformation = (props) => {
  const { title, icon, subTitle, list, subTitle2, list2, paragraph, paragraph2, paragraph3 } = props;

  return (
  <div className="container-information">
    <div className="container-information-title">
      <img className={icon ? "icon-information-title" : "hide-icon-information-title"} src={icon} alt="" />
      <h2 className={title === 'Pacientes Asegurados' ? "information-title-orange" : "information-title"}>{title}</h2>
    </div>
    <h3 className={subTitle ? "subTitle-information" : "hide-list-information"}>{subTitle}</h3>
    <p>{paragraph}</p>
    <ul className={list ? "list-information" : "hide-list-information"}>
      {list && list.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
    <h3 className={subTitle2 ? "subTitle-information" : "hide-list-information"}>{subTitle2}</h3>
    <ul className={list2 ? "list-information" : "hide-list-information"}>
      {list2 && list.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
    <p className='paragraph2'>{paragraph2}</p>
    <p className={paragraph3 ? "paragraph2" : "hide-list-information"}>{paragraph3}</p>
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
};
