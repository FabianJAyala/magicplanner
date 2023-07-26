import ParkBG from "../../Images/EPCOT/EPCOT-At-Night.jpg"
import ParkRidesBG from "../../Images/Stars-Background.jpg"
import MissionSpace from "../../Images/EPCOT/Mission-Space.jpg";
import SpaceshipEarth from "../../Images/EPCOT/Spaceship-Earth.jpg";
import Guardians from "../../Images/EPCOT/Guardians-Of-The-Galaxy.jpg";
import FrozenEver from "../../Images/EPCOT/Frozen-Ever-After.jpg";
import Reflections from "../../Images/EPCOT/Reflections-Of-China.jpg";
import Ratatouille from "../../Images/EPCOT/Ratatouille.jpg";
import WideEPCOT from "../../Images/EPCOT/EPCOT-Panorama.jpg";
import WideRestaurant from "../../Images/EPCOT/Space-Restaurant-Panorama.jpg";
import WideEPCOTRides from "../../Images/EPCOT/EPCOT-Rides.jpg";
import ParkMapBG from "../../Images/Disney-Pattern.png";
import ParkMap from "../../Images/EPCOT/EPCOT-Map.jpg";
import ParkShowsBG from "../../Images/Dark-Stars-Background.jpg"
import EPCOTForever from "../../Images/EPCOT/EPCOT-Forever.jpg";
import DisneyPixar from "../../Images/EPCOT/Disney-And-Pixar-Short-Film.jpg";
import Harmonious from "../../Images/EPCOT/Harmonious.jpg";
import LaCantina from "../../Images/EPCOT/La-Cantina-de-San-Angel.jpg";
import RoseCrown from "../../Images/EPCOT/Rose-Crown-Dining-Room.jpg";
import Space220 from "../../Images/EPCOT/Space-220-Restaurant.jpg";
import LArtisan from "../../Images/EPCOT/LArtisan-Des-Glaces.jpg";
import MickeyIcon from "../../Images/EPCOT/Mickey-Icon.png";
import PhoneIcon from "../../Images/EPCOT/Phone-Icon.png";
import DinnerIcon from "../../Images/EPCOT/Dinner-Icon.png";
import DisneyParksInfo from './DisneyParksInfo';

const rides = [
    {
        name: "Mission: Space",
        photo: MissionSpace,
        alt: "EPCOT Mission Space",
        description: "Siéntete el espacio sin dejar de pisar tierra en este simulador construído con la asesoría de la NASA, en el que los visitantes se sentirán como verdaderos astronautas por unos minutos, mientras experimentan una fuerza G de gran aceleración para luego pasar a una sensación de completa ingravidez."
    },
    {
        name: "Spaceship Earth",
        photo: SpaceshipEarth,
        alt: "EPCOT Spaceship Earth",
        description: "Visita el interior de la geoesfera icónica de Epcot donde experimentarás un viaje a través de la historia de la humanidad, en un recorrido en un vehículo que recorre el borde interior de la esfera. Aquí los animatrónicos protagonizarán escenas que marcaron un hito en la evolución y la historia del hombre, y al salir del recorrido encontrarás una zona de juegos patrocinados por Siemens enfocados a la tecnología."
    },
    {
        name: "Guardians of the Galaxy: Cosmic Rewind",
        photo: Guardians,
        alt: "EPCOT Guardians of the Galaxy",
        description: "Una emocionante atracción que combina montaña rusa, tecnología innovadora y una historia intergaláctica protagonizada por los Guardianes de la Galaxia. A bordo de los Omni-Coasters, los visitantes se sumergen en una aventura llena de giros, efectos especiales y encuentros con los queridos personajes de la película. "
    },
    {
        name: "Frozen Ever After",
        photo: FrozenEver,
        alt: "EPCOT Frozen Ever After",
        description: "Embárcate en un bote a través de las aguas de Arendelle y disfruta del festival de “Invierno en Verano” en Frozen Ever After, donde Elsa utilizará sus poderes para hacer nevar durante el caluroso verano."
    },
    {
        name: "Reflections of China",
        photo: Reflections,
        alt: "EPCOT Reflections of China",
        description: "Conoce la cultura, las bellezas naturales y las tradiciones de China en Reflections of China, un film de 14 minutos que se proyecta en un domo de 360°, donde tendrás vistas panorámicas y podrás apreciar de forma plena todas las tomas."
    },
    {
        name: "Ratatouille",
        photo: Ratatouille,
        alt: "EPCOT Ratatouille",
        description: "En esta atracción, te conviertes en el tamaño de un ratón y te adentras en una emocionante aventura a través de la cocina de Gusteau. A bordo de tu vehículo especial, sigues los pasos del pequeño ratón Rémy mientras evitas obstáculos, descubres deliciosos ingredientes y te deslizas por las coloridas y vibrantes escenas culinarias de París."
    },
];

const panoramic = [
    {
        name: "EPCOT Park",
        photo: WideEPCOT,
        alt: "EPCOT Park",
    },
    {
        name: "Space Restaurant",
        photo: WideRestaurant,
        alt: "EPCOT Space Restaurant",
    },
    {
        name: "EPCOT Rides",
        photo: WideEPCOTRides,
        alt: "EPCOT Rides",
    },
];

