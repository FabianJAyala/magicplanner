import ParkBG from "../../Images/MagicKingdom/Magic-Kingdom-Park.jpg"
import ParkRidesBG from "../../Images/Stars-Background.jpg"
import SpaceMountain from "../../Images/MagicKingdom/Space-Mountain.jpg";
import HauntedMansion from "../../Images/MagicKingdom/Haunted-Mansion.jpg";
import Pirates from "../../Images/MagicKingdom/Pirates-Of-Caribbean.jpg";
import JungleCruise from "../../Images/MagicKingdom/Jungle-Cruise.jpg";
import MagicCarpets from "../../Images/MagicKingdom/The-Magic-Carpets-Of-Aladdin.jpg";
import PeterPan from "../../Images/MagicKingdom/Peter-Pan-Flight.jpg";
import WideCastle from "../../Images/MagicKingdom/Magic-Kingdom-Castle-Panorama.jpg";
import WideMagicKingdom from "../../Images/MagicKingdom/Magic-Kingdom-Panorama.jpg";
import NightMagicKingdom from "../../Images/MagicKingdom/Magic-Kingdom-At-Night.jpg";
import ParkMapBG from "../../Images/Disney-Pattern.png";
import ParkMap from "../../Images/MagicKingdom/Magic-Kingdom-Park-Map.jpg";
import ParkShowsBG from "../../Images/Dark-Stars-Background.jpg"
import RoyalPrincess from "../../Images/MagicKingdom/Royal-Princess-Processional.png";
import FantasyParade from "../../Images/MagicKingdom/Festival-Fantasy-Parade.jpg";
import HappilyEverAfter from "../../Images/MagicKingdom/Happily-Ever-After.jpg";
import BeOurGuest from "../../Images/MagicKingdom/Be-Our-Guest.jpg";
import GastonsTavern from "../../Images/MagicKingdom/Gastons-Tavern.jpg";
import RoyalTable from "../../Images/MagicKingdom/Cinderellas-Royal-Table.jpg";
import IceCreamParlor from "../../Images/MagicKingdom/Plaza-Ice-Cream-Palor.jpg";
import MickeyIcon from "../../Images/MagicKingdom/Mickey-Icon.png";
import CastleIcon from "../../Images/MagicKingdom/Castle-Icon.png";
import MagicIcon from "../../Images/MagicKingdom/Magic-Icon.png";
import DisneyParksInfo from './DisneyParksInfo';

const rides = [
    {
        name: "Space Mountain",
        photo: SpaceMountain,
        alt: "Disney Space Mountain",
        description: "Explora el espacio y los misterios del universo como nunca antes en Space Mountain, un recorrido en el que descubrirá planetas, satélites y otros fenómenos espaciales impresionantes, mientras abordas tu cohete a toda velocidad."
    },
    {
        name: "Haunted Mansion",
        photo: HauntedMansion,
        alt: "Disney Haunted Mansion",
        description: "Fantasmas, monstruos espeluznantes y espíritus aguardan por ti en Haunted Mansion, un emocionante y aterrador recorrido por una mansión embrujada. Aquí visitarás la sala de espiritismo, darás un recorrido por el cementerio y te llevarás unos cuantos sustos."
    },
    {
        name: "Pirates of the Caribbean",
        photo: Pirates,
        alt: "Disney Pirates of the Caribbean",
        description: "Zarpa en una aventura épica y explora las misteriosas aguas del Caribe y sus cuevas, ¡pero cuidado! una batalla entre audaces piratas tendrá lugar frente a tus ojos mientras te mantienes a flote."
    },
    {
        name: "Jungle Cruise",
        photo: JungleCruise,
        alt: "Disney Jungle Cruise",
        description: "Explora algunos de los escenarios más emblemáticos de la sabana Africana, la selva Asiática y Sudamericana, mientras navegas por las tranquilas agua de Jungle Cruise, un recorrido recomendado para toda la familia."
    },
    {
        name: "The Magic Carpets of Aladdin",
        photo: MagicCarpets,
        alt: "Disney The Magic Carpets of Aladdin",
        description: "Súbete a bordo de la alfombra mágica de Aladdin y prepárate para disfrutar de la mejor vista panorámica mientras te elevas al ritmo de la música del Medio Oriente."
    },
    {
        name: "Peter Pan’s Flight",
        photo: PeterPan,
        alt: "Disney Peter Pan’s Flight",
        description: "Prepárate para volar a través de las tierras de Neverland en Peter Pan’s Flight, una de las atracciones clásicas de Magic Kingdom Park, donde te subirás a bordo de un barco pirata y revivirás algunos de los momentos más emblemáticos de la película."
    },
];

