import PropTypes from 'prop-types';

const Title = (props) => {
  const { title, icon } = props;

  return (
    <div className="container-title">
      <img className={icon ? "icon-title" : "hide"} src={icon} alt={title} />
      <h2 className={title === 'Pacientes Asegurados' ? "title-orange" : "title"}>{title}</h2>
    </div>
  );
}

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
