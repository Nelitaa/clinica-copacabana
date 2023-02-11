import { Link } from 'react-router-dom';
import WhatsappButton from '../components/WhatsappButton';
import whatsappButton from '../assets/home/whatsappButton.png';
import callImage from '../assets/home/callImage.png';
import arrowLeft from '../assets/icons/arrowLeft.png';
import arrowRight from '../assets/icons/arrowRight.png';
import homeImage from '../assets/home/homeImage.png';
import Title from '../components/Title';
import Paragraphs from '../components/Paragraphs';
import plansIcon from '../assets/home/plansIcon.png';
import servicesIcon from '../assets/home/servicesIcon.png';
import installationsIcon from '../assets/home/installationsIcon.png';
import admissionIcon from '../assets/home/admissionIcon.png';
import Card from '../components/Card';

const Home = () => {
  const title = 'Tomografía computarizada';
  const paragraph = ['En Clinica Copacabana contamos con un equipo de última generación que brinda imágenes en alta calidad. Garantizando resultados confiables en la deteccion de enfermedades.'];
  const cards = [
    {
      id: 1,
      title: 'Servicios hospitalarios',
      image: servicesIcon,
      path: '/servicios',
    },
    {
      id: 2,
      title: 'Planes y medicina preventiva',
      image: plansIcon,
      path: '/planes',
    },
    {
      id: 3,
      title: 'Instalaciones',
      image: installationsIcon,
      path: '/instalaciones',
    },
    {
      id: 4,
      title: 'Admisión',
      image: admissionIcon,
      path: '/admision',
    }
  ];

  return (
    <section>
      <div className='container_top_home'>
        <div className='container_top_home_black'>
          <p>Más de <span>68 años </span>cuidando a los Cochabambinos</p>
          <button type="button">
            <Link to='/nuestra-historia'>Nuestra historia</Link>
          </button>
        </div>
        <div className='container_cards_home'>
          {cards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                image={card.image}
                path={card.path}
              />
            ))}
        </div>
      </div>
      <div className='container_contact_home'>
        <WhatsappButton whatsappButton={whatsappButton} />
        <img className='contact_button' src={callImage} alt='Línea de Emergencia' />     
      </div>
      <div className='container_home_bottom'>
        <img src={arrowLeft} alt='Fecha' />
          <div className='container_home_box' >
            <div>
              <img src={homeImage} alt='Tomografía computarizada' />
              <div className='container_home_title_paragraph'>
                <Title title={title} />
                <Paragraphs paragraphs={paragraph} />
              </div>
            </div>
            <div className='orange-line'></div>
          </div>
        <img src={arrowRight} alt='Fecha' />
      </div>
    </section>
  );
}

export default Home;
