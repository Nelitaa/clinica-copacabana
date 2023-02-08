import maternityPlanLogo from '../assets/plans/maternityPlanLogo.png' ;
import plansPhoto from '../assets/plans/plansPhoto.png' ;
import whatsappInformationIcon from '../assets/plans/whatsappInformationIcon.png' ;
import ContainerInformation from '../components/ContainerInformation' ;
import ContainerInformationImages from '../components/ContainerInformationImages' ;

const  MaternityPlan  =  ()  =>  {
  const title = 'Planes y Medicina Preventiva';
  const paragraph = ['CESÁREA', ['2 Días de internación.', 'Habitación individual privada, (con TV por cable, baño privado y ducha).', 'Medicamentos.', 'Equipo médico completo (cirujano, anestesista, pediatra, instrumentadora y ayudante).', 'Quirófano.', 'Sala de recién nacido.', 'Nursery/Cuidados del recién nacido.', 'Curación post quirúrgica.', 'Equipo de oxigeno.', 'Instrumental Especializado.', 'Asesoramiento en primeros cuidados para el bebé.', 'Primera consulta pediátrica.']];
  const paragraph2 = ['PARTO NORMAL', ['1 Día de internación.', 'Habitación individual privada, (con TV por cable, baño privado y ducha).', 'Equipo médico completo (cirujano, anestesista, pediatra, instrumentadora y ayudante).', 'Sala de Partos', 'Sala de recién nacido.', 'Nursery/Cuidados del recién nacido.', 'Medicamentos.', 'Equipo de Oxigeno.', 'Asesoramiento en primeros cuidados para el bebé.', 'Primera consulta pediátrica.']];
  const paragraph3 = ['PARTO NORMAL(sin dolor)', ['1 Día de internación.', 'Habitación individual privada, (con TV por cable, baño privado y ducha).', 'Equipo médico completo (cirujano, anestesista, pediatra, instrumentadora y ayudante).', 'Sala de Partos', 'Sala de recién nacido.', 'Nursery/Cuidados del recién nacido.', 'Medicamentos.', 'Equipo de Oxigeno.', 'Analgesia', 'Asesoramiento en primeros cuidados para el bebé.', 'Primera consulta pediátrica.']];

  return (
    <section className="installations-container">
      <ContainerInformationImages title={title} paragraph={paragraph} photo={plansPhoto} iconContact={whatsappInformationIcon} logo={maternityPlanLogo} />
      <div className="plans-container">
        <ContainerInformation paragraph={paragraph2} />
        <ContainerInformation paragraph={paragraph3} />
      </div>
    </section>
  );
}

export default MaternityPlan;
