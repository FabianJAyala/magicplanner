import HotelBG from "../../Images/DisneyHotels/Disney-Hotel.jpg"
import TypesBG from "../../Images/Stars-Background.jpg"
import AllStarsMovies from "../../Images/DisneyHotels/All-Star-Movies-Hotel.jpg"
import AllStarsMusic from "../../Images/DisneyHotels/All-Star-Music-Hotel.jpg"
import AllStarsSports from "../../Images/DisneyHotels/All-Star-Sports-Hotel.jpg"
import ArtOfAnimation from "../../Images/DisneyHotels/Art-Of-Animation-Resort.jpg"
import PopCentury from "../../Images/DisneyHotels/Pop-Century-Resort.jpg"
import Caribbean from "../../Images/DisneyHotels/Caribbean-Beach-Resort.jpg"
import Coronado from "../../Images/DisneyHotels/Coronado-Springs-Resort.jpg"
import FortWilderness from "../../Images/DisneyHotels/Fort-Wilderness-Resort.jpg"
import AnimalLodge from "../../Images/DisneyHotels/Animal-Kingdom-Lodge.jpg"
import BeachClub from "../../Images/DisneyHotels/Beach-Club-Resort.jpg"
import Contemporary from "../../Images/DisneyHotels/Contemporary-Resort.jpg"
import CooperCreek from "../../Images/DisneyHotels/Copper-Creek-Villas.jpg"
import Jambo from "../../Images/DisneyHotels/Jambo-House.jpg"
import Riviera from "../../Images/DisneyHotels/Disneys-Riviera-Resort.jpg"
import Location from "../../Images/DisneyHotels/Near-Me-Icon.png"
import Clock from "../../Images/DisneyHotels/Clock-Icon.png"
import Parking from "../../Images/DisneyHotels/Parking-Icon.png"
import Bus from "../../Images/DisneyHotels/Bus-Icon.png"
import Restaurant from "../../Images/DisneyHotels/Restaurant-Icon.png"
import Box from "../../Images/DisneyHotels/Box-Icon.png"
import HotelsInfo from './HotelsInfo';


const economicHotels = [
    {
        name: "Disney’s All-Star Movies Resort​",
        photo: AllStarsMovies,
        alt: "Disney’s All-Star Movies Resort​",
        description: "Celebrando las clásicas películas de Disney como 101 dálmatas, Fantasía y Toy Story, Disney’s All-Star Movies Resort es una excelente opción para toda la familia.",
    },
    {
        name: "Disney’s All-Star Music Resort​",
        photo: AllStarsMusic,
        alt: "Disney’s All-Star Music Resort​",
        description: "Ideal para el disfrute de toda la familia, el Disney’s All-Star Music Resort rinde homenaje a los géneros musicales clásicos como el rock ‘n’ roll, el calypso y el jazz.",
    },
    {
        name: "Disney’s All-Star Sports Resort",
        photo: AllStarsSports,
        alt: "Disney’s All-Star Sports Resort​",
        description: "La pasión por el deporte está presente en cada rincón del Disney’s All-Star Sports Resort, donde podrás ver a los clásicos personajes de Disney en íconos gigantes.",
    },
    {
        name: "Disney’s Art of Animation Resort",
        photo: ArtOfAnimation,
        alt: "Disney’s Art of Animation Resort​",
        description: "Ambientado con los personajes de las películas Cars, Buscando a Nemo, El Rey León y La Sirenita, este hotel es una opción colorida y divertida para hospedarse.",
    },
    {
        name: "Disney’s Pop Century Resort",
        photo: PopCentury,
        alt: "Disney’s Pop Century Resort​",
        description: "Vibrante y retro, las palabras perfectas para describir al Pop Century Resort, donde en cada rincón encontrarás homenajes a las culturas populares desde los años 50’ hasta los 90’.",
    },
];


