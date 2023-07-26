import ParkBG from "../../Images/HollywoodStudios/Hollywood-Studios.jpg"
import ParkRidesBG from "../../Images/Stars-Background.jpg"
import Twilight from "../../Images/HollywoodStudios/The-Twilight-Zone.jpg";
import RockNRoller from "../../Images/HollywoodStudios/Rock-N-Roller.jpg";
import SlinkyDog from "../../Images/HollywoodStudios/Slinky-Dog-Dash.jpg";
import MickeyMinnie from "../../Images/HollywoodStudios/Mickey-And-Minnie.jpg";
import StarWarsRise from "../../Images/HollywoodStudios/Star-Wars-Rise-Of-The-Resistance.jpg";
import MuppetVision from "../../Images/HollywoodStudios/Muppet-Vision.jpg";
import WideHollywoodStudios from "../../Images/HollywoodStudios/Hollywood-Studios-Entrance.jpg";
import WideLake from "../../Images/HollywoodStudios/Hollywood-Studios-Lake.jpg";
import StarWars from "../../Images/HollywoodStudios/Star-Wars-Ride.jpg";
import ParkMapBG from "../../Images/Disney-Pattern.png";
import ParkMap from "../../Images/HollywoodStudios/Hollywood-Studios-Map.jpg";
import ParkShowsBG from "../../Images/Dark-Stars-Background.jpg"
import BeautyAndBeast from "../../Images/HollywoodStudios/Beauty-And-The-Beast-Show.jpg";
import Fantasmic from "../../Images/HollywoodStudios/Fantasmic-Show.png";
import Frozen from "../../Images/HollywoodStudios/Frozen-Sing-Along.jpg";
import StarWarsEdge from "../../Images/HollywoodStudios/Star-Wars-Galaxy-Edge.jpg";
import WonderfulWorld from "../../Images/HollywoodStudios/Wonderful-Animation.jpg";
import DisneyJunior from "../../Images/HollywoodStudios/Disney-Junior-Play.jpg";
import Woodys from "../../Images/HollywoodStudios/Woody-Lunch-Box.jpg";
import PrimeTime from "../../Images/HollywoodStudios/50s-Prime-Time-Cafe.jpg";
import Ogas from "../../Images/HollywoodStudios/Ogas-Cantina.jpg";
import SciFi from "../../Images/HollywoodStudios/Scifi-Dine-In-Theater.jpg";
import TimeIcon from "../../Images/HollywoodStudios/Time-Icon.png";
import CastleIcon from "../../Images/HollywoodStudios/Castle-Icon.png";
import MovieIcon from "../../Images/HollywoodStudios/Movie-Icon.png";
import DisneyParksInfo from './DisneyParksInfo';

