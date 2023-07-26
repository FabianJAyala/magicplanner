import ParkBG from "../../Images/AnimalKingdom/Animal-Kingdom.jpg"
import ParkRidesBG from "../../Images/Stars-Background.jpg"
import KaliRiver from "../../Images/AnimalKingdom/Kali-River-Rapids.jpg";
import GorillaFalls from "../../Images/AnimalKingdom/Gorilla-Falls-Exploration.jpg";
import Kilimanjaro from "../../Images/AnimalKingdom/Kilimanjaro-Safaris.jpg";
import Everest from "../../Images/AnimalKingdom/Expedition-Everest.jpg";
import Avatar from "../../Images/AnimalKingdom/Avatar-Flight-Passage.jpg";
import NaViRiver from "../../Images/AnimalKingdom/Navi-River.jpg";
import WideAnimalKingdom from "../../Images/AnimalKingdom/Animal-Kingdom-Park.jpg";
import AnimalKingdomRides from "../../Images/AnimalKingdom/Animal-Kingdom-Rides.jpg";
import AnimalKingdomEntrance from "../../Images/AnimalKingdom/Animal-Kingdom-Entrance.jpg";
import ParkMapBG from "../../Images/Disney-Pattern.png";
import ParkMap from "../../Images/AnimalKingdom/Animal-Kingdom-Map.jpg";
import ParkShowsBG from "../../Images/Dark-Stars-Background.jpg"
import LionKing from "../../Images/AnimalKingdom/The-Lion-King.jpg";
import Mickey from "../../Images/AnimalKingdom/Mickey-And-Friends-Flotilla.jpg";
import Nemo from "../../Images/AnimalKingdom/Finding-Nemo-Show.jpg";
import RiverCruise from "../../Images/AnimalKingdom/Discovery-River-Character-Cruise.jpg";
import Donald from "../../Images/AnimalKingdom/Donalds-Dino-Bash-Flotilla.jpg";
import Feathered from "../../Images/AnimalKingdom/Feathered-Friends-in-Flight.jpg";
import FlameTree from "../../Images/AnimalKingdom/Flame-Tree-BBQ.jpg";
import Satuli from "../../Images/AnimalKingdom/Satuli-Canteen.jpg";
import Rainforest from "../../Images/AnimalKingdom/Rainforest-Cafe.jpg";
import YakYeti from "../../Images/AnimalKingdom/Yak-Yeti-Restaurant.jpg";
import ElephantIcon from "../../Images/AnimalKingdom/Elephant-Icon.png";
import SunIcon from "../../Images/AnimalKingdom/Sun-Icon.png";
import MickeyIcon from "../../Images/AnimalKingdom/Mickey-Icon.png";
import DisneyParksInfo from './DisneyParksInfo';

const rides = [
    {
        name: "Kali River Rapids",
        photo: KaliRiver,
        alt: "Animal Kingdom Kali River Rapids",
        description: "Ofrece una emocionante aventura acuática. A bordo de una balsa, los visitantes se embarcan en un viaje por un río turbulento rodeado de exuberante vegetación y paisajes impresionantes."
    },
    {
        name: "Gorilla Falls Exploration Trail",
        photo: GorillaFalls,
        alt: "Animal Kingdom Gorilla Falls Exploration Trail",
        description: "Adéntrate en el denso bosque y descubre a algunas de las majestuosas criaturas de la naturaleza en su hábitat natural. No solo te toparás con los intrépidos gorilas, también tendrás la oportunidad de ver hipopótamos y aves africanas."
    },
    {
        name: "Kilimanjaro Safaris",
        photo: Kilimanjaro,
        alt: "Animal Kingdom Kilimanjaro Safaris",
        description: "Disfruta de una excursión guiada a través de una sabana donde habitan animales exóticos y algunas de las especies más emblemáticas del continente africano."
    },
    {
        name: "Expedition Everest",
        photo: Everest,
        alt: "Animal Kingdom Expedition Everest",
        description: "Súbete en un recorrido a través del Himalaya en un tren a toda velocidad en Expedition Everest, pero no solo recorrerás la montaña, ya que el viaje da un giro inesperado cuando te topas con el enorme Yeti que habita en este risco."
    },
    {
        name: "Avatar Flight of Passage",
        photo: Avatar,
        alt: "Animal Kingdom Avatar Flight of Passage",
        description: "Adéntrate en el mundo de Avatar y súbete en el lomo de un Banshee montañés mientras recorres la luna en Avatar Flight of Passage, un viaje en 3D que te llevará a lugares desconocidos."
    },
    {
        name: "Na’vi River of Journey",
        photo: NaViRiver,
        alt: "Animal Kingdom Na’vi River of Journey",
        description: "Entra al interior de la espléndida selva bioluminiscente en búsqueda de Na’vi Shaman of Songs en Na’vi River of Journey, un viaje único donde podrás apreciar la belleza de esta selva."
    },
];

const panoramic = [
    {
        name: "Animal Kingdom Park",
        photo: WideAnimalKingdom,
        alt: "Animal Kingdom Park",
    },
    {
        name: "Animal Kingdom Rides",
        photo: AnimalKingdomRides,
        alt: "Animal Kingdom Rides",
    },
    {
        name: "Animal Kingdom Entrance",
        photo: AnimalKingdomEntrance,
        alt: "Animal Kingdom Entrance",
    },
];

