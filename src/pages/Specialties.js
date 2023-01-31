import specialtiesPhoto from '../assets/services/specialtiesPhoto.png';
import specialtiesIcon from '../assets/services/specialtiesIcon.png';
import ReturnPage from '../components/ReturnPage';
import ContainerInformation from '../components/ContainerInformation';
import ContainerImages from '../components/ContainerImages';
import '../App.css'

const Specialties = () => {
  const title = 'Especialidades';
  const list = ['Cardiología', 'Dermatología', 'Gastroenterología', 'Ginecología', 'Medicina Interna', 'Medicina General', 'Nefrología', 'Neumología', 'Neurocirugía', 'Oftalmología', 'Pediatría', 'Proctología', 'Reumatología', 'Terápia Neonatal', 'Traumatología', 'Urología'];

  return (
    <section className="installations-container">
      <ReturnPage />
      <div className="installations-content">
        <ContainerInformation title={title} icon={specialtiesIcon} list={list} />
        <ContainerImages photo={specialtiesPhoto} />
      </div>
    </section>
  );
}

export default Specialties;