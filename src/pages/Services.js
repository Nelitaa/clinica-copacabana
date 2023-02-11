import Card from '../components/Card';
import queriesIcon from '../assets/services/queriesIcon.png';
import maternityIcon from '../assets/services/maternityIcon.png';
import specialtiesIcon from '../assets/services/specialtiesIcon.png';
import intensiveCareIcon from '../assets/services/intensiveCareIcon.png';
import internmentIcon from '../assets/services/internmentIcon.png';
import careAndPreventionIcon from '../assets/services/careAndPreventionIcon.png';
import emergenciesIcon from '../assets/services/emergenciesIcon.png';
import diagnosticStudiesIcon from '../assets/services/diagnosticStudiesIcon.png';

const Services = () => {
  const cards = [
    {
      id: 1,
      title: 'Consultas',
      image: queriesIcon,
      path: '/servicios/consultas',
      section: 'services',
    },
    {
      id: 2,
      title: 'Maternidad',
      image: maternityIcon,
      path: '/servicios/maternidad',
      section: 'services',
    },
    {
      id: 3,
      title: 'Especialidades',
      image: specialtiesIcon,
      path: '/servicios/especialidades',
      section: 'services',
    },
    {
      id: 4,
      title: 'Cuidados Intensivos',
      image: intensiveCareIcon,
      path: '/servicios/cuidados-intensivos',
      section: 'services',
    },
    {
      id: 5,
      title: 'Internación',
      image: internmentIcon,
      path: '/servicios/internacion',
      section: 'services',
    },
    {
      id: 6,
      title: 'Cuidado y Prevención',
      image: careAndPreventionIcon,
      path: '/servicios/cuidado-y-prevencion',
      section: 'services',
    },
    {
      id: 7,
      title: 'Emergencias',
      image: emergenciesIcon,
      path: '/servicios/emergencias',
      section: 'services',
    },
    {
      id: 8,
      title: 'Estudios Diagnósticos',
      image: diagnosticStudiesIcon,
      path: '/servicios/estudios-diagnosticos',
      section: 'services',
    },
  ];

  return (
    <section className='services-container'>
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            image={card.image}
            path={card.path}
            section={card.section}
          />
        ))}
    </section>
  );
};

export default Services;
