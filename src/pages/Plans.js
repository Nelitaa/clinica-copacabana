import maternityPlanLogo from '../assets/plans/maternityPlanLogo.png' ;
import plansPhoto from '../assets/plans/plansPhoto.png' ;
import whatsappInformationIcon from '../assets/plans/whatsappInformationIcon.png' ;
import ContainerInformation from '../components/ContainerInformation';
import ContainerImages from '../components/ContainerImages';
import '../App.css' ;

const  MaternityPlan  =  ()  =>  {
  const title = 'Planes y Medicina Preventiva';
  const subTitle = 'CESÁREA';
  const subTitle2 = 'PARTO NORMAL';
  const subTitle3 = 'PARTO NORMAL(sin dolor)';
  const list = ['2 Días de internación.', 'Habitación individual privada, (con TV por cable, baño privado y ducha).', 'Medicamentos.', 'Equipo médico completo (cirujano, anestesista, pediatra, instrumentadora y ayudante).', 'Quirófano.', 'Sala de recién nacido.', 'Nursery/Cuidados del recién nacido.', 'Curación post quirúrgica.', 'Equipo de oxigeno.', 'Instrumental Especializado.', 'Asesoramiento en primeros cuidados para el bebé.', 'Primera consulta pediátrica.'];
  const list2 = ['1 Día de internación.', 'Habitación individual privada, (con TV por cable, baño privado y ducha).', 'Equipo médico completo (cirujano, anestesista, pediatra, instrumentadora y ayudante).', 'Sala de Partos', 'Sala de recién nacido.', 'Nursery/Cuidados del recién nacido.', 'Medicamentos.', 'Equipo de Oxigeno.', 'Asesoramiento en primeros cuidados para el bebé.', 'Primera consulta pediátrica.'];
  const list3 = ['1 Día de internación.', 'Habitación individual privada, (con TV por cable, baño privado y ducha).', 'Equipo médico completo (cirujano, anestesista, pediatra, instrumentadora y ayudante).', 'Sala de Partos', 'Sala de recién nacido.', 'Nursery/Cuidados del recién nacido.', 'Medicamentos.', 'Equipo de Oxigeno.', 'Analgesia', 'Asesoramiento en primeros cuidados para el bebé.', 'Primera consulta pediátrica.'];

  return (
    <section className="installations-container">
      <div className="installations-content">
        <ContainerInformation title={title} subTitle={subTitle} list={list} logo={maternityPlanLogo} />
        <ContainerImages title={title} photo={plansPhoto} iconContact={whatsappInformationIcon} />
      </div>
      <div className="plans-container">
        <ContainerInformation subTitle={subTitle2} list={list2} />
        <ContainerInformation subTitle={subTitle3} list={list3} />
      </div>
    </section>
  );
}

export default MaternityPlan;