const rides = [
    {
        name: "The Twilight Zone of Terror",
        photo: Twilight,
        alt: "Hollywood Studios The Twilight Zone of Terror",
        description: "Manténte alerta y prepárate, pues en este hotel los misterios y los espantos están a la orden del día. Entra al Hollywood Tower Hotel, un lugar donde el tiempo parece haberse detenido, y súbete al ascensor en el que visitarás distintos niveles y aumentarán los sustos mientras te adentras en la quinta dimensión."
    },
    {
        name: "Rock n’ Roller Coaster",
        photo: RockNRoller,
        alt: "Hollywood Studios Rock n’ Roller Coaster",
        description: "Súbete a bordo de una lujosa limusina y disfruta como todo un rockstar de un increíble paseo lleno de giros y mucha adrenalina en Rock n’ Roller Coaster, una montaña rusa ambientada con la música de Aerosmith."
    },
    {
        name: "Slinky Dog Dash",
        photo: SlinkyDog,
        alt: "Slinky Dog Dash",
        description: "Una emocionante atracción ubicada en el área de Toy Story Land en Disney's Hollywood Studios. Inspirada en la popular franquicia de películas de Toy Story, esta montaña rusa te lleva en un viaje vibrante y lleno de diversión a bordo de Slinky Dog, el juguete de resorte. "
    },
    {
        name: "Mickey & Minnie’s Runaway Railway",
        photo: MickeyMinnie,
        alt: "Hollywood Studios Mickey & Minnie’s Runaway Railway",
        description: "Acompaña a Mickey, Minnie y sus amigos en un paseo a bordo de un tren conducido por el mismísimo Goofy, lo que solo puede significar dos cosas: Problemas y…¡Mucha diversión!. Aquí desafiarás las leyes de la física mientras te conduces por distintos escenarios basados en el reciente cortometraje de Mickey y Minnie que lleva el mismo nombre que esta atracción."
    },
    {
        name: "Star Wars: Rise of the resistance",
        photo: StarWarsRise,
        alt: "Star Wars: Rise of the resistance",
        description: "Una atracción épica y revolucionaria que sumerge a los visitantes en el universo de Star Wars. Desde el momento en que ingresan a la cola, los visitantes se ven inmersos en una historia emocionante y llena de acción. A bordo de un transporte de la Resistencia, los pasajeros son reclutados para unirse a la lucha contra la Primera Orden. "
    },
    {
        name: "Muppet Vision 3D",
        photo: MuppetVision,
        alt: "Hollywood Studios Muppet Vision 3D",
        description: "Visita el Muppet Theater y prepárate para experimentar una aventura en compañía de los muppets, quienes te llevarán en un recorrido a través de su laboratorio, pero luego las cosas se salen de control cuando el Dr. Bunsen Honeydew y Beaker provocan algunos desastres. Con efectos increíbles y números musicales divertidos, esta atracción es ideal para toda la familia."
    },
];

const panoramic = [
    {
        name: "Hollywood Studios Park",
        photo: WideHollywoodStudios,
        alt: "HollywoodStudios Park",
    },
    {
        name: "Hollywood Studios Lake",
        photo: WideLake,
        alt: "Hollywood Studios Lake",
    },
    {
        name: "Star Wars Ride",
        photo: StarWars,
        alt: "HollywoodStudios Star Wars Ride",
    },
];

const shows = [
    {
        name: "Beauty and the Beast - Live on Stage",
        photo: BeautyAndBeast,
        alt: "Hollywood Studios Beauty and the Beast - Live on Stage",
        description: "Para disfrutar uno de los mejores shows en vivo de La Bella y La Bestia al estilo broadway. Con actuaciones, escenografía, música y mucho más."
    },
    {
        name: "Fantasmic!",
        photo: Fantasmic,
        alt: "Hollywood Studios Fantasmic Show",
        description: "Es un gran espectáculo nocturno protagonizado por Mickey Mouse y más de 50 personajes. Música en vivo, fuegos artificiales y más con mucha diversión para la familia."
    },
    {
        name: "A Frozen Sing-Along Celebration",
        photo: Frozen,
        alt: "Hollywood Studios A Frozen Sing-Along Celebration",
        description: "Los personajes de Frozen cobran vida en A Frozen Sing-Along Celebration, un espectáculo de música en vivo lleno de historias e invitados especiales."
    },
    {
        name: "Star Wars: Galaxy Edge",
        photo: StarWarsEdge,
        alt: "Star Wars: Galaxy Edge",
        description: "La Primera Orden ha llegado recientemente a Black Spire Outpost en busca de la Resistencia. Preséntate a cumplir servicio y dirígete a Docking Bay, donde la Primera Orden armó un puesto para ganarse los corazones y las mentes de los residentes locales."
    },
    {
        name: "Wonderful World of Animation",
        photo: WonderfulWorld,
        alt: "Hollywood Wonderful World of Animation",
        description: "Revive los mejores momentos del fantástico mundo de Disney y Pixar en este espectáculo nocturno, donde 90 años de películas se mostrarán frente a ti con fantásticas proyecciones y efectos que te harán sentir inmerso en el show."
    },
    {
        name: "Disney Junior Play and Dance!",
        photo: DisneyJunior,
        alt: "Hollywood Studios Disney Junior Play and Dance!",
        description: "Únete a los personajes icónicos de Disney Junior en una celebración llena de música y baile, donde los más pequeños disfrutarán al ritmo de las canciones que ya conocen."
    },
];