const shows = [
    {
        name: "Festival of the Lion King",
        photo: LionKing,
        alt: "Festival of the Lion King",
        description: "Disfruta de un espectáculo estilo Broadway repleto de canciones, actores y títeres enormes, que celebran la clásica película The Lion King."
    },
    {
        name: "Mickey and Friends Flotilla",
        photo: Mickey,
        alt: "Mickey and Friends Flotilla",
        description: "Mickey y sus amigos te saludarán desde su bote, mientras navegan por el río, una experiencia que grandes y chicos podrán disfrutar por igual."
    },
    {
        name: "Finding Nemo Show",
        photo: Nemo,
        alt: "Finding Nemo Show",
        description: "Sumérgete en un increíble espectáculo escénico, con marionetas, cantantes y otros artistas, ambientado en el mundo submarino de Finding Nemo de Disney y Pixar."
    },
    {
        name: "Discovery River Character Cruise",
        photo: RiverCruise,
        alt: "Discovery River Character Cruise",
        description: "Los personajes de Pocahontas y El Rey León aguardan por ti en este desfile flotante que se lleva a cabo en el Discovery River."
    },
    {
        name: "Donald 's Dino Bash Flotilla",
        photo: Donald,
        alt: "Donald 's Dino Bash Flotilla",
        description: "Donald y sus amigos trasladaron su icónica celebración, Dino Bash, al río, con un bote lleno de mucha diversión, y las ocurrencias de Donald."
    },
    {
        name: "Feathered Friends in Flight!",
        photo: Feathered,
        alt: "Feathered Friends in Flight!",
        description: "Conoce todas las aves que hacen vida en Animal Kingdom Park y descubre de primera mano cómo las cuidan y entrenan en Feathered Friends in Flight!, una experiencia ideal para los amantes de la fauna."
    },
];

const restaurants = [
    {
        name: "Flame Tree Barbecue",
        photo: FlameTree,
        alt: "Flame Tree Barbecue Restaurant",
        description: "Deléitate con las vistas y con una variedad de platos de carne ahumada y de pollo, servidos con nuestros exclusivos frijoles horneados y ensalada de repollo."
    },
    {
        name: "Satu'li Canteen",
        photo: Satuli,
        alt: "Satu'li Canteen",
        description: "una experiencia culinaria única y temática. Ubicado en el área de Pandora - The World of Avatar, este restaurante te sumerge en la cultura de los Na'vi, la especie indígena de la película."
    },
    {
        name: "Rainforest Cafe",
        photo: Rainforest,
        alt: "Animal Kingdom Rainforest Cafe",
        description: "Adéntrate en el espectácular ambiente de Rainforest Cafe, un restaurante con decoración africana que dispone de Cocina Americana y cenas exclusivas/temáticas."
    },
    {
        name: "Yak & Yeti Restaurant",
        photo: YakYeti,
        alt: "Yak & Yeti Restaurant",
        description: "Es un restaurante con servicio de mesa que ofrece platos deliciosos de varias regiones de Asia. Aquí podrás disfrutar de exquisitos platillos chinos, gran variedad de mariscos y cocina americana."
    },
];

const parkInfo = [
    {
        icon: ElephantIcon,
        alt: "Elephant Icon",
        message: [
            "Al mediodía la fila en la atracción Kilimanjaro Safaris tiende a hacerse más corta. Ese es el momento perfecto para visitarla, sin embargo, la experiencia es increíble a cualquier hora del día.",
            "Island Mercantile en Discovery Island se mantiene abierto por al menos una media hora más luego del cierre oficial del parque.",
            "Si está en sus planes visitar Avatar Flight of Passage (debería), prepárese para una larga espera y caminata: La distancia desde la entrada de la atracción y el recorrido en sí mismo es más de un cuarto de milla. Use zapatos cómodos y asegúrese de ir al baño antes.",
        ]
    },
    {
        icon: SunIcon,
        alt: "Sun Icon",
        message: [
            "La mayoría de las atracciones en Animal Kingdom son al aire libre, por lo que se recomienda hacer paradas entre atracciones en tiendas o reservar en algún restaurante que cuente con aire acondicionado para evitar el sobrecalentamiento.",
            "Cuando el clima esté bastante caluroso no olvide tener una botella de agua a la mano en todo momento.",
            "Animal Kingdom Park incluye una recreación muy realista de partes de África, incluyendo el clima, por lo que es recomendable llegar temprano en la mañana o luego del atardecer (los días en que el parque abra tarde).",
        ]
    },
    {
        icon: MickeyIcon,
        alt: "Mickey Icon",
        message: [
            "El Mundo de Rafiki es un área temática dedicada al querido personaje de la película El Rey León. Este encantador rincón del parque invita a los visitantes a sumergirse en el colorido y vibrante mundo de la sabana africana.",
            "Puedes explorar la Ruka Uzuri, una aldea africana tradicional, y disfrutar de experiencias interactivas y educativas. Desde talleres de arte y música hasta encuentros con personajes de El Rey León, como Rafiki y Timón.",
            "Además, puedes aprender sobre la conservación de la vida silvestre y la importancia de proteger los ecosistemas naturales. Es un lugar mágico donde la imaginación y el aprendizaje se unen en una experiencia inolvidable para toda la familia.",
        ]
    },
];

function AnimalKingdomInfo() {
  return (
    <DisneyParksInfo
        parkBackground={ParkBG}
        parkTitle="Animal Kingdom, ¡Explora la magia de la naturaleza!"
        ridesBackground={ParkRidesBG}
        rides={rides}
        panoramic={panoramic}
        mapBackground={ParkMapBG}
        parkMap={ParkMap}
        showsBackground={ParkShowsBG}
        shows={shows}
        restaurants={restaurants}
        parkInfo={parkInfo}
    />
  );
}

export default AnimalKingdomInfo;
