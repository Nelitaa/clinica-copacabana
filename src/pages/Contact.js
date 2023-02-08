import mailIcon from '../assets/contact/mailIcon.png';
import phoneIcon from '../assets/contact/phoneIcon.png';
import whatsappButton from '../assets/contact/whatsappButton.png';
import facebookIcon2 from '../assets/contact/facebookIcon2.png';
import instagramIcon2 from '../assets/contact/instagramIcon2.png';
import locationIcon from '../assets/contact/locationIcon.png';
import contactPhoto from '../assets/contact/contactPhoto.png';
import logo2 from '../assets/contact/logo2.png';
import Title from '../components/Title';
import Logo from '../components/Logo';
import ContactList from '../components/ContactList';

const Contact = () => {
  const title = 'Contáctanos';
  
  return (
    <section className="contact-container">
      <div className="contact-content-left">
        <Title title={title} />
        <Logo title={title} logo={logo2} />
        <ContactList locationIcon={locationIcon} phoneIcon={phoneIcon} mailIcon={mailIcon} whatsappButton={whatsappButton} facebookIcon={facebookIcon2} instagramIcon={instagramIcon2} />
      </div>
      <img src={contactPhoto} alt="Foto de contacto" className="contact-content-right" />
    </section>
  )
}

export default Contact;
