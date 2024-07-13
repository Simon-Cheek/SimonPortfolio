/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { H2, Paragraph } from "../Text";

import SimonClarinet from "../../assets/SimonClarinet.png";
import { colors } from "../../styles/colors";
import Separator from "../Separator";

function MusicHeroVisual() {
  const imgStyle = css`
    height: 240px;
    width: 240px;
    object-fit: cover;
    border-radius: 24px;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.25);
  `;

  const brownBarStyle = css`
    position: absolute;
    width: 250px;
    height: 40px;
    background-image: linear-gradient(
      to right,
      ${colors.blue04},
      ${colors.blue02}
    );
    top: -20%;
    left: 12%;
    z-index: -1;
    border-radius: 40px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  `;

  const blueBarStyle = css`
    position: absolute;
    width: 250px;
    height: 40px;
    background-image: linear-gradient(
      to right,
      ${colors.brown04},
      ${colors.brown02}
    );
    bottom: -20%;
    right: 12%;
    z-index: -1;
    border-radius: 40px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  `;

  const visualContainerStyle = css`
    position: relative;
    margin: 32px 60px;
  `;

  return (
    <div css={visualContainerStyle}>
      <img src={SimonClarinet} css={imgStyle} />
      <div css={brownBarStyle} />
      <div css={blueBarStyle} />
    </div>
  );
}

function MusicHeroFrame() {
  const frameStyle = css`
    width: 560px;
    height: 315px;
    border-radius: 8px;
    margin: 24px 0;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
  `;

  return (
    <iframe
      src="https://www.youtube.com/embed/ce8tYejoEd0?si=gyuC2VP27ki3odoh"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      css={frameStyle}
    />
  );
}

function MusicHeroMain() {
  const containerStyle = css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  `;

  const pContainerStyle = css`
    max-width: 50%;
  `;

  return (
    <div css={containerStyle}>
      <MusicHeroVisual />
      <div css={pContainerStyle}>
        <Paragraph>
          The music of Simon Cheek (b. 2001, BMI) explores human psychology and
          our connection with the natural environment through a variety of music
          ranging from solo to orchestral works. Currently a student of music
          composition and computer science at Brigham Young University (Provo,
          Utah), Simon's music has been performed by the BYU Philharmonic
          Orchestra, Group for New Music, and Honors Brass Quintet.
        </Paragraph>
        <Separator />
        <Paragraph>
          His music has also been performed in places such as the International
          Clarinet Association's (ICA) Clarinetfest, the North American
          Saxophone Alliance, the June in Buffalo New Music Festival, the
          Brevard Music Center, and more! While at BYU, Simon's music has won
          Grand Prize in the Vera Mayhew Music Composition Contest (open to all
          BYU students) in 2020, 2022, and 2024.
        </Paragraph>
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
      <Separator size="xl" />
      <MusicHeroMain />
      <Separator size="xl" />
      <MusicHeroFrame />
    </div>
  );
}

export default MusicHero;
