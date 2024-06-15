/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../styles/colors";
import { H2, H3, H5, Paragraph } from "../Text";

function AboutText() {
  const formatStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
  `;

  const h2Style = css`
    color: ${colors.gray08};
    font-style: italic;
    font-weight: 600 !important;
  `;

  const pStyle = css`
    max-width: 500px;
    color: ${colors.blue09};
    font-size: 0.95em;
  `;

  const spanStyle = css`
    font-size: 1.3em;
    font-weight: 600;
    margin: 0 4px;
    padding: 0;
    color: ${colors.blue06};
    font-style: italic;
    line-height: 0;
  `;

  return (
    <div css={formatStyle}>
      <div>
        <H2 customCSS={h2Style}>About Me</H2>
        <Paragraph customCSS={pStyle}>
          Hello! My name is <span css={spanStyle}>Simon Cheek</span> and I am an
          undergraduate student at Brigham Young University. My passion is
          twofold- I dedicate myself to creating works of music ranging from
          solos to large orchestral works as well as software that is efficient,
          intuitive, and scalable!
        </Paragraph>
      </div>
    </div>
  );
}

function TimelineEntry({ primaryText, secondaryText }) {
  const entryStyle = css`
    background-color: ${colors.gray00}99;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.15);
    border-top-left-radius: 24px;
    border-bottom-right-radius: 24px;
    padding: 0.75em 3em;
    margin: 0.6em;
    width: 380px;
  `;

  const primaryStyle = css`
    padding: 0;
    margin: 0;
    font-style: italic;
    color: ${colors.brown07};
    font-weight: 600;
    font-size: 1.2em;
  `;

  const secondaryStyle = css`
    color: ${colors.gray09};
    font-size: 0.8em;
  `;

  return (
    <div css={entryStyle}>
      <H5 customCSS={secondaryStyle}>{secondaryText}</H5>
      <H3 customCSS={primaryStyle}>{primaryText}</H3>
    </div>
  );
}

function AboutTimeline() {
  const timelineStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3em 1em;
  `;

  return (
    <div css={timelineStyle}>
      <TimelineEntry
        primaryText="Web Developer Intern"
        secondaryText="2024 - FamilySearch"
      />
      <TimelineEntry
        primaryText="Student Web Developer"
        secondaryText="2023 - BYU School of Music"
      />
      <TimelineEntry
        primaryText="Teaching Assistant"
        secondaryText="2022 - BYU School of Music"
      />
    </div>
  );
}

function AboutMe() {
  const aboutStyle = css`
    min-height: 300px;
    background-image: linear-gradient(
      to right,
      ${colors.blue02},
      ${colors.blue01},
      ${colors.blue00}
    );
    margin-bottom: 60px;
    display: flex;
    justify-content: space-around;
  `;

  return (
    <div css={aboutStyle}>
      <AboutText />
      <AboutTimeline />
    </div>
  );
}

export default AboutMe;