const shows = [
    {
        name: "EPCOT Forever",
        photo: EPCOTForever,
        alt: "EPCOT Forever Shows",
        description: "una celebración de la historia y la visión de EPCOT a través de una combinación de música, luces deslumbrantes y efectos pirotécnicos espectaculares. A medida que la noche se ilumina, los visitantes son transportados a través de décadas de recuerdos mágicos mientras disfrutan de una banda sonora inolvidable."
    },
    {
        name: "Disney and Pixar Short Film Festival",
        photo: DisneyPixar,
        alt: "Disney and Pixar Short Film Festival",
        description: "Puede disfrutar populares cortometrajes de Disney y Pixar, ¡en asombroso 4D! Con 3 cortometrajes animados e increíbles efectos especiales escénicos. Antes de ingresar al teatro principal, no te pierdas las exhibiciones que muestran el proceso creativo detrás de estas populares historias y personajes.",
    },
    {
        name: "Harmonious",
        photo: Harmonious,
        alt: "EPCOT Harmonious",
        description: "Las culturas de todas partes del mundo y los personajes más queridos de Disney serán los protagonistas de este nuevo espectáculo nocturno. En Harmonious, podrás contemplar algunas de las historias más populares de Disney como nunca antes."
    },
];

const restaurants = [
    {
        name: "La Cantina de San Angel",
        photo: LaCantina,
        alt: "La Cantina de San Angel",
        description: "Este restaurante mexicano de servicio rápido se encuentra en el pabellón de México. Aquí puedes disfrutar de deliciosos tacos, nachos y quesadillas a precios accesibles, junto con una vista impresionante del World Showcase Lagoon."
    },
    {
        name: "Rose & Crown Dining Room",
        photo: RoseCrown,
        alt: "Rose & Crown Dining Room",
        description: "Este restaurante ofrece una auténtica experiencia británica y es conocido por su excelente versión de este plato inglés. El pescado se fríe en una cobertura crujiente y se sirve junto con papas fritas, todo acompañado de una salsa tártara deliciosa. "
    },
    {
        name: "Space 220 Restaurant",
        photo: Space220,
        alt: "Space 220 Restaurant",
        description: "Ofrece a los comensales la experiencia única de cenar en el espacio, con vistas panorámicas impresionantes de la Tierra. A través de un ascensor simulado, los visitantes son transportados a 220 millas sobre la Tierra, donde disfrutan de un menú innovador."
    },
    {
        name: "L'Artisan des Glaces Ice Cream ",
        photo: LArtisan,
        alt: "L'Artisan des Glaces Ice Cream ",
        description: "un destino irresistible para los amantes de los helados. Este encantador puesto de helados ofrece una selección de sabores exquisitos y auténticos inspirados en la tradición francesa. Con una variedad de opciones y helados innovadores."
    },
];

const parkInfo = [
    {
        icon: MickeyIcon,
        alt: "Mickey Icon",
        message: [
            "En su camino al parque, tome un mapa gratuito y una guía con los horarios de los shows que se llevarán a cabo.",
            "Los taxis acuáticos FriendShip te podrán transportar a World Showcase Lagoon pero no tan rápido como una caminata.",
            "Los niños y niñas pueden tener un libro de autógrafos o un pasaporte World Showscase (Con un costo aproximado de 10$) el cual puede ser sellado en cada uno de las 11 ciudades ubicadas en el parque. Una divertida manera de recordar su “world tour” en Epcot.",
        ]
    },
    {
        icon: PhoneIcon,
        alt: "Phone Icon",
        message: [
            "Use su celular o encuentre un kiosko en el parque para programar sus FastPass y así disfrutar de la mayor cantidad de atracciones como le sea posible (en caso de que no lo haya hecho antes).",
            "Las filas en el parque Epcot son más largas a mediodía y más cortas al iniciar la noche.",
            "Las fuentes interactivas que se encuentran en las distintas áreas de Epcot son una divertida manera de tener a sus invitados super frescos. Asegúrese de empacar trajes de baño y pañales a prueba de agua para los pequeños que deseen pasar mucho tiempo chapoteando en el agua.",
        ]
    },
    {
        icon: DinnerIcon,
        alt: "Dinner Icon",
        message: [
            "Durante las temporadas altas, se recomienda reservar rápido en los restaurantes con opción table-service, haga su reservación lo más pronto posible. Sin embargo, hay posibilidad de que algunos restaurantes cuenten con mesas disponibles para el día de su visita (pero probablemente tenga que esperar un poco). Recuerde llegar al menos unos cinco minutos antes de la hora de su reserva.",
            "Si quiere disfrutar de una vista única al cierre con fuegos artificiales, Nighttime Extravaganza, reserve su cena en el restaurante del sector México, La Hacienda de San Angel, con al menos una hora de anticipación del show.",
        ]
    },
];

function EPCOTInfo() {
  return (
    <DisneyParksInfo
        parkBackground={ParkBG}
        parkTitle="¡La tecnología y la diversidad cultural se fusionan en EPCOT!"
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

export default EPCOTInfo;
