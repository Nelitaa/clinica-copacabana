import intensiveCarePhoto from '../assets/services/intensiveCarePhoto.png';
import intensiveCareIcon from '../assets/services/intensiveCareIcon.png';
import ReturnPage from '../components/ReturnPage';
import ContainerInformationImage from '../components/ContainerInformationImages';

const IntensiveCare = () => {
  const title = 'Cuidados Intensivos';
  const paragraph = ['La Clinica Copacabana cuenta con Unidad de Cuidados Intensivos:', ['UTI para Adultos', 'UTI Pediátrico', 'UTI Neonatal'], 'Nuestro equipo médico y de enfermería tiene la formación y la experiencia necesaria para el cuidado adecuado de cada paciente que requeira este servicio.'];

  return (
    <section className="installations-container">
      <ReturnPage />
      <ContainerInformationImage title={title} photo={intensiveCarePhoto} icon={intensiveCareIcon} paragraph={paragraph} />
    </section>
  );
}

export default IntensiveCare;
