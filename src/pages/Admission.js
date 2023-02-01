import admissionPhoto1 from '../assets/admission/admissionPhoto1.png';
import admissionPhoto2 from '../assets/admission/admissionPhoto2.png';
import admissionPhoto3 from '../assets/admission/admissionPhoto3.png';
import companyLogos from '../assets/admission/companyLogos.png';
import ReturnPage from '../components/ReturnPage';
import ContainerInformation from '../components/ContainerInformation';
import ContainerImages from '../components/ContainerImages';

const Admission = () => {
  const title = 'Proceso de Admisión';
  const paragraph = 'Como parte del procedimiento de admisión de la clínica, nuestro personal le pedirá su documento de identidad para el registro de su información en el sistema, si se encuentra imposibilitado de realizarlo, pídale a su acompañante que lo hago por usted, en este proceso le haremos una serie de preguntas, esta información es necesaria para los archivos médicos de la Clínica y serán mantenidas bajo estricta confidencialidad.';
  const paragraph2 = 'Para su internación le pediremos firmar un Contrato de Prestación de Servicios Médicos y Hospitalarios como consentimiento para su tratamiento. LAs preguntas de tipo médico serán aclaradas por su médico o enfermera. Si usted tuviera algún tipo de seguro médico informe y presente la documentación necesaria al personal de admisión. Para cualquier otra duda o cuestionamiento siéntase en total libertad de consultar con el personal de admisión.';
  const title3 = 'Pacientes Particulares';
  const paragraph6 = 'Todo paciente particular, deberá cancelar todos los servicios prestados por la Clínica Copacabana comprometiéndose así a proceder con el pago total de todos los procedimientos, insumos y atención.';
  const paragraph7 = 'En el momento de la internación el personal de la Clínica solicitará un pago de un depósito de garantía, en base a la elaboración previa de un presupuesto estimado del valor de la internación.';
  const paragraph8 = 'Es muy importante que los familiares o personas responsables del paciente, estén al tanto del estado de la cuenta, para así poder realizar los pagos correspondientes. Se sugiere que se solicite periódicamente un extracto de la cuenta del paciente a nuestro personal encargado.';
  const title2 = 'Pacientes Asegurados';
  const paragraph3 = 'Clínica Copacabana S.R.L., es una empresa dedicada a la prestación de servicios médicos y hospitalarios. Nació con la noble misión de brindar bienestar a la población, y con ese objetivo estableció importantes lazos de amistad y trabajo con diferentes Empresas e Instituciones de nuestro medio, a las cuales estamos orgullosos de servir.';
  const paragraph4 = 'En el momento de hacer su registro favor verifique con el personal de admisión si su seguro es atendido actualmente por la Clínica, si lo hacemos, usted acredite su afiliación a la empresa aseguradora o institución a la que pertenece, en cada caso, le proporcionaremos los formularios y documentación que deberá ser llenada por usted.';
  const paragraph5 = 'A continuación les presentamos un listado de Empresas e Instituciones a las que prestamos nuestro servicio:';

  return (
    <section className="installations-container">
      <ReturnPage />
      <div className="installations-content">
        <ContainerInformation title={title} paragraph={paragraph} paragraph2={paragraph2}  />
        <ContainerImages photo={admissionPhoto1} />
      </div>
      <div className="installations-content">
        <ContainerInformation title={title2} paragraph={paragraph3} paragraph2={paragraph4} paragraph3={paragraph5}  />
        <ContainerImages photo={admissionPhoto2} />
      </div>
      <div>
        <h3>Seguros y empresas</h3>
        <img src={companyLogos} alt="Seguros y empresas" />
      </div>
      <div className="installations-content">
        <ContainerInformation title={title3} paragraph={paragraph6} paragraph2={paragraph7} paragraph3={paragraph8}  />
        <ContainerImages photo={admissionPhoto3} />
      </div>
    </section>
  );
};

export default Admission;
