import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Components/Styles/QuoteForm.css";
import FormTemplate from './FormTemplate';
import parks from "../../Images/Adri-Magic-Planner.jpg";

function QuoteForm() {
  return (
    <Container fluid>
      <Row>
        <Col md={6} className="image-container">
          <img src={parks} alt="Parks" className="form-image" />
        </Col>
        <Col className="form-temp mb-3" md={6}>
          <h1 className="mb-5">Obten tu cotización personalizada!</h1>
          <FormTemplate />
        </Col>
      </Row>
    </Container>
  );
}

export default QuoteForm;
