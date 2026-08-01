/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../styles/colors";
import { H2, H3, H5, Paragraph } from "../Text";
import { aboutConfig } from "../../homeConfig";
import { HOME_ROW_MAX_WIDTH, HOME_ROW_PADDING } from "./Hero";

function AboutText() {
  const formatStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
  `;

  const h2Style = css`
    color: ${colors.textPrimary};
    font-weight: 700;
    @media (max-width: 767px) {
      text-align: center;
    }
  `;

  const pStyle = css`
    max-width: 500px;
    color: ${colors.textSecondary};
    font-size: 0.95em;
    line-height: 1.5;
    @media (max-width: 767px) {
      text-align: center;
    }
  `;

  return (
    <div css={formatStyle}>
      <div>
        <H2 customCSS={h2Style}>About Me</H2>
        <Paragraph customCSS={pStyle}>{aboutConfig.bio}</Paragraph>
      </div>
    </div>
  );
}

function TimelineEntry({ primaryText, secondaryText }) {
  const entryStyle = css`
    background-color: ${colors.bgSurface};
    border: 1px solid ${colors.borderSubtle};
    border-radius: 12px;
    padding: 0.5em 3em;
    margin: 0.6em;
    width: 380px;
    @media (max-width: 479px) {
      width: 300px;
    }
  `;

  const primaryStyle = css`
    padding: 0;
    margin: 0;
    color: ${colors.textPrimary};
    font-weight: 600;
    font-size: 1.2em;
  `;

  const secondaryStyle = css`
    color: ${colors.accent03};
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
      {aboutConfig.timeline.map((entry) => (
        <TimelineEntry
          key={entry.primaryText}
          primaryText={entry.primaryText}
          secondaryText={entry.secondaryText}
        />
      ))}
    </div>
  );
}

function AboutMe() {
  const aboutStyle = css`
    max-width: ${HOME_ROW_MAX_WIDTH};
    margin: 0 auto 60px;
    padding: ${HOME_ROW_PADDING};
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1023px) {
      flex-direction: column;
      align-items: center;
      padding-top: 1em;
    }
  `;

  return (
    <div css={aboutStyle}>
      <AboutText />
      <AboutTimeline />
    </div>
  );
}

export default AboutMe;
