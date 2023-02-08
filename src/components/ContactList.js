import PropTypes from 'prop-types';
import FacebookInstagram from './FacebookInstagram';
import CochabambaBolivia from './CochabambaBolivia';

const ContactList = (props) => {
  const { mailIcon, phoneIcon, whatsappButton, facebookIcon, instagramIcon, locationIcon } = props;

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
      <li className={whatsappButton ? '' : 'hide'}>
        <a href="https://wa.me/59179959570" target="_blank" rel="noreferrer">
          <img src={whatsappButton} alt="Botón de whatsapp" className="contact-logo" />
        </a>
      </li>
      <li>
        <img className="contact-list-icons" src={mailIcon} alt="Icono de correo electrónico" />
        <p>informaciones@clinicacopacabana.com</p>
      </li>
      <li className={facebookIcon ? '' : 'hide'}>
        <FacebookInstagram facebookIcon={facebookIcon} instagramIcon={instagramIcon} />
      </li>
      <li>{whatsappButton ? <CochabambaBolivia /> : null}</li>
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {
  mailIcon: PropTypes.string.isRequired,
  phoneIcon: PropTypes.string.isRequired,
  whatsappButton: PropTypes.string.isRequired,
  facebookIcon: PropTypes.string.isRequired,
  instagramIcon: PropTypes.string.isRequired,
  locationIcon: PropTypes.string.isRequired,
};
