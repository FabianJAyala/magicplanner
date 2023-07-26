import ParkBG from "../../Images/VolcanoBay/Volcano-Bay.jpg"
import ParkRidesBG from "../../Images/VolcanoBay/Waves-Pattern.jpg"
import WideVolcanoBay from "../../Images/VolcanoBay/Volcano-Bay-Panorama.jpg";
import Tiki from "../../Images/VolcanoBay/Volcano-Bay-Tiki.jpg";
import Slides from "../../Images/VolcanoBay/Volcano-Bay-Slides.jpg";
import Krakatau from "../../Images/VolcanoBay/Krakatau-Aqua-Coaster.jpg";
import Ohyah from "../../Images/VolcanoBay/Ohyeh-Ohno.jpg";
import Kala from "../../Images/VolcanoBay/Kala-And-Ta-Nui.jpg";
import Runamukka from "../../Images/VolcanoBay/Runamukka-Reef.jpg";
import Honu from "../../Images/VolcanoBay/Whale-And-Turtle.jpg";
import TotTiki from "../../Images/VolcanoBay/Tot-Tiki-Reef.jpg";
import ParkMap from "../../Images/VolcanoBay/Universals-Volcano-Bay-Map.jpg";
import Bambu from "../../Images/VolcanoBay/Bambu-Restaurant.jpg";
import FeastingFrog from "../../Images/VolcanoBay/Feasting-Frog.jpg";
import Kohola from "../../Images/VolcanoBay/Kohola-Reef-Restaurant.jpg";
import Dragons from "../../Images/VolcanoBay/Dancing-Dragons-Boat-Bar.jpg";
import UniversalParksInfo from './UniversalParksInfo';

const panoramic = [
    {
        name: "Universal: Volcano Bay",
        photo: WideVolcanoBay,
        alt: "Universal Volcano Bay",
    },
    {
        name: "Volcano Bay Tiki",
        photo: Tiki,
        alt: "Volcano Bay Tiki",
    },
    {
        name: "Volcano Bay: Water Slides",
        photo: Slides,
        alt: "Volcano Bay Water Slides",
    },
];

const rides = [
    {
        name: "Krakatau Aqua Coaster",
        photo: Krakatau,
        alt: "Krakatau Aqua Coastere",
        description: "Se trata de un emocionante recorrido que atraviesa el interior del volcán y todas sus caídas de agua, donde viajarás en una canoa que lleva a cuatro personas por vez."
    },
    {
        name: "Ohyah & Ohno Drop Slides",
        photo: Ohyah,
        alt: "Ohyah & Ohno Drop Slides",
        description: "Son dos increíbles y serpenteantes toboganes que se cruzan uno con otro, y ofrecen dos experiencias distintas, llenas de giros, con subidas y bajadas extremas que harán fluir tu adrenalina."
    },
    {
        name: "Kala & Tai Nui Serpentine Body Slides",
        photo: Kala,
        alt: "Kala & Tai Nui Serpentine Body Slides",
        description: "Es un tobogán de alta velocidad donde saldrás disparado de una cápsula hacia un emocionante recorrido."
    },
    {
        name: "Runamukka Reef",
        photo: Runamukka,
        alt: "Runamukka Reef",
        description: "Este espacio lleno de juegos acuáticos para niños de todas las edades ofrece salpicaderos, fuentes y deslizaderos, perfecto para los niños de tu grupo."
    },
    {
        name: "Honu ika Moana Turtle and Whale Ride",
        photo: Honu,
        alt: "Honu ika Moana Turtle and Whale Ride",
        description: "Son dos atracciones gigantes donde un emocionante paseo sobre enormes inflables acuáticos te espera, con increíbles subidas y rápidos descensos."
    },
    {
        name: "Tot Tiki Reef",
        photo: TotTiki,
        alt: "Tot Tiki Reef",
        description: "Los más pequeños se divertirán en grande en Tot Tiki Reef, un área de juegos acuáticos con una versión miniatura del volcán, fuentes, toboganes y ballenas que reproducen canciones y rocían agua mientras los chicos juegan con ellas."
    },
];

const restaurants = [
    {
        name: "Bambu",
        photo: Bambu,
        alt: "Bambu Restaurant",
        description: "Disfruta de los platillos tradicionales con un toque tropical en este conveniente refugio, donde encontrarás variadas y rápidas opciones, como hamburguesas, sadwiches y ensaladas, con toques de edamame, quinoa, chips de plátano y frutas."
    },
    {
        name: "The Feasting Frog",
        photo: FeastingFrog,
        alt: "The Feasting Frog",
        description: "Deliciosos tacos, nachos y pokes aguardan por ti en The Feasting Frog, un local donde podrás comer rico y ligero, con opciones como tacos de carne asada, tacos de pollo y poke de atún fresco, todo acompañado de chips de plátano."
    },
    {
        name: "Kohola Reef Restaurant & Social Club",
        photo: Kohola,
        alt: "Kohola Reef Restaurant & Social Club",
        description: "Exquisitas opciones para el desayuno, almuerzo y merienda se ofrecen en Kohola Reef Restaurant & Social Club, un lugar donde podrás degustar desde costillas de cerdo BBQ con un toque de fruta tropical, hasta currys, hamburguesas y pescados."
    },
    {
        name: "Dancing Dragons Boat Bar",
        photo: Dragons,
        alt: "Dancing Dragons Boat Bar",
        description: "Coctelería variada, cervezas especiales, sushi, sandwiches y pizzas son solo algunas de las opciones que encontrarás en Dancing Dragons Boat Bar, un bar de servicio completo, ideal para aquellos en busca de una amplia gama de cócteles y deliciosa comida."
    },
];

function VolcanoBayInfo() {
  return (
    <UniversalParksInfo
        parkBackground={ParkBG}
        parkTitle="Sumérgete en la aventura en Universal's Volcano Bay, ¡Diversión acuática para toda la familia!"
        ridesBackground={ParkRidesBG}
        rides={rides}
        panoramic={panoramic}
        parkMap={ParkMap}
        restaurants={restaurants}
    />
  );
}

export default VolcanoBayInfo;
