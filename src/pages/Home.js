import { Link } from 'react-router-dom';
import WhatsappButton from "../components/WhatsappButton";
import whatsappButton from "../assets/home/whatsappButton.png";
import callImage from "../assets/home/callImage.png";
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
      <div>
        <div>
          <p>Más de <span>68 años </span>cuidando a los Cochabambinos</p>
          <button type="button">
            <Link to="/nuestra-historia">Nuestra historia</Link>
          </button>
        </div>
      </div>
      <div>
        {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              image={card.image}
              path={card.path}
            />
          ))}
      </div>
      <WhatsappButton whatsappButton={whatsappButton} />
      <img src={callImage} alt="Linea de Emergencia" />
      <div>
        <img src={arrowLeft} alt="Fecha" />
          <div>
            <img src={homeImage} alt="Tomografía computarizada" />
            <div>
              <Title title={title} />
              <Paragraphs paragraphs={paragraph} />
            </div>
          </div>
        <img src={arrowRight} alt="Fecha" />
      </div>
    </section>
  );
}

export default Home;