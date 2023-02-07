import diagnosticStudiesPhoto from '../assets/services/diagnosticStudiesPhoto.png';
import diagnosticStudiesIcon from '../assets/services/diagnosticStudiesIcon.png';
import ReturnPage from '../components/ReturnPage';
import ContainerInformationImages from '../components/ContainerInformationImages';

const DiagnosticStudies = () => {
  const title = 'Estudios Diagnósticos';
  const paragraph = ['Centro de Imagenología', ['Tomografía', 'Ecografía', 'Rayos X', 'Video Endoscopia', 'Video Colposcopia', 'Ecografía Doppler Color', 'Ecografía de Partes Blandas', 'Ecografía Ginecológico - Obstétrico', 'Intensificador de Imágenes para procedimeinto de quirúrgicos'], 'Estudios Urología', ['Uroflujometría', 'Urodinamia', 'Biopsia de próstata transrectal bajo ecografía', 'Equipo laser Holmium de alta potencia para cálculos renales']];

  return (
    <section className="installations-container">
      <ReturnPage />
      <ContainerInformationImages title={title} icon={diagnosticStudiesIcon} paragraph={paragraph} photo={diagnosticStudiesPhoto} />
    </section>
  );
}

export default DiagnosticStudies;
