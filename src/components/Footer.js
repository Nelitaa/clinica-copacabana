import CochabambaBolivia from "./CochabambaBolivia";
import ContactList from "./ContactList";
import FacebookInstagram from "./FacebookInstagram";
import Logo from "./Logo";
import facebookIcon from "../assets/header-footer/facebook.png";
import instagramIcon from "../assets/header-footer/instagram.png";
import logoWhite from "../assets/header-footer/logo-white.png";
import locationIcon from "../assets/header-footer/location-icon.png";
import mailIcon from "../assets/header-footer/mail-icon.png";
import phoneIcon from "../assets/header-footer/phone-icon.png";

const Footer = () => {
  const title = 'footer';

  return (
    <footer>
    <ContactList mailIcon={mailIcon} phoneIcon={phoneIcon} locationIcon={locationIcon} />
    <Logo logo={logoWhite} />
    <CochabambaBolivia title={title} />
    <FacebookInstagram facebookIcon={facebookIcon} instagramIcon={instagramIcon} />
  </footer>
  );
}

export default Footer;