const restaurants = [
    {
        name: "Woody's Lunch Box",
        photo: Woodys,
        alt: "Woody's Lunch Box",
        description: "transporta a los visitantes al mundo de juguetes de Andy. Este animado puesto de comida rápida ofrece una variedad de opciones de comida reconfortante y deliciosa. Con una temática encantadora, desde las mesas hechas con bloques de construcción hasta las sombrillas gigantes de popotes"
    },
    {
        name: "50’s Prime Time Cafe",
        photo: PrimeTime,
        alt: "Hollywood Studios 50’s Prime Time Café",
        description: "Es un reconocido restaurante donde se puede disfrutar de una comida clásica estadounidense de forma familiar ambientado en los años 50’s. Ofrece desde carta de vinos y bebidas especiales que incluyen batidos con y sin alcohol, hasta hamburguesas y emparedados."
    },
    {
        name: "Oga's Cantina",
        photo: Ogas,
        alt: "Oga's Cantina",
        description: "Este animado bar temático te sumerge en el universo de Star Wars. Puedes disfrutar de bebidas exóticas y coloridas, tanto alcohólicas como sin alcohol, mientras escuchas música de la cantina y te mezclas con personajes y visitantes de todas las partes de la galaxia."
    },
    {
        name: "Sci-Fi Dine-In Theater Restaurant",
        photo: SciFi,
        alt: "Sci-Fi Dine-In Theater Restaurant",
        description: "Este restaurante recrea la experiencia de un autocine de los años 50. Puedes disfrutar de platos americanos tradicionales mientras te sientas en autos clásicos convertibles y ves clips de películas de ciencia ficción en una pantalla grande."
    },
];

const parkInfo = [
    {
        icon: TimeIcon,
        alt: "Time Icon",
        message: [
            "A menos que disfrute de las largas filas y la espera, debe programar sus Genie+ desde su celular o en un kiosko del parque para sus atracciones.",
            "Algunas atracciones cierran antes que el parque en general, por lo que se recomienda chequear la guía de horarios apenas llegue al mismo.",
            "Fantasmic! Es un show bastante importante, así que debe llegar unos 20 minutos antes (incluso si cuenta con los Genie+).",
        ]
    },
    {
        icon: CastleIcon,
        alt: "Castle Icon",
        message: [
            "Antes de almorzar visite primero las siguientes atracciones: Tower of Terror, Rock ‘n’ Roller Coaster, Millenium Flacon: Smugglers Run, Star Wats: Ries of the Resistance, Slinky Dog Dash y Toy Story Mania!",
            "Walt Disney Present es una exhibición dedicada al hombre que hizo todo esto posible. Si se encuentra abierta para el momento de su visita, asegúrese de conocerlo.",
            "Visite las atracciones Go to Rock ‘N’ Roller Coaster, Tower of Terror, Toy Story Land y Star Wars: Galaxy Edge muy temprano por la mañana, antes de que las masas se conglomeren, además programe sus Genie+ tan rápido como pueda.",
        ]
    },
    {
        icon: MovieIcon,
        alt: "Movie Icon",
        message: [
            "Para una comida con servicio de mesa, reserve en los siguientes restaurantes: 50’s Primce Time Café. Mama Melrose’s Ristorante Italiano, Hollywood Brown Derby, Sci-Fi Dine-In Theater o Hollywood and Vine.",
            "¿Y si hacemos un muñeco? Disney’s Hollywood Studios es el único parque en todo Walt Disney World en el que puedes conocer a Olaf, el muñeco de nieve más adorable. Lo puedes encontrar en Celebrity Spotlight.",
            "El Show Fantasmic! Es presentado la gran mayoría de las noches, para saber los horarios que se presentará el día que asista chequee los horarios en la guía (puede obtenerla en el parque). Este show puede ser cancelado en cualquier momento debido al clima.",
        ]
    },
];

function HollywoodStudiosInfo() {
  return (
    <DisneyParksInfo
        parkBackground={ParkBG}
        parkTitle="Adéntrate en un mundo completamente inspirado por las películas clásicas de Disney en Hollywood Studios"
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

export default HollywoodStudiosInfo;