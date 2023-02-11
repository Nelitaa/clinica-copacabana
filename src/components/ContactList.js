import PropTypes from 'prop-types';
import FacebookInstagram from './FacebookInstagram';
import CochabambaBolivia from './CochabambaBolivia';
import WhatsappButton from './WhatsappButton';

const ContactList = (props) => {
  const { mailIcon, phoneIcon, whatsappButton, facebookIcon, instagramIcon, locationIcon, title } = props;

  return (
    <ul className="contact-list" >
      <li>
        <img className="contact-list-icons" src={locationIcon} alt="Icono de ubicación" />
        <p>Av. Potosí No. 1253.</p>
      </li>
      <li>
        <img className="contact-list-icons" src={phoneIcon} alt="Icono de teléfono" />
        <div>
          <p>+591 (4) 4242362 - 4281125.</p>
          <p>+591 (4) 4487257</p>
        </div>
      </li>
      <span>{whatsappButton ? <WhatsappButton whatsappButton={whatsappButton}/> : null}</span>
      <li>
        <img className="contact-list-icons" src={mailIcon} alt="Icono de correo electrónico" />
        <p>informaciones@clinicacopacabana.com</p>
      </li>
      <span>{facebookIcon && instagramIcon ? <FacebookInstagram facebookIcon={facebookIcon} instagramIcon={instagramIcon} /> : null}</span>
      <span>{whatsappButton ? <CochabambaBolivia title={title}/> : null}</span>
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {
  mailIcon: PropTypes.string.isRequired,
  phoneIcon: PropTypes.string.isRequired,
  whatsappButton: PropTypes.string,
  facebookIcon: PropTypes.string,
  instagramIcon: PropTypes.string,
  locationIcon: PropTypes.string.isRequired,
  title: PropTypes.string,
};
