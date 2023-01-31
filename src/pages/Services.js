import Card from '../components/Card';
import queriesIcon from '../assets/services/queriesIcon.png';
import maternity from '../assets/services/maternityIcon.png';
import specialties from '../assets/services/specialtiesIcon.png';
import intensiveCare from '../assets/services/intensiveCareIcon.png';
import internment from '../assets/services/internmentIcon.png';
import careAndPrevention from '../assets/services/careAndPreventionIcon.png';
import emergencies from '../assets/services/emergenciesIcon.png';
import diagnosticStudies from '../assets/services/diagnosticStudiesIcon.png';
import '../App.css'

const Services = () => {
  const cards = [
    {
      id: 1,
      title: 'Consultas',
      image: queriesIcon,
      path: '/servicios/consultas',
    },
    {
      id: 2,
      title: 'Maternidad',
      image: maternity,
      path: '/servicios/maternidad',
    },
    {
      id: 3,
      title: 'Especialidades',
      image: specialties,
      path: '/servicios/especialidades',
    },
    {
      id: 4,
      title: 'Cuidados Intensivos',
      image: intensiveCare,
      path: '/servicios/cuidados-intensivos',
    },
    {
      id: 5,
      title: 'Internación',
      image: internment,
      path: '/servicios/internacion',
    },
    {
      id: 6,
      title: 'Cuidado y Prevención',
      image: careAndPrevention,
      path: '/servicios/cuidado-y-prevencion',
    },
    {
      id: 7,
      title: 'Emergencias',
      image: emergencies,
      path: '/servicios/emergencias',
    },
    {
      id: 8,
      title: 'Estudios Diagnósticos',
      image: diagnosticStudies,
      path: '/servicios/estudios-diagnosticos',
    },
  ];

  return (
    <section className="services-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            image={card.image}
            path={card.path}
          />
        ))}
    </section>
  );
};

export default Services;
