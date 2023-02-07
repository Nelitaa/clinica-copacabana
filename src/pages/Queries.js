import queriesPhoto from '../assets/services/queriesPhoto.png';
import queriesIcon from '../assets/services/queriesIcon.png';
import ReturnPage from '../components/ReturnPage';
import ContainerInformationImages from '../components/ContainerInformationImages';

const Queries = () => {
  const title = 'Consultas';
  const paragraph = ['La Clínica Copacabana S.R.L., le ofrece servicio de consulta médica en medicina general las 24 horas del día. Para consultas de especialidad médica, usted deberá elegir el profesional médico de su preferecia y preguntar acerca de los horarios de atención, las consultas de urgencia son atendidas de inmediati por el especialista que corresponda en cada caso y a cualquier hora del día.'];

  return (
    <section className="installations-container">
      <ReturnPage />
      <ContainerInformationImages title={title} icon={queriesIcon} paragraph={paragraph} photo={queriesPhoto} />
    </section>
  );
}

export default Queries;
