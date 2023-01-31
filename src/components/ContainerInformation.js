import React from 'react';
import PropTypes from 'prop-types';

const ContainerInformation = (props) => {
  const { title, icon, list, paragraph, paragraph2 } = props;

  return (
  <div className="container-information">
    <div className="container-information-title">
      <img className={icon ? "icon-information-title" : "hide-icon-information-title"} src={icon} alt="" />
      <h2 className="information-title">{title}</h2>
    </div>
    <p>{paragraph}</p>
    <ul className={list ? "list-information" : "hide-list-information"}>
      {list && list.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
    <p className='paragraph2'>{paragraph2}</p>
  </div>
  );
};

export default ContainerInformation;

ContainerInformation.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  paragraph: PropTypes.string,
  list: PropTypes.array,
  paragraph2: PropTypes.string,
};
