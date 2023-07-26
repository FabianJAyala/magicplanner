import { Container, Row, Col, Image, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Components/Styles/DisneyParksInfo.css";
import Divider from "../TemplateComp/Divider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function DisneyParksInfo(props) {
    const listRides = props.rides.map((rides, index) => {
        return (
          <Col key={index} md="4" className="mb-3">
            <Card style={{ backgroundColor: "#eaf3fe" }}>
                <Card.Img variant="top" src={rides.photo} fluid alt={rides.alt} className="rounded mb-2"/>
                <Card.Body >
                    <Card.Title className="mb-3" style={{ fontWeight: "bold" }}>{rides.name}</Card.Title>
                    <Card.Text>{rides.description}</Card.Text>
                </Card.Body>
            </Card>
          </Col>
        )
    });

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

    const listShows = props.shows.map((shows, index) => {
        return (
          <Col key={index} md="4" className="mb-3">
            <Card>
                <Card.Img variant="top" src={shows.photo} fluid alt={shows.alt} className="rounded mb-2"/>
                <Card.Body >
                    <Card.Title className="mb-3" style={{ fontWeight: "bold" }}>{shows.name}</Card.Title>
                    <Card.Text>{shows.description}</Card.Text>
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

    const listParkInfo = props.parkInfo.map((parkInfo, index) => {
        return(
            <Col key={index} md={4}>
                <Image src={parkInfo.icon} alt={parkInfo.alt} height={50} className="mb-3" align="center"/>
                <ul class="fa-ul" align="left" style={{color: "#ffffff"}}>
                    {parkInfo.message.map(info => (
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#ba85b2", marginRight: "5px" }} />
                            {info}
                         </li>
                    ))}
                </ul>
            </Col>
        )
    });

  return (
    <Container fluid>
        <Row className="disney-park-info align-items-center" align="center" style={{ backgroundImage: `url(${props.parkBackground})` }}>
            <h1 style={{ color: "#ffffff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", fontWeight: "bold" }}>
                {props.parkTitle}
            </h1>
        </Row>
        <Row className="disney-park-rides" align="center" style={{ backgroundImage: `url(${props.ridesBackground})` }}>
            <h2 className="mb-3">Atracciones Que No Puedes Perderte</h2>
            {listRides}
        </Row>
        <Row>
            <Carousel className="p-0" variant="light">
                {listPanoramic}
            </Carousel>
        </Row>
        <Row className="disney-park-map"align="center" style={{ backgroundImage: `url(${props.mapBackground})` }}>
            <h2 className="mb-3">Mapa del Parque</h2>
            <Image src={props.parkMap}/>
        </Row>
        <Row>
            <Divider/>
        </Row>
        <Row className="disney-park-shows" align="center" style={{ backgroundImage: `url(${props.showsBackground})` }}>
            <h2 className="mb-3" style={{ color: "#ffffff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                Shows Destacados
            </h2>
            {listShows}
        </Row>
        <Row className="disney-park-restaurants" align="center" style={{ background: "linear-gradient(to bottom, #122151, #ba85b2)" }}>
            <h2 className="mb-3" style={{ color: "#ffffff", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Restaurantes Destacados</h2>
            {listRestaurants}
        </Row>
        <Row className="disney-clouds-row" style={{ backgroundColor: "#ba85b2"}}>
        </Row>
        <Row className="disney-general-park-info" align="center">
            <h2 className="mt-3 mb-3">Lo Que Debes Saber</h2>
            {listParkInfo}
        </Row>
    </Container>
  );
}

export default DisneyParksInfo;
