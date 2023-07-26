import HotelBG from "../../Images/UniversalHotels/Universal-Hotel.jpg"
import TypesBG from "../../Images/Stars-Background.jpg"
import Dockside from "../../Images/UniversalHotels/Endless-Summer-Resort-Dockside.jpg"
import Surfside from "../../Images/UniversalHotels/Endless-Summer-Resort-Surfside.jpg"
import Cabana from "../../Images/UniversalHotels/Cabana-Bay-Beach-Resort.jpg"
import Aventura from "../../Images/UniversalHotels/Aventura-Hotel.jpg"
import Sapphire from "../../Images/UniversalHotels/Sapphire-Falls-Resort.jpg"
import Pacific from "../../Images/UniversalHotels/Royal-Pacific-Resort.jpg"
import HardRock from "../../Images/UniversalHotels/Hard-Rock-Hotel.jpg"
import Portofino from "../../Images/UniversalHotels/Portofino-Bay-Hotel.jpg"
import Castle from "../../Images/UniversalHotels/Castle-Icon.png"
import Volcano from "../../Images/UniversalHotels/Volcano-Icon.png"
import Path from "../../Images/UniversalHotels/Path-Icon.png"
import Key from "../../Images/UniversalHotels/Key-Icon.png"
import Clock from "../../Images/UniversalHotels/Clock-Icon.png"
import Bags from "../../Images/UniversalHotels/Bags-Icon.png"
import HotelsInfo from './HotelsInfo';

const economicHotels = [
    {
        name: "Universal's Endless Summer Resort - Dockside Inn & Suites​",
        photo: Dockside,
        alt: "Universal's Endless Summer Resort - Dockside Inn & Suites​",
        description: "Inspirado en los atardeceres, la playa y la arena, el Dockside Inn & Suites te cobijará con su vibra costera y sus tarifas super accesibles.",
    },
    {
        name: "Universal's Endless Summer Resort - Surfside Inn & Suites.​",
        photo: Surfside,
        alt: "Universal's Endless Summer Resort - Surfside Inn & Suites.​",
        description: "Disfruta de la vibra playera y de todas las comodidades con la tarifa más accesible en el nuevo Surfside Inn & Suites.",
    },
];


const standardHotels = [
    {
        name: "Universal's Cabana Bay Beach Resort​",
        photo: Cabana,
        alt: "Universal's Cabana Bay Beach Resort​",
        description: "El estilo retro te dará la bienvenida a este acogedor hotel con habitaciones y suites diseñadas para el confort y la diversión.",
    },
    {
        name: "Universal's Aventura Hotel​",
        photo: Aventura,
        alt: "Universal's Aventura Hotel​",
        description: "¡Alójate en el centro de la diversión! Podrás disfrutar de increíbles vistas hacia los parques temáticos y acuático, mientras te relajas en un ambiente moderno y con estilo.",
    },
];

const luxuryHotels = [
    {
        name: "Loews Sapphire Falls Resort​",
        photo: Sapphire,
        alt: "Loews Sapphire Falls Resort​",
        description: "Inspirado en los encantos del Caribe, el Loews Sapphire Falls Resort ofrece a sus huéspedes una atmósfera tropical con todas las comodidades necesarias para tu estadía.",
    },
    {
        name: "Loews Royal Pacific Resort",
        photo: Pacific,
        alt: "Loews Royal Pacific Resort​",
        description: "Un paraíso exótico aguarda por tí en el Loews Royal Pacific Resort, donde podrás relajarte y disfrutar de excelente gastronomía y auténticas celebraciones Luau.",
    },
];

const luxuryVillas = [
    {
        name: "Hard Rock Hotel",
        photo: HardRock,
        alt: "Hard Rock Hotel",
        description: "Vacaciona como todo un rockstar y disfruta del mejor entretenimiento en el Hard Rock Hotel.",
    },
    {
        name: "Loews Portofino Bay Hotel",
        photo: Portofino,
        alt: "Loews Portofino Bay Hotel",
        description: "ranspórtate a las villas de Italia en el Loews Portofino Bay Hotel, donde podrás relajarte y disfrutar de la auténtica Dolce Vita.",
    },
];

const benefits = [
    {
        photo: Castle,
        alt: "Castle Icon",
        description: "Entrada temprana a The Wizarding World of Harry Potter",
    },
    {
        photo: Volcano,
        alt: "Volcano Icon",
        description: "Entrada 1 hora antes a Universal’s Volcano Bay",
    },
    {
        photo: Path,
        alt: "Path Icon",
        description: "Caminerías conectadas con los parques",
    },
    {
        photo: Key,
        alt: "Key Icon",
        description: "Accede a los shows en CityWalk presentando tu llave de hotel",
    },
    {
        photo: Clock,
        alt: "Clock Icon",
        description: "Acceso antes de la hora de apertura oficial a los parques",
    },
    {
        photo: Bags,
        alt: "Bags Icon",
        description: "Despacho de compras directo a la habitación",
    },
];

function UniversalHotelsInfo() {
  return (
    <HotelsInfo
        hotelBackground={HotelBG}
        hotelTitle="Vive la Experiencia Completa en un Hotel de Universal Studios"
        hotelTypesBackground={TypesBG}
        economicHotels={economicHotels}
        standardHotels={standardHotels}
        luxuryHotels={luxuryHotels}
        luxuryVillas={luxuryVillas}
        benefits={benefits}
    />
  );
}

export default UniversalHotelsInfo;