import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Components/Styles/Intro.css";

function Intro({ scrollToAbout }) { // Receive scrollToAbout as a prop
  return (
    <Container className="intro-background-image" fluid>
        <Row>
            <Col className="intro-card" align="center">
                <h2 className="mb-3">¡Vive la magia de Disney y Universal!</h2>
                <p>Aquí encontrarás información sobre parques, hoteles y tips.<br/>¡Solicita una cotización y vive la magia de Disney y Universal!</p>
                <Button className="custom-btn" variant="dark" onClick={scrollToAbout}>Descubre más</Button>
            </Col>
        </Row>
    </Container>
  );
}

export default Intro;
