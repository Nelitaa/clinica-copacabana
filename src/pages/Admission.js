import admissionPhoto1 from '../assets/admission/admissionPhoto1.png';
import admissionPhoto2 from '../assets/admission/admissionPhoto2.png';
import admissionPhoto3 from '../assets/admission/admissionPhoto3.png';
import companyLogos from '../assets/admission/companyLogos.png';
import ReturnPage from '../components/ReturnPage';
import ContainerInformationImages from '../components/ContainerInformationImages';

const Admission = () => {
  const title = 'Proceso de Admisión';
  const paragraph = ['Como parte del procedimiento de admisión de la clínica, nuestro personal le pedirá su documento de identidad para el registro de su información en el sistema, si se encuentra imposibilitado de realizarlo, pídale a su acompañante que lo hago por usted, en este proceso le haremos una serie de preguntas, esta información es necesaria para los archivos médicos de la Clínica y serán mantenidas bajo estricta confidencialidad.', 'Para su internación le pediremos firmar un Contrato de Prestación de Servicios Médicos y Hospitalarios como consentimiento para su tratamiento. LAs preguntas de tipo médico serán aclaradas por su médico o enfermera. Si usted tuviera algún tipo de seguro médico informe y presente la documentación necesaria al personal de admisión. Para cualquier otra duda o cuestionamiento siéntase en total libertad de consultar con el personal de admisión.'];
  const title2 = 'Pacientes Asegurados';
  const paragraph2 = ['Clínica Copacabana S.R.L., es una empresa dedicada a la prestación de servicios médicos y hospitalarios. Nació con la noble misión de brindar bienestar a la población, y con ese objetivo estableció importantes lazos de amistad y trabajo con diferentes Empresas e Instituciones de nuestro medio, a las cuales estamos orgullosos de servir.', 'En el momento de hacer su registro favor verifique con el personal de admisión si su seguro es atendido actualmente por la Clínica, si lo hacemos, usted acredite su afiliación a la empresa aseguradora o institución a la que pertenece, en cada caso, le proporcionaremos los formularios y documentación que deberá ser llenada por usted.', 'A continuación les presentamos un listado de Empresas e Instituciones a las que prestamos nuestro servicio:'];
  const title3 = 'Pacientes Particulares';
  const paragraph3 = ['Todo paciente particular, deberá cancelar todos los servicios prestados por la Clínica Copacabana comprometiéndose así a proceder con el pago total de todos los procedimientos, insumos y atención.', 'En el momento de la internación el personal de la Clínica solicitará un pago de un depósito de garantía, en base a la elaboración previa de un presupuesto estimado del valor de la internación.', 'Es muy importante que los familiares o personas responsables del paciente, estén al tanto del estado de la cuenta, para así poder realizar los pagos correspondientes. Se sugiere que se solicite periódicamente un extracto de la cuenta del paciente a nuestro personal encargado.'];

  return (
    <section className="installations-container">
      <ReturnPage />
      <ContainerInformationImages title={title} paragraph={paragraph} photo={admissionPhoto1}  />
      <br />
      <ContainerInformationImages title={title2} paragraph={paragraph2} photo={admissionPhoto2}  />
      <br />
      <div>
        <h3 className="subTitle-admission">Seguros y empresas</h3>
        <img className="company-logos" src={companyLogos} alt="Seguros y empresas" />
      </div>
      <br />
      <ContainerInformationImages title={title3} paragraph={paragraph3} photo={admissionPhoto3}  />
    </section>
  );
};

export default Admission;
