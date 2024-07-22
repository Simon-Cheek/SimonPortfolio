/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../styles/colors";
import { H1, H4, H5, Paragraph } from "../Text";
import Separator from "../Separator";
import Btn from "../Button";

import SimonPic from "../../assets/SimonPortPic.jpg";

function HeroText() {
  const mainStyle = css`
    max-width: 450px;
    padding: 12px;
    @media (max-width: 1023px) {
      text-align: center;
    }
  `;

  const pStyle = css`
    color: ${colors.blue09};
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
    color: ${colors.blue08};
  `;

  const btnStyle = css`
    margin-right: 1em;
  `;

  return (
    <div css={mainStyle}>
      <H5 customCSS={h5Style}>Composer - Software Engineer</H5>
      <H1 customCSS={h1Style}>SIMON CHEEK</H1>
      <Separator size="md" />
      <Paragraph customCSS={pStyle} weight="semibold">
        As a <span css={spanStyle}>Music / Computer Science</span> student at
        Brigham Young University, my passion for both innovation and technical
        expertise makes me a wonderful fit for your team!
      </Paragraph>
      <Separator size="md" />
      <div>
        <Btn
          color="blue"
          shade="light"
          gradient
          long
          customCSS={btnStyle}
          to="/music"
        >
          Music
        </Btn>
        <Btn color="brown" shade="light" long gradient to="/software">
          Software
        </Btn>
      </div>
    </div>
  );
}

function HeroVisual() {
  const containerStyle = css`
    width: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2em 0;
  `;

  const imgStyle = css`
    height: 225px;
    width: 200px;
    border-radius: 24px;
    aspect-ratio: 0.9;
    object-fit: cover;
    z-index: 100;
  `;

  const blueStyle = css`
    height: 190px;
    width: 200px;
    border-radius: 16px;
    background-color: ${colors.blue03};
    transform: translateY(-100px) translateX(80px);
    position: absolute;
    opacity: 0.85;
    @media (max-width: 1023px) {
      transform: translateY(-60px) translateX(60px);
      border-radius: 40px;
    }
  `;

  const brownStyle = css`
    height: 190px;
    width: 200px;
    border-radius: 16px;
    background-color: ${colors.brown01};
    transform: translateY(100px) translateX(-80px);
    position: absolute;
    opacity: 0.85;
    @media (max-width: 1023px) {
      transform: translateY(60px) translateX(-60px);
      border-radius: 40px;
    }
  `;

  return (
    <div css={containerStyle}>
      <div css={blueStyle}></div>
      <img src={SimonPic} css={imgStyle} />
      <div css={brownStyle}></div>
    </div>
  );
}

function Hero() {
  const heroStyle = css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-height: 700px;
    @media (min-width: 1264px) {
      transform: scale(1.1);
    }
    @media (max-width: 1023px) {
      flex-direction: column;
    }
  `;

  return (
    <div css={heroStyle}>
      <HeroText />
      <HeroVisual />
    </div>
  );
}

export default Hero;
