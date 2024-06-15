/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Separator from "../Separator";

function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Separator size="lg" />
      <Skills />
      <Separator size="lg" />
    </>
  );
}

export default Home;
