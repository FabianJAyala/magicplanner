import React, { useRef } from "react";
import Intro from "../Components/IntroPage/Intro";
import About from "../Components/IntroPage/About";
import Divider from "../Components/TemplateComp/Divider";
import QuoteForm from "../Components/Form/QuoteForm";

function Home() {
  const aboutRef = useRef();

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Intro scrollToAbout={scrollToAbout} />
      <div ref={aboutRef}>
        <About/>
      </div>
      <Divider/>
      <QuoteForm/>
    </>
  );
}

export default Home;

