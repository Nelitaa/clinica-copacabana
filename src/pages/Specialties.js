import specialtiesPhoto from '../assets/services/specialtiesPhoto.png';
import specialtiesIcon from '../assets/services/specialtiesIcon.png';
import ReturnPage from '../components/ReturnPage';
import ContainerInformationImages from '../components/ContainerInformationImages';

const Specialties = () => {
  const title = 'Especialidades';
  const list = ['Cardiología', 'Dermatología', 'Gastroenterología', 'Ginecología', 'Medicina Interna', 'Medicina General', 'Nefrología', 'Neumología', 'Neurocirugía', 'Oftalmología', 'Pediatría', 'Proctología', 'Reumatología', 'Terápia Neonatal', 'Traumatología', 'Urología'];

  return (
    <section className="installations-container">
      <ReturnPage />
      <ContainerInformationImages title={title} icon={specialtiesIcon} list={list} photo={specialtiesPhoto} />
    </section>
  );
}

export default Specialties;
