import historyPhoto2 from '../assets/history/historyPhoto2.png';
import missionIcon from '../assets/history/missionIcon.png';
import visionIcon from '../assets/history/viewIcon.png';
import ReturnPage from '../components/ReturnPage';
import MissionVision from '../components/MissionVision';
import Paragraphs from '../components/Paragraphs';
import Title from '../components/Title';

const History = () => {
  const missionParagraph = ['Proporcionar servicios de salud con los mejores recursos de infraestructura, humanos y tecnológicos a la población, para una asistencia médica completa, eficiente, oportuna y humana, con el fin de contribuir en la mejora de la salud y el estándar de vida de nuestra sociedad. Desempeñar obras de ayuda social y promover la invertigación científica en medicina.'];
  const visionParagraph = ['Establecernos, cada vez más, como un líder regional en la prestación de servicios médicos hospitalarios, a través, de la renovación constante de tecnología, conocimientos y capacitación profesional, en equilibrio con valores como la confianza, el respeto, la dignidad y la responsabilidad social.'];
  const paragraphs = [
    'La Clínica Copacabana S.R.L. es una institución de salud que hace parte de la tradición Cochabambina. En efecto, el año 1948, el Dr. Humberto Román Orellana, insigne profesional galeno, junto a su esposa, Dña. María Luisa Castellón Soriano, establece en la calle Antezana entre Venezuela y Paccieri, lo que hoy se transformó en centro hospitalario médico quirurgico de excelencia, la llamada CLINICA COPACABANA. Como todas las cosas que dejan vislumbrar  un futuro grande, nació pequeña y modesta. Bajo el paradigma que se le imprimió al nombrarla Copacabana, en sincero y manifiesto homenaje a la virgen, patrona de Bolivia, logró crecer, imponerse y constituirse en lo que es hoy, además de tradición, un centro de recursos modernos para la salud en la ciudad de Cochabamba.',
    'En el desarrollar de su historia, pasó por grandes tranformaciones e incluso se instaló en otro barrio, no sin antes dejar su estructura antigua de la calle Antezana para que otro centro pudiera instalarse. En su tiempo, ocupó posición de destaque, brindando servicios exclusivos y pioneros, como era el centro de diálisis sanguínea, el centro de fisioterapia y el tradicional centro maternológico, donde, muchos de los que leen tuvieron la oportunidad de nacer en manos del Dr. Román, en el centro Clínica Copacabana.',
    'Los años pasaron y el tiempo no fue factor de envejecimiento y deterioro para la Clínica, sino, de estímulo para renoverse y equiparse a nivel condigno con las exigencias y demandas de recursos de salud de la población de Cochabamba.',
    'Nuestra experiencia y pretigio nos permitió crear alianzas profesionales sólidas entre la Clínica y muchas empresas de nuestro medio, basados en la presentación de un servicio excelente y responsable.',
    'La Clínica Copacabana S.R.L., consciente de su misión en el área de prestación de servicios de salud no medirá esfuerzos en constituirse cada vez más en centro de calidad, llevando por adelante la tradición, el pionerismo y la vanguardia de la medicina cochabambina.'
  ];

  return (
    <div>
      <div className='front-page-history-container'>
        <div>
          <ReturnPage />
        </div>
        <h1>Nuestra Historia</h1>
      </div>
      <div className='history-mission-vision-container'>
        <img src={historyPhoto2} alt="Fotografía del Dr. Humberto Román Orellana" />
        <div className='mission-vision-container'>
          <MissionVision title='Misión' icon={missionIcon} paragraph={missionParagraph} />
          <MissionVision title='Visión' icon={visionIcon} paragraph={visionParagraph} />
        </div>
      </div>
      <div className="paragraph-container">
        <Paragraphs paragraphs={paragraphs} />
      </div>
    </div>
  );
};

export default History;
