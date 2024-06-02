/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../styles/colors";
import { H1, H4, H5, Paragraph } from "../Text";
import Separator from "../Separator";
import Btn from "../Button";

function HeroText() {
  const mainStyle = css`
    max-width: 450px;
    padding: 12px;
  `;

  const pStyle = css`
    color: ${colors.blue08};
    font-size: 0.9em;
  `;

  const h5Style = css`
    color: ${colors.brown04};
    font-size: 18px;
    padding-bottom: 0;
  `;

  const h1Style = css`
    color: ${colors.blue06};
    font-style: italic;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
  `;

  const spanStyle = css`
    font-weight: 700;
    font-size: 1.2em;
    color: ${colors.blue07};
  `;

  return (
    <div css={mainStyle}>
      <H5 customCSS={h5Style}>Composer - Software Engineer</H5>
      <H1 customCSS={h1Style}>SIMON CHEEK</H1>
      <Separator />
      <Paragraph customCSS={pStyle} weight="semibold">
        As a <span css={spanStyle}>Music / Computer Science</span> student at
        Brigham Young University, my passion for both innovation and technical
        expertise makes me a wonderful fit for your team!
      </Paragraph>
      <Separator />
      <div>
        <Btn>Music</Btn>
        <Btn>Software</Btn>
      </div>
    </div>
  );
}

function HeroVisual() {}

function Hero() {
  const heroStyle = css`
    display: flex;
  `;

  return (
    <div css={heroStyle}>
      <HeroText />
      <HeroVisual />
    </div>
  );
}

export default Hero;
