import fotoInstalaciones from '../assets/instalaciones.png';
import instalacionesTitulo from '../assets/InstalacionesTitulo.png';
import flecha from '../assets/Flecha.png';
import flechaIzquierda from '../assets/FlechaIzquierda.png';
import flechaDerecha from '../assets/flechaDerecha.png';
import '../App.css'

const Instalaciones = () => {
  return (
    <div className="container-pages">
      <div className="container-back">
        <img src={flecha} alt="Fecha" />
        <p>Volver</p>
      </div>
      <div className="container-information">
        <div>
          <img className="installation-title" src={instalacionesTitulo} alt="Instalaciones" />
          <p>Nuestras instalaciones están diseñadas para brindar toda la comodidad y confort a nuestros pacientes.</p>
          <p className='paragraph-installations'>Contamos con diferentes ambientes, sala de internación, sala de imagenología, área de atención al paciente, consulta externa, sala de emergencias.</p>
        </div>
        <div className="container-images">
          <img src={flechaIzquierda} alt="Fecha" />
          <img className="installations-images" src={fotoInstalaciones} alt="Instalaciones clínica Copacabana" />
          <img src={flechaDerecha} alt="Fecha" />
        </div>
      </div>
    </div>
  );
}

export default Instalaciones;
