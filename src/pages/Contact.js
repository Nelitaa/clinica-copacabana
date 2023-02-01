import contactPhoto from '../assets/contact/contactPhoto.png';
import facebookIcon2 from '../assets/contact/facebookIcon2.png';
import instagramIcon2 from '../assets/contact/instagramIcon2.png';
import locationIcon from '../assets/contact/locationIcon.png';
import logo2 from '../assets/contact/logo2.png';
import mailIcon from '../assets/contact/mailIcon.png';
import phoneIcon from '../assets/contact/phoneIcon.png';
import whatsappButton from '../assets/contact/whatsappButton.png';
import '../App.css'

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-content-left">
        <h2 className="information-title">Contáctanos</h2>
        <img className="contact-logo" src={logo2} alt="Logo" />
        <ul className="contact-list" >
          <li>
            <img className="contact-list-icons" src={locationIcon} alt="Icono de ubicación" />
            <p>Av. Potosí No. 1253</p>
          </li>
          <li>
            <img className="contact-list-icons" src={phoneIcon} alt="Icono de teléfono" />
            <div>
              <p>+591 (4) 4242362 - 4281125</p>
              <p>+591 (4) 4487257</p>
            </div>
          </li>
          <a href="https://wa.me/59179959570" target="_blank" rel="noreferrer">
            <img src={whatsappButton} alt="Botón de whatsapp" className="contact-logo" />
          </a>
          <li>
            <img className="contact-list-icons" src={mailIcon} alt="Icono de correo electrónico" />
            <p>informaciones@clinicacopacabana.com</p>
          </li>
          <a className="contact-facebook" href="https://www.facebook.com/clinicacopacabana" target="_blank" rel="noreferrer">
            <img src={facebookIcon2} alt="Icono de facebook" />
          </a>
          <a className="contact-instagram" href="https://www.instagram.com/clinicacopacabana/" target="_blank" rel="noreferrer">
            <img src={instagramIcon2} alt="Icono de instagram" />
          </a>
          <h3 className="title-level3">Cochabamba - Bolivia</h3>
        </ul>
      </div>
      <img src={contactPhoto} alt="Foto de contacto" className="contact-content-right" />
    </section>
  )
}

export default Contact;
