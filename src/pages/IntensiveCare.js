import intensiveCarePhoto from '../assets/services/intensiveCarePhoto.png';
import intensiveCareIcon from '../assets/services/intensiveCareIcon.png';
import ReturnPage from '../components/ReturnPage';
import ContainerInformation from '../components/ContainerInformation';
import ContainerImages from '../components/ContainerImages';
import '../App.css'

const IntensiveCare = () => {
  const title = 'Cuidados Intensivos';
  const paragraph = 'La Clinica Copacabana cuenta con Unidad de Cuidados Intensivos:';
  const list = ['UTI para Adultos', 'UTI Pediátrico', 'UTI Neonatal'];
  const paragraph2 = 'Nuestro equipo médico y de enfermería tiene la formación y la experiencia necesaria para el cuidado adecuado de cada paciente que requeira este servicio.';

  return (
    <section className="installations-container">
      <ReturnPage />
      <div className="installations-content">
        <ContainerInformation title={title} icon={intensiveCareIcon} paragraph={paragraph} list={list} paragraph2={paragraph2} />
        <ContainerImages title={title} photo={intensiveCarePhoto} />
      </div>
    </section>
  );
}

export default IntensiveCare;