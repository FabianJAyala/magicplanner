import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Components/Styles/About.css";
import {  faClock, faLightbulb, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import certifications from "../../Images/Parks-Certifications.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
    return(
        <Container className="mt-5 mb-3 justify-content-center" style={{ paddingLeft: "5%", paddingRight: "5%" }}>
            <Row className="mb-3" align="center" style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                <h2 className="mb-3">Acerca de mí</h2>
                <p>Descubre la magia conmigo, como Agente Certificado de Disney y Universal, estoy lista para brindarte los mejores precios, opciones de pago y consejos para tu viaje. ¡Aventuras inolvidables te esperan!</p>
            </Row>
            <Row className="mb-4" align="center">
                <h4>¿Por qué trabajar conmigo? ¿Qué puedo hacer por ti?</h4>
            </Row>
            <Row className="reasons-boxes" align="center">
                <Col className="col-box" md={4}>
                    <FontAwesomeIcon icon={faLightbulb} size="3x" style={{color: "#ba85b2"}}/>
                    <h4 className="mt-3 mb-3">Consejos de Experta</h4>
                    <p>Compartiré contigo valiosos consejos y tips para aprovechar al máximo tu estancia en los parques, lo que te permitirá disfrutar de atracciones, espectáculos, restaurants y shopping.</p>
                </Col>
                <Col className="col-box" md={4}>
                    <FontAwesomeIcon icon={faClock} size="3x" style={{color: "#ba85b2"}}/>
                    <h4 className="mt-3 mb-3">Flexibilidad de Itinerarios</h4>
                    <p>Si surgen cambios en tus planes, como modificaciones en fechas o ajustes en el itinerario, me encargo de gestionarlos de manera eficiente, asegurándote de que todo salga según lo previsto.</p>
                </Col>
                <Col md={4}>
                    <FontAwesomeIcon icon={faMoneyBillTrendUp} size="3x" style={{color: "#ba85b2"}}/>
                    <h4 className="mt-3 mb-3">Descuentos y Ofertas</h4>
                    <p>Tengo acceso a promociones exclusivas y descuentos que garantizan obtener las mejores ofertas para tu viaje. Ayudando con la creación de itinerarios y recomendaciones a medida.</p>
                </Col>
            </Row>
            <Row className="certifications" align="center">
                <Image src={certifications} fluid alt="Disney, Universal and Sea World Certifications"/>
            </Row>
        </Container>
    );
}

export default About;