import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Components/Styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const socials = [
  {
    icon: faFacebookF,
    url: "https://www.facebook.com/adri.magicplanner",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/adri.magicplanner",
  },
  {
    icon: faWhatsapp,
    url: "https://wa.link/zdwz6d",
  },
];

const listSocials = socials.map((social, index) => {
  return (
      <a key={index} href={social.url} style={{ margin: 10 }} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={social.icon} size="2x" style={{ color: "#ffffff" }} />
      </a>
  );
});

function Footer() {
  return (
    <Container className="custom-footer" align="center" fluid>
        <Row className="mb-1">
            <p style={{ color: 'white' }}>&copy; 2023 Adri Magic Planner</p>
        </Row>
        <Row>
          <nav>
              {listSocials}
          </nav>
        </Row>
    </Container>
  );
}

export default Footer;