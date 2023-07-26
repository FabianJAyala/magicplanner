import ParkBG from "../../Images/UniversalStudios/Universal-Studios.jpg"
import ParkRidesBG from "../../Images/UniversalStudios/Harry-Potter-Pattern.jpg"
import WideUniversal from "../../Images/UniversalStudios/Universal-Studios-Panorama.jpg";
import DiagonAlley from "../../Images/UniversalStudios/Diagon-Alley-Universal-Studios.jpg";
import SimpsonsFamily from "../../Images/UniversalStudios/The-Simpsons-Family.jpg";
import Transformers from "../../Images/UniversalStudios/Tranformers-The-Ride.jpg";
import NewYork from "../../Images/UniversalStudios/Race-Through-New-York.jpg";
import Simpsons from "../../Images/UniversalStudios/The-Simpsons-Ride.jpg";
import Despicable from "../../Images/UniversalStudios/Despicable-Me-Ride.png";
import HarryPotter from "../../Images/UniversalStudios/Harry-Potter-Escape-Gringotts.jpg";
import Mummy from "../../Images/UniversalStudios/Revenge-Of-The-Mummy.jpg";
import ParkMap from "../../Images/UniversalStudios/Universal-Studios-Florida-Map.jpg";
import Cauldron from "../../Images/UniversalStudios/Leaky-Cauldron.png";
import Bumblebee from "../../Images/UniversalStudios/Bumblebee-Mans-Tacos.png";
import LaBamba from "../../Images/UniversalStudios/Cafe-La-Bamba.png";
import Lombards from "../../Images/UniversalStudios/Lombards.png";
import UniversalParksInfo from './UniversalParksInfo';

const panoramic = [
    {
        name: "Universal Studios Orlando",
        photo: WideUniversal,
        alt: "Universal Studios Orlando",
    },
    {
        name: "Harry Potter: Diagon Alley",
        photo: DiagonAlley,
        alt: "Harry Potter Diagon Alley",
    },
    {
        name: "The Simpsons Family",
        photo: SimpsonsFamily,
        alt: "The Simpsons Family",
    },
];

const rides = [
    {
        name: "Transformers The Ride: 3D",
        photo: Transformers,
        alt: "Transformers The Ride",
        description: "Aborda tu N*E*S*T y únete a Optimus Prime y Bumblebee en la lucha contra los Decepticons en este recorrido que cruza los límites entre la ficción y la realidad."
    },
    {
        name: "Race Through New York",
        photo: NewYork,
        alt: "Race Through New York",
        description: "Conviértete en invitado de uno de los shows más populares de américa, y acompaña a Jimmy Fallon en un divertido paseo por New York, conoce a Hashtag The Panda, y disfruta del show de los Ragtime Gals."
    },
    {
        name: "The Simpsons Ride",
        photo: Simpsons,
        alt: "The Simpsons Ride",
        description: "Ayuda a Krusty a salvar su propio parque de atracciones junto a la familia Simpson en esta montaña rusa de realidad virtual, en la que visitarás los emblemáticos lugares de Springfield."
    },
    {
        name: "Despicable Me Minion Mayhem",
        photo: Despicable,
        alt: "Despicable Me Minion Mayhem",
        description: "Conviértete en un Minion en este divertido paseo a través del laboratorio de Gru, donde las cosas no saldrán como estaban planeadas. Al final de esta aventura simulada podrás unirte a una fiesta de baile interactiva, en la que enseñarás tus mejores movimientos."
    },
    {
        name: "Harry Potter and The Scape from Gringotts",
        photo: HarryPotter,
        alt: "Harry Potter and The Scape from Gringotts",
        description: "Adéntrate en el mágico Diagon Alley y prepárate para un paseo en el que deberás combatir a las fuerzas oscuras y a peligrosas criaturas, mientras viajas por misteriosas cavernas."
    },
    {
        name: "Revenge of The Mummy",
        photo: Mummy,
        alt: "Revenge of The Mummy",
        description: "Este recorrido de alta velocidad te llevará a experimentar la más pura adrenalina mientras te adentras en oscuros pasadizos donde el misterio aguarda por tí. Guerreros momificados y bandadas de insectos son solo algunos de los elementos que podrás encontrar y que harán de este recorrido algo terroríficamente inolvidable."
    },
];

const restaurants = [
    {
        name: "Leaky Cauldron",
        photo: Cauldron,
        alt: "Leaky Cauldron Restaurant",
        description: "Ubicado en The Wizarding World of Harry Potter, que ofrece platos británicos tradicionales en un ambiente que de seguro te recordará aquel pub donde Harry solía pasar sus días en Harry Potter y el Prisionero de Azkaban."
    },
    {
        name: "Bumblebee Man’s Taco Truck",
        photo: Bumblebee,
        alt: "Bumblebee Man’s Taco Truck",
        description: "Disfruta de unos deliciosos tacos recién hechos en Bumblebee Man’s Taco Truck, una excelente opción para aquellos que quieran comer en un lugar informal y rápido."
    },
    {
        name: "Café La Bamba",
        photo: LaBamba,
        alt: "Café La Bamba",
        description: "Un patio con una fuente precede a este hermoso edificio, inspirado en el legendario Hotel Hollywood. El llamativo restaurante de comida rápida es el hogar de un menú inspirado en la comida mexicana del sur de California, que incluye burritos, tacos, bowls y el original Tres Leches, que solo se sirve en La Bamba."
    },
    {
        name: "Lombard’s Seafood Grille",
        photo: Lombards,
        alt: "Lombard’s Seafood Grille",
        description: "Caracterizado por su deliciosa comida, amable servicio y ambiente náutico desde que el parque abrió por primera vez. Los mariscos son la especialidad de Lombard, con favoritos frescos como la sopa de almejas. Si prefieres carne en lugar de mariscos, también hay hamburguesas, sándwiches y ensaladas."
    },
];

function UniversalStudiosInfo() {
  return (
    <UniversalParksInfo
        parkBackground={ParkBG}
        parkTitle="¡Descubre el Mágico Mundo del Cine y la Televisión en Universal Studios Florida!"
        ridesBackground={ParkRidesBG}
        rides={rides}
        panoramic={panoramic}
        parkMap={ParkMap}
        restaurants={restaurants}
    />
  );
}

export default UniversalStudiosInfo;
