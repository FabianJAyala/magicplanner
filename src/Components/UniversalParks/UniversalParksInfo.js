import { Container, Row, Col, Image, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Components/Styles/UniversalParksInfo.css";
import Divider from "../TemplateComp/Divider";

function UniversalParksInfo(props) {
    const listPanoramic = props.panoramic.map((panoramic, index) => {
        return (
            <Carousel.Item key={index} interval={3000}>
                <img
                    className="d-block w-100"
                    src={panoramic.photo}
                    alt={panoramic.alt}
                />
                <Carousel.Caption>
                    <h3>{panoramic.name}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        )
    });

    const listRides = props.rides.map((rides, index) => {
        return (
          <Col key={index} md="4" className="mb-3">
            <Card style={{ backgroundColor: "#eaebf3" }}>
                <Card.Img variant="top" src={rides.photo} fluid alt={rides.alt} className="rounded mb-2"/>
                <Card.Body >
                    <Card.Title className="mb-3" style={{ fontWeight: "bold" }}>{rides.name}</Card.Title>
                    <Card.Text>{rides.description}</Card.Text>
                </Card.Body>
            </Card>
          </Col>
        )
    });

    const listRestaurants = props.restaurants.map((restaurants, index) => {
        return (
          <Col key={index} md="6" className="mb-3">
            <Card>
                <Card.Img variant="top" src={restaurants.photo} fluid alt={restaurants.alt} className="rounded mb-2"/>
                <Card.Body >
                    <Card.Title className="mb-3" style={{ fontWeight: "bold" }}>{restaurants.name}</Card.Title>
                    <Card.Text>{restaurants.description}</Card.Text>
                </Card.Body>
            </Card>
          </Col>
        )
    });

  return (
    <Container fluid>
        <Row className="universal-park-info align-items-center" align="center" style={{ backgroundImage: `url(${props.parkBackground})` }}>
            <h1 style={{ color: "#ffffff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", fontWeight: "bold" }}>
                {props.parkTitle}
            </h1>
        </Row>
        <Row className="universal-park-rides" align="center" style={{ backgroundImage: `url(${props.ridesBackground})` }}>
            <h2 className="mb-3">Atracciones Que No Puedes Perderte</h2>
            <Carousel className="mb-3 p-0" variant="light">
                {listPanoramic}
            </Carousel>
            {listRides}
        </Row>
        <Row>
            <Divider/>
        </Row>
        <Row className="universal-park-map"align="center">
            <h2 className="mb-3">Mapa del Parque</h2>
            <Image src={props.parkMap}/>
        </Row>
        <Row className="universal-clouds-row">
        </Row>
        <Row className="universal-park-restaurants" align="center" style={{ background: "#122151" }}>
            <h2 className="mt-3 mb-3" style={{ color: "#ffffff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Restaurantes Destacados</h2>
            {listRestaurants}
        </Row>
    </Container>
  );
}

export default UniversalParksInfo;
