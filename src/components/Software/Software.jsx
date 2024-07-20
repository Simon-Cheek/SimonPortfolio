import { sweCardConfig } from "../../softwareConfig";
import FilteredList from "../FilteredList";
import PageHeader from "../PageHeader";
import Separator from "../Separator";
import SoftwareExp from "./SoftwareExp";
import SoftwareHero from "./SoftwareHero";

function Software() {
  return (
    <>
      <PageHeader header="Software" />
      <SoftwareHero />
      <Separator size="xls" />
      <SoftwareExp />
      <FilteredList
        config={sweCardConfig}
        header="Personal Projects"
        buttonText="Code"
      />
    </>
  );
}

export default Software;
