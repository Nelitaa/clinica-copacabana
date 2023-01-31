import React from 'react';
import PropTypes from 'prop-types';

const ContainerInformation = (props) => {
  const { title, paragraph, paragraph2 } = props;

  return (
  <div className="container-information">
    <img className="container-information-title" src={title} alt="Título" />
    <p>{paragraph}</p>
    <p className='paragraph2'>{paragraph2}</p>
  </div>
  );
};

export default ContainerInformation;

ContainerInformation.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  paragraph2: PropTypes.string.isRequired,
};
