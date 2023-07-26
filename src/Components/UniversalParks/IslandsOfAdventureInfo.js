import ParkBG from "../../Images/IslandsOfAdventure/Islands-Of-Adventure.jpg"
import ParkRidesBG from "../../Images/IslandsOfAdventure/Harry-Potter-Pattern.jpg"
import WideIslands from "../../Images/IslandsOfAdventure/Islands-Of-Adventure-Panorama.jpg";
import VelociCoasterRide from "../../Images/IslandsOfAdventure/Velocicoaster-Ride.jpg";
import HogwartsCastle from "../../Images/IslandsOfAdventure/Hogwarts-Castle.jpg";
import Hagrid from "../../Images/IslandsOfAdventure/Hagrids-Magical-Ride.jpg";
import VelociCoaster from "../../Images/IslandsOfAdventure/Jurassic-World-Velocicoaster.jpg";
import HulkCoaster from "../../Images/IslandsOfAdventure/The-Incredible-Hulk-Coaster.jpg";
import SpiderMan from "../../Images/IslandsOfAdventure/Amazing-Spider-Man.jpg";
import ParkRiver from "../../Images/IslandsOfAdventure/Jurassic-Park-River-Adventure.jpg";
import Dudley from "../../Images/IslandsOfAdventure/Dudley-Do-Rights.jpg";
import ParkMap from "../../Images/IslandsOfAdventure/Islands-Of-Adventure-Park-Map.jpg";
import HogsHead from "../../Images/IslandsOfAdventure/Hogs-Head-Pub.jpg";
import Marvel from "../../Images/IslandsOfAdventure/Marvel-Character-Dinner.jpg";
import ThreeBroomsticks from "../../Images/IslandsOfAdventure/Three-Broomsticks.jpg";
import Confisco from "../../Images/IslandsOfAdventure/Confisco-Grille.jpg";
import UniversalParksInfo from './UniversalParksInfo';

const panoramic = [
    {
        name: "Islands Of Adventure",
        photo: WideIslands,
        alt: "Islands Of Adventure",
    },
    {
        name: "Jurassic World: VelociCoaster Ride",
        photo: VelociCoasterRide,
        alt: "Universal VelociCoaster Ride",
    },
    {
        name: "Harry Potter: Hogwarts Castle",
        photo: HogwartsCastle,
        alt: "Harry Potter: Hogwarts Castle",
    },
];

const rides = [
    {
        name: "Hagrid’s Magical Creatures Motorbike Adventure",
        photo: Hagrid,
        alt: "Hagrid’s Magical Creatures Motorbike Adventure",
        description: "Únete a Hagrid en un recorrido épico mientras viajas más allá de los terrenos del castillo de Hogwarts y te encuentras con una variedad de criaturas mágicas. Asegúrate de elegir con anticipación el lugar en donde te quieres sentar: ¿el sidecar o la motocicleta?"
    },
    {
        name: "Jurassic World VelociCoaster",
        photo: VelociCoaster,
        alt: "Jurassic World VelociCoaster",
        description: "Este nuevo tipo de montaña rusa te lleva en una carrera de alta velocidad a través del prado de los Raptors y es uno de los lugares imperdibles en cualquier viaje a Islands of Adventure."
    },
    {
        name: "The Incredible Hulk Coaster",
        photo: HulkCoaster,
        alt: "The Incredible Hulk Coaster",
        description: "Ofrécete como voluntario para ser un sujeto de prueba para la investigación del General Thaddeus “Thunderbolt” Ross y tus poderes, similares a los de Hulk, te impulsarán cada vez más rápido en este emocionante recorrido de Marvel Super Hero Island."
    },
    {
        name: "The Amazing Adventures of Spider-Man",
        photo: SpiderMan,
        alt: "The Amazing Adventures of Spider-Man",
        description: "Mientras estés en Marvel Super Hero Island, no te pierdas la oportunidad de balancearte por encima de las calles, escalar rascacielos y combatir al Sinister Syndicate con Spidey."
    },
    {
        name: "Jurassic Park River Adventure",
        photo: ParkRiver,
        alt: "Jurassic Park River Adventure",
        description: "En un momento estás navegando tranquilamente sobre agua. En el siguiente, te encuentras frente a frente con un enorme T. rex y no hay forma de esquivarlo. Se inclina sobre ti y la única manera de salvarte de su feroz mordida es dirigirte a la caída."
    },
    {
        name: "Dudley Do-Right’s Ripsaw Falls",
        photo: Dudley,
        alt: "Dudley Do-Right’s Ripsaw Falls",
        description: "Salpica mientras avanzas por giros y vueltas en esta salvaje aventura acuática en Toon Lagoon. ¡Ah! Y prepárate para aquella caída de 65 pies."
    },
];

const restaurants = [
    {
        name: "Harry Potter: Hog’s Head Pub",
        photo: HogsHead,
        alt: "Universal Hog’s Head Pub",
        description: "A todos les encanta esta delicia apta para familias, que Harry y sus amigos tomaban en las películas. El Hog’s Head pub es el lugar cómodo y perfecto para tomarla a sorbos y relajarte."
    },
    {
        name: "Marvel Character Dinner",
        photo: Marvel,
        alt: "Marvel Character Dinner",
        description: "Únete a tus superhéroes favoritos y derrota al villano más temible de todos, tu estómago vacío. Estás comiendo y de repente entran Captain America, Spider-Man, Wolverine, Cyclops, Storm y Rogue"
    },
    {
        name: "Three Broomsticks",
        photo: ThreeBroomsticks,
        alt: "Three Broomsticks Restaurant",
        description: "Esta taberna rústica es el mejor lugar para disfrutar en Hogsmeade, de una buena comida, una agradable conversación, y por supuesto, de una Butterbeer. Toma asiento y prueba un sabroso plato británico."
    },
    {
        name: "Confisco Grille",
        photo: Confisco,
        alt: "Confisco Grille",
        description: "En este exótico restaurante del Port of Entry puedes disfrutar de comida influenciada por sabores internacionales, incluyendo a platos asiáticos, mediterráneos, griegos y de otros territorios."
    },
];

function IslandsOfAdventureInfo() {
  return (
    <UniversalParksInfo
        parkBackground={ParkBG}
        parkTitle="Islands of Adventure, ¡Explora un Universo de Emociones Inigualables!"
        ridesBackground={ParkRidesBG}
        rides={rides}
        panoramic={panoramic}
        parkMap={ParkMap}
        restaurants={restaurants}
    />
  );
}

export default IslandsOfAdventureInfo;
