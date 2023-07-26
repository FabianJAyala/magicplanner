import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Components/Styles/ContactLinks.css";
import { faPhone, faShareNodes, faEnvelope, faAt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdriMagicPlanner from "../../Images/Contact/Adri-Magic-Planner-In-The-Parks.jpg"

function ContactLinks() {
  return (
    <Container className="mb-5 justify-content-center" fluid>
      <Row>
        <Image className="p-0" src={AdriMagicPlanner} alt="Adri Magic Planner in the parks"/>
      </Row>
      <Row className="mb-3" align="center" style={{ marginTop: "5%" }}>
        <h1 className="mb-3">¡Empieza a planificar tu viaje ideal hoy mismo!</h1>
        <p>Sigue mis redes sociales donde estarán todas las ofertas y promociones especiales.</p>
      </Row>
      <Row className="contact-boxes" align="center" style={{ paddingLeft: "10%", paddingRight: "10%", marginBottom: "5%" }}>
        <Col className="contact-box" md={4}>
          <FontAwesomeIcon icon={faPhone} size="3x" style={{ color: "#af5fa3" }} />
          <h4 className="mt-3 mb-3" style={{ color: "#af5fa3", fontWeight: "bold" }}>Mensajes por Whatsapp</h4>
          <a href={"https://wa.link/zdwz6d"} target="_blank" rel="noopener noreferrer">
            <p className="mt-3 mb-3"><FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: "24px", color: "#122151" }} /> +1 407 717 4586</p>
          </a>
        </Col>
        <Col className="contact-box" md={4}>
          <FontAwesomeIcon icon={faShareNodes} size="3x" style={{ color: "#af5fa3" }} />
          <h4 className="mt-3 mb-3" style={{ color: "#af5fa3", fontWeight: "bold"}}>Mis Redes Sociales</h4>
          <a href={"https://www.facebook.com/adri.magicplanner"} target="_blank" rel="noopener noreferrer">
            <p className="mt-3 mb-3"><FontAwesomeIcon icon={faFacebook} style={{ fontSize: "24px", color: "#122151" }} /> Adri Magic Planner</p>
          </a>
          <a href={"https://www.instagram.com/adri.magicplanner"} target="_blank" rel="noopener noreferrer">
            <p className="mt-3 mb-3"><FontAwesomeIcon icon={faInstagram} style={{ fontSize: "24px", color: "#122151" }} /> @adri.magicplanner</p>
          </a>
        </Col>
        <Col className="contact-box" md={4}>
          <FontAwesomeIcon icon={faEnvelope} size="3x" style={{ color: "#af5fa3" }} />
          <h4 className="mt-3 mb-3" style={{ color: "#af5fa3", fontWeight: "bold" }}>Consultas por Email</h4>
          <a href="mailto:adri.magicplanner@gmail.com">
            <p className="mt-3 mb-3"><FontAwesomeIcon icon={faAt} style={{ fontSize: "24px", color: "#122151" }} /> adri.magicplanner@gmail.com</p>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactLinks;
