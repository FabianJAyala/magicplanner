import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Quote from "./Routes/Quote"
import MagicKingdom from "./Routes/MagicKingdom";
import EPCOT from "./Routes/EPCOT";
import HollywoodStudios from "./Routes/HollywoodStudios";
import AnimalKingdom from "./Routes/AnimalKingdom";
import UniversalStudios from "./Routes/UniversalStudios";
import IslandsOfAdventure from "./Routes/IslandsOfAdventure";
import VolcanoBay from "./Routes/VolcanoBay";
import DisneyHotels from "./Routes/DisneyHotels";
import UniversalHotels from "./Routes/UniversalHotels";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/quote" element={<Quote/>}/>
        <Route path="/magic-kingdom" element={<MagicKingdom/>}/>
        <Route path="/epcot" element={<EPCOT/>}/>
        <Route path="/hollywood-studios" element={<HollywoodStudios/>}/>
        <Route path="/animal-kingdom" element={<AnimalKingdom/>}/>
        <Route path="/universal-studios" element={<UniversalStudios/>}/>
        <Route path="/islands-of-adventure" element={<IslandsOfAdventure/>}/>
        <Route path="/volcano-bay" element={<VolcanoBay/>}/>
        <Route path="/disney-hotels" element={<DisneyHotels/>}/>
        <Route path="/universal-hotels" element={<UniversalHotels/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