const panoramic = [
    {
        name: "Magic Kingdom Castle",
        photo: WideCastle,
        alt: "Disney Magic Kingdom Castle",
    },
    {
        name: "Magic Kingdom Park",
        photo: WideMagicKingdom,
        alt: "Disney Magic Kingdom Park",
    },
    {
        name: "Magic Kingdom Castle",
        photo: NightMagicKingdom,
        alt: "Disney Magic Kingdom at Night",
    },
];

const shows = [
    {
        name: "The Royal Princess Processional",
        photo: RoyalPrincess,
        alt: "Disney The Royal Princess Processional",
        description: "Mira a las princesas Disney como nunca antes, en este desfile lleno de carrozas, música y por supuesto, mucha magia."
    },
    {
        name: "Festival Fantasy Parade",
        photo: FantasyParade,
        alt: "Disney Festival Fantasy Parade",
        description: "El Disney Festival of Fantasy Parade es un desfile espectacular y lleno de magia que se lleva a cabo en el parque Magic Kingdom. Este desfile transporta a los visitantes a un mundo de fantasía y encanto."
    },
    {
        name: "Happily Ever After",
        photo: HappilyEverAfter,
        alt: "Disney Happily Ever After",
        description: "Un espectáculo nocturno inolvidable que se presenta en el parque Magic Kingdom de Disney. Este deslumbrante espectáculo de fuegos artificiales y proyecciones combina la magia de las películas de Disney con música inspiradora y emotiva."
    },
];

const restaurants = [
    {
        name: "Be Our Guest",
        photo: BeOurGuest,
        alt: "Be Our Guest Restaurant",
        description: "Es uno de los restaurantes más visitados por su emblemática temática de The Beauty and the Beast. La Bestia los recibirá y les dará la bienvenida al lugar, con deliciosos platillos inspirados en la comida francesa para degustar y pasarlo increíble."
    },
    {
        name: "Gaston's Tavern",
        photo: GastonsTavern,
        alt: "Gaston's Tavern",
        description: "Gaston’s Tavern sirve deliciosos snacks, incluyendo rollos de canela calientes. Además, disfruta de bebidas refrescantes, como LeFou's Brew, la bebida sin alcohol exclusiva del restaurante."
    },
    {
        name: "Cinderella’s Royal Table",
        photo: RoyalTable,
        alt: "Cinderella’s Royal Table Restaurant",
        description: "El famoso restaurante ubicado en el castillo de la cenicienta es uno de los más visitados del área. Con su auténtica comida inspirada en la alta cocina americana logra captar el clásico encanto de las princesas de Disney, disfrutando de cualquiera de las tres comidas con la compañía e interacción de tus princesas favoritas."
    },
    {
        name: "Plaza Ice Cream Parlor",
        photo: IceCreamParlor,
        alt: "Plaza Ice Cream Parlor",
        description: "Date el gusto con deliciosos helados en este nostálgico salón de Main Street, U.S.A. Saborea refrescantes sundaes en tazones de waffle cubiertos con salsa caliente. También se ofrecen opciones sin grasa y sin azúcar añadida."
    },
];

const parkInfo = [
    {
        icon: MickeyIcon,
        alt: "Mickey Icon",
        message: [
            "Llegue con al menos 30 minutos de anticipación a los parques, porque hay fila y control de seguridad y canje de boletos.",
            "Descargue la app de My Disney Experience, te brinda información actualizada en tiempo real sobre los tiempos de espera de las atracciones, los horarios de los personajes y cualquier cambio en el parque. Esto te permite estar al tanto de todo y ajustar tus planes según lo necesites.",
        ]
    },
    {
        icon: CastleIcon,
        alt: "Disney Castle Icon",
        message: [
            "Si el parque cierra temprano el día de tu visita, considera reservar una cena en alguna de las áreas de los resorts. Tenga en cuenta que el transporte ida y vuelta al Magic Kingdom trabaja sólo una hora después del cierre oficial del parque.",
            "Si conocer a Mickey Mouse está en tu lista de cosas por hacer, debe dirigirse a Town Square Theater en Main Street. Para evitar largas esperas programe sus FastPass con anticipación.",
            "El Genie plus se activa en el parque, a través de la App.",
        ]
    },
    {
        icon: MagicIcon,
        alt: "Disney Magic Icon",
        message: [
            "MagicBand simplifica tu experiencia en los parques temáticos de Disney al proporcionar acceso sin problemas, opciones de pago convenientes, almacenamiento de entradas y Genie+, experiencias personalizadas y la captura automática de tus recuerdos. Es una herramienta imprescindible para disfrutar al máximo de tu visita a Disney.",
            "Lugares donde encontrarán turkey legs, Prince Eric's Village Market and Gaston's Tavern.",
        ]
    },
];

function MagicKingdomInfo() {
  return (
    <DisneyParksInfo
        parkBackground={ParkBG}
        parkTitle="Magic Kingdom ¡El Parque Más Famoso de Disney!"
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

export default MagicKingdomInfo;
