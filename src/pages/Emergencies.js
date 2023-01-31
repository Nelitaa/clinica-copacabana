import emergenciesPhoto from '../assets/services/emergenciesPhoto.png';
import emergenciesIcon from '../assets/services/emergenciesIcon.png';
import ReturnPage from '../components/ReturnPage';
import ContainerInformation from '../components/ContainerInformation';
import ContainerImages from '../components/ContainerImages';
import '../App.css'

const Internment = () => {
  const title = 'Emergencias';
  const paragraph = 'Estamos al servicio de la comunidad, nuestro servicio de urgencias de la Clínica atiende las 24 horas del día, estamos a su disposición los 365 días del año.';

  return (
    <section className="installations-container">
      <ReturnPage />
      <div className="installations-content">
        <ContainerInformation title={title} icon={emergenciesIcon} paragraph={paragraph} />
        <ContainerImages photo={emergenciesPhoto} />
      </div>
    </section>
  );
}

export default Internment;