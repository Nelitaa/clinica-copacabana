import careAndPreventionPhoto1 from '../assets/services/careAndPreventionPhoto1.png';
import careAndPreventionPhoto2 from '../assets/services/careAndPreventionPhoto2.png';
import careAndPreventionPhoto3 from '../assets/services/careAndPreventionPhoto3.png';
import careAndPreventionIcon from '../assets/services/careAndPreventionIcon.png';
import careAndPreventionIcon2 from '../assets/services/careAndPreventionIcon2.png';
import ReturnPage from '../components/ReturnPage';
import ContainerInformationImages from '../components/ContainerInformationImages';

const CareAndPrevention = () => {
  const title = 'Cuidado y Prevención';
  const paragraph = ['Mujer', 'El cuidado de la salud y bienestar de la mujer adquiere relevancia cuando se sabe que algunas enfermedades ocurren durante ciertas edades y son prevenibles, por esta razón, es importante realizar controles médicos frecuentes.', 'En la Clinica Copacabana contamos con un equipo médico que la orientará y asistirá a sus necesidades.'];
  const paragraph2 = ['Hombre', 'El cuidado de la salud y bienestar del hombre es muy importante, no esperes a que ocurra algo malo para ir al  médico. El doctor puede ser el mejor amigo para prevenir problemas de salud y enfermedades. Sigue los consejos del médico si tienes problemas de salud como lesterol alto, presión arterial elevada, diabetes, problemas de próstata y otros. Asegúrate de preguntarle al médico cuándo realizarte análisis en busca de cáncer y otras enfermedades.', 'En la Clinica Copacabana contamo con un equipo médico que le orientará y asistirá a sus necesidades.'];
  const paragraph3 = ['Niño', 'Desde el nacimiento de un bebé, el principal objetivo es que crezca saludablemente. Para conseguirlo es esencial vigilar su salud desde el inicio y tener la orientción y seguimiento de los especialistas.', 'Como medidas de prevención de enfermedades, recomendamos la higiene en general, con énfasis en las manos. Es fundamental seguir el esquema de vacunación de sus hijos contra todas las enfermedades de origen infeccioso que pueden prevenirse. El ejercicio es parte vital del crecimiento saludable de los niños, conjuntamente con una adecuada alimentación.', 'Las visitas al pediatra son importantes para prevenir y tratar enfermedades, ya que en cada consulta el médico hace una valoración general de su salud, y da asesoramiento sobre los cuidados de salud, y de asesoramiento sobre los cuidados de salud necesarios en alimentación, higiene, vacunación, prevención de accidentes y otros aspectos relevantes.'];

  return (
    <section className="installations-container">
      <ReturnPage />
      <ContainerInformationImages title={title} icon={careAndPreventionIcon} paragraph={paragraph} photo={careAndPreventionPhoto1} />
      <br />
      <ContainerInformationImages paragraph={paragraph2} photo={careAndPreventionPhoto2} />
      <br />
      <ContainerInformationImages paragraph={paragraph3} photo={careAndPreventionPhoto3} iconContact={careAndPreventionIcon2} />
    </section>
  );
}

export default CareAndPrevention;