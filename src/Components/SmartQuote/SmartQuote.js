import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Components/Styles/SmartQuote.css";
import MagicKingdom from "../../Images/SmartQuotation/Magic-Kingdom.jpg";
import EPCOT from "../../Images/SmartQuotation/EPCOT.jpg";
import HollywoodStudios from "../../Images/SmartQuotation/Hollywood-Studios.jpg";
import AnimalKingdom from "../../Images/SmartQuotation/Animal-Kingdom.jpg";
import UniversalStudios from "../../Images/SmartQuotation/Universal-Studios.jpg";
import IslandsOfAdventure from "../../Images/SmartQuotation/Islands-Of-Adventure.jpg";
import VolcanoBay from "../../Images/SmartQuotation/Volcano-Bay.jpg";
import ResortHotel from "../../Images/SmartQuotation/Disney-Resort.jpg";
import DeluxeHotel from "../../Images/SmartQuotation/Disney-Deluxe-Hotel.jpg";


function SmartQuote() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [numberOfPeople, setNumberOfPeople] = useState(2);
  const [selectedHotel, setSelectedHotel] = useState(null);

const DisneyParks = [
    {
      name: "Magic Kingdom",
      photo: MagicKingdom,
      alt: "Disney Magic Kingdom",
      description: "Magic Kingdom es el icónico parque de Disney, donde los sueños se hacen realidad. Ofrece atracciones emocionantes, desfiles encantadores y encuentros mágicos con los personajes."
    },
    {
      name: "EPCOT",
      photo: EPCOT,
      alt: "EPCOT",
      description: "EPCOT es un parque temático único, donde la innovación y la cultura se encuentran. Ofrece atracciones futuristas, espectáculos culturales y delicias culinarias de todo el mundo."
    },
    {
      name: "Hollywood Studios",
      photo: HollywoodStudios,
      alt: "Disney Hollywood Studios",
      description: "Hollywood Studios es un vibrante parque temático que celebra el mundo del entretenimiento. Ofrece emocionantes atracciones, espectáculos en vivo y la magia del cine."
    },
    {
      name: "Animal Kingdom",
      photo: AnimalKingdom,
      alt: "Disney Animal Kingdom",
      description: "Animal Kingdom es un parque temático que combina diversión y conservación. Ofrece aventuras en safaris, atracciones emocionantes y la magia de la naturaleza y la vida animal."
    },
  ];

  const UniversalParks = [
    {
      name: "Universal Studios",
      photo: UniversalStudios,
      alt: "Universal Studios",
      description: "Universal Studios es un emocionante parque temático que te transporta al mundo del cine y la televisión. Ofrece atracciones emocionantes, espectáculos en vivo y encuentros con personajes famosos."
    },
    {
      name: "Islands of Adventure",
      photo: IslandsOfAdventure,
      alt: "Universal Islands of Adventure",
      description: "Island of Adventure es un parque temático en Universal Orlando Resort, donde la emoción y la fantasía se unen. Ofrece emocionantes montañas rusas, mundos mágicos y encuentros con superheroes."
    },
    {
      name: "Volcano Bay",
      photo: VolcanoBay,
      alt: "Universal Volcano Bay",
      description: "Volcano Bay es un parque acuático, donde la emoción y la diversión se fusionan en un paraíso tropical. Ofrece toboganes acuáticos, ríos serenos y emocionantes aventuras bajo el sol."
    }
  ];

  const HotelTypes = [
    {
      name: "Resort Hotel",
      photo: ResortHotel,
      alt: "Disney Resort Hotel",
      description: "Disfruta de cómodas habitaciones, piscinas temáticas y transporte gratuito a los parques. A un precio competitivo con los hoteles convencionales."
    },
    {
      name: "Deluxe Hotel",
      photo: DeluxeHotel,
      alt: "Disney Deluxe Hotel",
      description: "Experiencia de ensueño y comodidades exclusivas. Disfruta de impresionantes piscinas, restaurantes gourmet y servicio único en un ambiente mágico."
    }
  ];

  const toggleSelection = (image) => {
    setSelectedImages((prevSelectedImages) => {
      if (prevSelectedImages.includes(image)) {
        return prevSelectedImages.filter((selectedImage) => selectedImage !== image);
      } else {
        return [...prevSelectedImages, image];
      }
    });
  };

  const isImageSelected = (image) => {
    return selectedImages.includes(image);
  };

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(Number(event.target.value));
  };

  const handleHotelToggle = (hotel) => {
    setSelectedHotel(hotel);
  };

  const listHotels = (hotels) => hotels.map((hotels, index) => {
    return (
      <Col key={index} md="3" className="mb-3">
        <Card style={{ backgroundColor: "#eaf3fe" }}>
          <Card.Img variant="top" src={hotels.photo} fluid alt={hotels.alt} className="rounded mb-2"/>
          <Card.Body >
            <Card.Title>{hotels.name}</Card.Title>
            <Card.Text>{hotels.description}</Card.Text>
            <Button
                variant="dark"
                className={selectedHotel === hotels.name ? "select-btn" : "selected-btn"}
                onClick={() => handleHotelToggle(hotels.name)}
              >
                {selectedHotel === hotels.name ? "Seleccionado" : "Selecccionar"}
              </Button>
          </Card.Body>
        </Card>
      </Col>
    )
  });

  const listParks = (parks, bgColor) => parks.map((park, index) => {
     return (
      <Col key={index} md="3" className="mb-3">
        <Card style={{ backgroundColor: bgColor }}>
          <Card.Img variant="top" src={park.photo} fluid alt={park.alt} className="rounded mb-2" />
          <Card.Body>
            <Card.Title>{park.name}</Card.Title>
            <Card.Text>{park.description}</Card.Text>
            <Button
              variant="dark"
              className={isImageSelected(park.photo) ? "select-btn" : "selected-btn"}
              onClick={() => toggleSelection(park.photo)}
            >
              {isImageSelected(park.photo) ? "Seleccionado" : "Seleccionar"}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });


  const minAmount = (numPeople, hotelType, numParks) => {
    let numRooms = Math.ceil(numPeople/4);
    let hotelPrice = (hotelType === "Resort Hotel" ? 170 : 500);
    let parkTotal = (numParks * 100)
    let totalPrice = (numRooms*hotelPrice*(numParks+1))+parkTotal
    return totalPrice;
  };

  const maxAmount = (numPeople, hotelType, numParks) => {
    let numRooms = Math.ceil(numPeople/4);
    let hotelPrice = (hotelType === "Resort Hotel" ? 250 : 700);
    let parkTotal = (numParks * 140)
    let totalPrice = (numRooms*hotelPrice*(numParks+1))+parkTotal
    return totalPrice;
  };

  return (
    <Container align="center" className="mt-3" fluid>
      <Row className="mb-3">
        <h1 className="mb-3">Cotización Smart</h1>
        <h5>Siguiendo 3 sencillos pasos, puedes obtener un presupuesto estimado para tu vacación en Orlando.</h5>
      </Row>
      <Row className="people-quantity">
        <h2 className="mb-3"><strong>Paso 1. </strong>Seleccione la cantidad de personas</h2>
        <Col md={4}>
          <Form>
            <Form.Group controlId="formRange">
              {numberOfPeople <= 1 ? (
                <h5>{numberOfPeople} integrante</h5>
              ) : (
                <h5>{numberOfPeople} integrantes</h5>
              )}
              <div className="d-flex justify-content-between">
                <span>1</span>
                <span>12</span>
              </div>
              <input
                type="range"
                min={1}
                max={12}
                step={1}
                value={numberOfPeople}
                onChange={handleNumberOfPeopleChange}
                className="custom-range"
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="hotel-type">
        <h2 className="mb-3"><strong>Paso 2. </strong>Seleccione el tipo de hotel</h2>
        {listHotels(HotelTypes)}
      </Row>
      <Row className="disney-park-selection">
        <h2 className="mb-4"><strong>Paso 3. </strong>Seleccione los parques que desea visitar</h2>
        <h3>Disney World</h3>
        {listParks(DisneyParks, "#ffffff")}
      </Row>
      <Row className="universal-park-selection">
        <h3 className="mb-3">Universal Orlando</h3>
        {listParks(UniversalParks, "#eaf3fe")}
      </Row>
      <Row className="quotation-result">
        <h3 className="mb-3"><strong>Resultado de la Cotización</strong></h3>
        {selectedHotel ? (
          <>
            <h4>El total del presupuesto estimado es entre: <strong>{minAmount(numberOfPeople, selectedHotel, selectedImages.length)} - {maxAmount(numberOfPeople, selectedHotel, selectedImages.length)} USD</strong></h4>
            <h4>Incluyendo: {selectedImages.length + 2} días y {selectedImages.length + 1} noches en un {selectedHotel}.</h4>
            <h4>Y un total de {selectedImages.length} {selectedImages.length > 1 ? "parques" : "parque"}.</h4>
          </>
        ) : (
          <h4>* Porfavor seleccione una opción de Hotel</h4>
        )}
      </Row>
    </Container>
  );
}

export default SmartQuote;
