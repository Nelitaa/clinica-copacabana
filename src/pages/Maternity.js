import maternityPhoto from '../assets/services/maternityPhoto.png';
import maternityIcon from '../assets/services/maternityIcon.png';
import ReturnPage from '../components/ReturnPage';
import ContainerInformationImages from '../components/ContainerInformationImages';

const Maternity = () => {
  const title = 'Maternidad';
  const paragraph = ['La  Clinica Copacabana nació como centro maternológico y hasta el día de hoy mantiene una sólida tradición, en el cuidado de madres y sus bebés, el mejor testimonio es el de aquellos que nacieron en la Copacabana.', 'Pensando en su familia, ponemos a su disposición el Plan Maternidad, con el propósito de beneficiarlo con una atención médica y hospitalaria de primera, y a un precio justo y accsesible para todos, conozca nuestra plan.'];

  return (
    <section className="installations-container">
      <ReturnPage />
      <ContainerInformationImages title={title} icon={maternityIcon} paragraph={paragraph} photo={maternityPhoto} />
    </section>
  );
}

export default Maternity;