const standardHotels = [
    {
        name: "Disney's Caribbean Beach Resort​",
        photo: Caribbean,
        alt: "Disney's Caribbean Beach Resort​",
        description: "El espíritu isleño te espera, donde los huéspedes disfrutarán de acogedoras habitaciones al estilo colonial, relajantes paseos en velero, playas y tranquilos paseos en bicicleta.",
    },
    {
        name: "Disney’s Coronado Springs Resort​",
        photo: Coronado,
        alt: "Disney’s Coronado Springs Resort​",
        description: "Escapa al apacible sudoeste en el Disney’s Coronado Springs Resort, donde el espíritu del Mexico Colonial y el Lago Dorado brindarán a sus huéspedes una experiencia única.",
    },
    {
        name: "Cabañas Fort Wilderness Resort",
        photo: FortWilderness,
        alt: "Cabañas Fort Wilderness Resort",
        description: "Rodeadas de bosques de pinos y cipreses, estas cabañas son el escape perfecto para aquellos que buscan huir del agitado ritmo de la ciudad, y disfrutar de la naturaleza.",
    },
];

const luxuryHotels = [
    {
        name: "Disney’s Animal Kingdom Lodge​",
        photo: AnimalLodge,
        alt: "Disney’s Animal Kingdom Lodge​",
        description: "África cobra vida en Animal Kingdom Lodge. Aquí podrás disfrutar de las espléndidas vistas que te brinda la sabana que lo rodea, y contemplar numerosos animales que habitan en el hotel.",
    },
    {
        name: "Disney’s Beach Club Resort",
        photo: BeachClub,
        alt: "Disney’s Beach Club Resort​",
        description: "Rodeado por las tranquilas aguas de Crescent Lake y ambientado al estilo inglés, en Beach Club Resort los huéspedes podrán disfrutar de hermosas vistas y numerosas actividades acuáticas.",
    },
    {
        name: "Disney’s Contemporary Resort",
        photo: Contemporary,
        alt: "Disney’s Contemporary Resort",
        description: "Un hotel ultra moderno donde se descubre una gastronomía galardonada, vistas espectaculares y deslumbrantes piscinas. Encontrarás confort y estilo sin igual en cualquiera de los dos sectores.",
    },
];

const luxuryVillas = [
    {
        name: "Copper Creek Villas & Cabins",
        photo: CooperCreek,
        alt: "Copper Creek Villas & Cabins",
        description: "Siéntete cerca de la naturaleza al mismo tiempo que disfrutas de unas vacaciones inolvidables con todo el confort y diversión que tienen para ofrecer Copper Creek Villas & Cabins, un alojamiento ideal para toda la familia.",
    },
    {
        name: "Disney's Animal Kingdom Villas - Jambo House",
        photo: Jambo,
        alt: "Disney's Animal Kingdom Villas - Jambo House",
        description: "El espíritu de África te espera en Jambo House, donde las espaciosas instalaciones y las impresionantes vistas de la sabana tropical harán de su estadía una experiencia única.",
    },
    {
        name: "Disney’s Riviera Resort",
        photo: Riviera,
        alt: "Disney’s Riviera Resort",
        description: "Disfruta del estilo europeo contemporáneo en el nuevo integrante de la familia de hoteles Disney, el Disney’s Riviera Resort, que ofrece distintas opciones de alojamiento que se adaptan a cada grupo.",
    },
];

const benefits = [
    {
        photo: Location,
        alt: "Location Icon",
        description: "Cercanía a parques y sitios de interés",
    },
    {
        photo: Clock,
        alt: "Clock Icon",
        description: "Acceso antes de la hora de apertura oficial a los parques",
    },
    {
        photo: Parking,
        alt: "Parking Icon",
        description: "Estacionamiento gratis en los parques y hoteles del resort",
    },
    {
        photo: Bus,
        alt: "Bus Icon",
        description: "Transporte desde el hotel hacia los parques y Disney Springs",
    },
    {
        photo: Restaurant,
        alt: "Restaurant Icon",
        description: "Reservas anticipadas en restaurantes",
    },
    {
        photo: Box,
        alt: "Box Icon",
        description: "Delivery de compras a tu habitación de hotel",
    },
];

function DisneyHotelsInfo() {
  return (
    <HotelsInfo
        hotelBackground={HotelBG}
        hotelTitle="¡Vive la Magia al Máximo en un Hotel Disney!"
        hotelTypesBackground={TypesBG}
        economicHotels={economicHotels}
        standardHotels={standardHotels}
        luxuryHotels={luxuryHotels}
        luxuryVillas={luxuryVillas}
        benefits={benefits}
    />
  );
}

export default DisneyHotelsInfo;