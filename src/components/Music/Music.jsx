import MusicHero from "./MusicHero";
import MusicInfo from "./MusicInfo";
import FilteredList from "../FilteredList";
import { musicCardConfig } from "../../musicConfig";

function Music() {
  return (
    <>
      <MusicHero />
      <MusicInfo />
      <FilteredList config={musicCardConfig} header="List of Works" />
    </>
  );
}

export default Music;
