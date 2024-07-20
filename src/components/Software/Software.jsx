import PageHeader from "../PageHeader";
import Separator from "../Separator";
import SoftwareExp from "./SoftwareExp";
import SoftwareHero from "./SoftwareHero";

function Software() {
  return (
    <>
      <PageHeader header="Software" />
      <SoftwareHero />
      <Separator size="lg" />
      <SoftwareExp />
    </>
  );
}

export default Software;
