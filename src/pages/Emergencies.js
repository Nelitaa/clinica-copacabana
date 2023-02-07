import emergenciesPhoto from '../assets/services/emergenciesPhoto.png';
import emergenciesIcon from '../assets/services/emergenciesIcon.png';
import ReturnPage from '../components/ReturnPage';
import ContainerInformationImages from '../components/ContainerInformationImages';

const Internment = () => {
  const title = 'Emergencias';
  const paragraph = ['Estamos al servicio de la comunidad, nuestro servicio de urgencias de la Clínica atiende las 24 horas del día, estamos a su disposición los 365 días del año.'];

  return (
    <section className="installations-container">
      <ReturnPage />
      <ContainerInformationImages title={title} photo={emergenciesPhoto} icon={emergenciesIcon} paragraph={paragraph} />
    </section>
  );
}

export default Internment;