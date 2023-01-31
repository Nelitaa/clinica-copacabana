import internmentPhoto from '../assets/services/internmentPhoto.png';
import internmentIcon from '../assets/services/internmentIcon.png';
import ReturnPage from '../components/ReturnPage';
import ContainerInformation from '../components/ContainerInformation';
import ContainerImages from '../components/ContainerImages';
import '../App.css'

const Internment = () => {
  const title = 'Internación';
  const paragraph = 'Para asegurar la calidad de su atención es importante conocer los motivos de su internación. Si está siendo internado en la clinica por primera vez, no se olvide presentar todos los documentos solicitados, asegúrese de comunicarnos si pertenece algún seguro médico.';
  const paragraph2 = 'Es esencial una comunicación directa con su médico tratante, el paciente o su acompañante debe informarnos sobre sus antecedentes médicos, restricciones alimenticias, alergias y si está recibiendo algún tratamiento con medicamentos en el momento de internación. Todo el personal administrativo y personal médico, están prestos a brindarle una atención cálida y profesinal.';

  return (
    <section className="installations-container">
      <ReturnPage />
      <div className="installations-content">
        <ContainerInformation title={title} icon={internmentIcon} paragraph={paragraph} paragraph2={paragraph2} />
        <ContainerImages photo={internmentPhoto} />
      </div>
    </section>
  );
}

export default Internment;