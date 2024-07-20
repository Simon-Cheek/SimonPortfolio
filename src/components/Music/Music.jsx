import MusicHero from "./MusicHero";
import MusicInfo from "./MusicInfo";
import FilteredList from "../FilteredList";
import { musicCardConfig } from "../../musicConfig";
import PageHeader from "../PageHeader";
import Separator from "../Separator";

function Music() {
  return (
    <>
      <PageHeader header="Music" />
      <MusicHero />
      <Separator size="xl" />
      <MusicInfo />
      <FilteredList
        config={musicCardConfig}
        header="List of Works"
        buttonText="Listen Here"
      />
    </>
  );
}

export default Music;
