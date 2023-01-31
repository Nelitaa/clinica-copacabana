import installationsPhoto from '../assets/installations/installationsPhoto.png';
import installationsTitle from '../assets/installations/installationsTitle.png';
import ReturnPage from '../components/ReturnPage';
import ContainerInformation from '../components/ContainerInformation';
import ContainerImages from '../components/ContainerImages';
import '../App.css'

const Installations = () => {
  const paragraph = 'Nuestras instalaciones están diseñadas para brindar toda la comodidad y confort a nuestros pacientes.';
  const paragraph2 = 'Contamos con diferentes ambientes, sala de internación, sala de imagenología, área de atención al paciente, consulta externa, sala de emergencias.';

  return (
    <section className="installations-container">
      <ReturnPage />
      <div className="installations-content">
        <ContainerInformation title={installationsTitle} paragraph={paragraph} paragraph2={paragraph2} />
        <ContainerImages photo={installationsPhoto} />
      </div>
    </section>
  );
}

export default Installations;
