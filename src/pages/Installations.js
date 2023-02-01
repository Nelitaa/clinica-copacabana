import installationsPhoto from '../assets/installations/installationsPhoto.png';
import ReturnPage from '../components/ReturnPage';
import ContainerInformation from '../components/ContainerInformation';
import ContainerImages from '../components/ContainerImages';
import '../App.css'

const Installations = () => {
  const title = 'Instalaciones';
  const paragraph = 'Nuestras instalaciones están diseñadas para brindar toda la comodidad y confort a nuestros pacientes.';
  const paragraph2 = 'Contamos con diferentes ambientes, sala de internación, sala de imagenología, área de atención al paciente, consulta externa, sala de emergencias.';

  return (
    <section className="installations-container">
      <ReturnPage />
      <div className="installations-content">
        <ContainerInformation title={title} paragraph={paragraph} paragraph2={paragraph2} />
        <ContainerImages title={title} photo={installationsPhoto} />
      </div>
    </section>
  );
}

export default Installations;
