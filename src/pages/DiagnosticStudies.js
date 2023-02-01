import diagnosticStudiesPhoto from '../assets/services/diagnosticStudiesPhoto.png';
import diagnosticStudiesIcon from '../assets/services/diagnosticStudiesIcon.png';
import ReturnPage from '../components/ReturnPage';
import ContainerInformation from '../components/ContainerInformation';
import ContainerImages from '../components/ContainerImages';
import '../App.css'

const DiagnosticStudies = () => {
  const title = 'Estudios Diagnósticos';
  const list = ['Tomografía', 'Ecografía', 'Rayos X', 'Video Endoscopia', 'Video Colposcopia', 'Ecografía Doppler Color', 'Ecografía de Partes Blandas', 'Ecografía Ginecológico - Obstétrico', 'Intensificador de Imágenes para procedimeinto de quirúrgicos'];
  const list2 = ['Uroflujometría', 'Urodinamia', 'Biopsia de próstata transrectal bajo ecografía', 'Equipo laser Holmium de alta potencia para cálculos renales'];
  const subTitle = 'Centro de Imagenología';
  const subTitle2 = 'Estudios Urología';

  return (
    <section className="installations-container">
      <ReturnPage />
      <div className="installations-content">
        <ContainerInformation title={title} icon={diagnosticStudiesIcon} list={list} subTitle={subTitle} subTitle2={subTitle2} list2={list2} />
        <ContainerImages title={title} photo={diagnosticStudiesPhoto} />
      </div>
    </section>
  );
}

export default DiagnosticStudies;