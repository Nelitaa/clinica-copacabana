import installationsPhoto from '../assets/installations/installationsPhoto.png';
import ReturnPage from '../components/ReturnPage';
import ContainerInformationImages from '../components/ContainerInformationImages';

const Installations = () => {
  const title = 'Instalaciones';
  const paragraph = ['Nuestras instalaciones están diseñadas para brindar toda la comodidad y confort a nuestros pacientes.', 'Contamos con diferentes ambientes, sala de internación, sala de imagenología, área de atención al paciente, consulta externa, sala de emergencias.'];

  return (
    <section className="installations-container">
      <ReturnPage />
      <ContainerInformationImages title={title} paragraph={paragraph} photo={installationsPhoto} />
    </section>
  );
}

export default Installations;
