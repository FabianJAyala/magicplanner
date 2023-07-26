import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/Styles/Divider.css';

function Divider() {
  return (
    <Container className="divider-background" fluid>
      <Row className="d-flex align-items-center justify-content-center">
        <Col md={6}>
          <h4>¡Te ayudo a planear tu viaje!</h4>
          <p style={{ color: 'white' }}>Con mis servicios, te garantizo una experiencia de viaje sin complicaciones y sin costos adicionales, con los precios oficiales de Disney y Universal.</p>
        </Col>
        <Col md={6} className="d-flex align-items-center justify-content-md-end">
          <Link to="/quote"><Button className="divider-btn" variant="dark" href="#quote">Solicitar Cotización</Button></Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Divider;
