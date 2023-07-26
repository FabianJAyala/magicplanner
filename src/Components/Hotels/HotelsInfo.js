import { Container, Row, Col, Card, Image, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Components/Styles/HotelsInfo.css";
import Divider from "../TemplateComp/Divider";

function HotelsInfo(props) {

  const listHotels = (hotels) => {
    const totalHotels = hotels.length;
    const md = totalHotels > 2 ? 4 : 6;
    return hotels.map((hotel, index) => (
      <Col key={index} md={md} className="mb-3">
        <Card style={{ backgroundColor: "#eaf3fe" }}>
          <Card.Img variant="top" src={hotel.photo} fluid alt={hotel.alt} className="rounded mb-2" />
          <Card.Body>
            <Card.Title className="mb-3" style={{ fontWeight: "bold" }}>{hotel.name}</Card.Title>
            <Card.Text>{hotel.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  const listBenefits = props.benefits.map((benefits, index) => {
    return (
      <Col key={index} xs="6" md="4" className="mb-3">
        <Image className="mb-3" src={benefits.photo} alt={benefits.alt} height={50}/>
        <h5 style={{ color: "#ffffff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                {benefits.description}
        </h5>
      </Col>
    )
  });

  return (
    <Container fluid>
        <Row className="hotel-info align-items-center" align="center" style={{ backgroundImage: `url(${props.hotelBackground})` }}>
            <h1 style={{ color: "#ffffff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", fontWeight: "bold" }}>
                {props.hotelTitle}
            </h1>
        </Row>
        <Row className="hotel-types" align="center" style={{ backgroundImage: `url(${props.hotelTypesBackground})` }}>
          <h2 className="mb-3">Opciones de Hoteles</h2>
          <p className="mb-3">Aquí tienes todos los hoteles por categorías, para que elijas el que mejor se adapte a tu viaje.</p>
          <Tabs
            defaultActiveKey="Económicos"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="Económicos" title="Económicos">
              <Row>
                {listHotels(props.economicHotels)}
              </Row>
            </Tab>
            <Tab eventKey="Moderados" title="Moderados">
              <Row>
                {listHotels(props.standardHotels)}
              </Row>
            </Tab>
            <Tab eventKey="Lujosos" title="Lujosos">
              <Row>
                {listHotels(props.luxuryHotels)}
              </Row>
            </Tab>
            <Tab eventKey="Villas Lujosas" title="Villas Lujosas">
              <Row>
                {listHotels(props.luxuryVillas)}
              </Row>
            </Tab>
          </Tabs>
        </Row>
        <Row className="hotel-benefits" align="center" style={{ background: "linear-gradient(to bottom, #122151, #ba85b2)" }}>
            <h2 className="mb-5" style={{ color: "#ffffff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Beneficios del Hotel</h2>
            {listBenefits}
        </Row>
        <Row>
            <Divider/>
        </Row>
    </Container>
  );
}

export default HotelsInfo;