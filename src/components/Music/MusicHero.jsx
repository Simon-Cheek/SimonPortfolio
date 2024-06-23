/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { H2, Paragraph } from "../Text";

import SimonClarinet from "../../assets/SimonClarinet.png";

function MusicHeroVisual() {
  const imgStyle = css`
    height: 240px;
    width: 240px;
    object-fit: cover;
    border-radius: 32px;
  `;

  return (
    <div>
      <img src={SimonClarinet} css={imgStyle} />
      <div />
      <div />
    </div>
  );
}

function MusicHeroMain() {
  return (
    <div>
      <MusicHeroVisual />
      <div>
        <Paragraph></Paragraph>
        <Paragraph></Paragraph>
      </div>
    </div>
  );
}

function MusicHero() {
  const containerStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3em 0;
  `;

  const headerStyle = css`
    font-style: italic;
    font-weight: 600;
  `;

  return (
    <div css={containerStyle}>
      <H2 customCSS={headerStyle}>Music</H2>
      <MusicHeroMain />
    </div>
  );
}

export default MusicHero;
