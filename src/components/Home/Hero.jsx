/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../styles/colors";
import { H1, Mono, Paragraph } from "../Text";
import Separator from "../Separator";
import Btn from "../Button";
import SocialIcons from "../SocialIcons";
import { heroConfig } from "../../homeConfig";

import SimonPic from "../../assets/SimonPortPic.jpg";

function HeroText() {
  const mainStyle = css`
    max-width: 580px;
    padding: 12px;
    @media (max-width: 1023px) {
      text-align: center;
    }
  `;

  const pStyle = css`
    color: ${colors.textSecondary};
    font-size: 1.1em;
    line-height: 1.6;
  `;

  const eyebrowStyle = css`
    color: ${colors.accent03};
    font-size: 1em;
    letter-spacing: 0.5px;
  `;

  const h1Style = css`
    color: ${colors.textPrimary};
    font-size: 3.6em;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
    @media (max-width: 1023px) {
      font-size: 2.6em;
    }
  `;

  const ctaRowStyle = css`
    display: flex;
    align-items: center;
    gap: 1.5em;
    @media (max-width: 1023px) {
      justify-content: center;
    }
  `;

  return (
    <div css={mainStyle}>
      <Mono customCSS={eyebrowStyle}>{heroConfig.eyebrow}</Mono>
      <H1 customCSS={h1Style}>{heroConfig.name}</H1>
      <Separator size="md" />
      <Paragraph customCSS={pStyle} weight="normal">
        {heroConfig.bio}
      </Paragraph>
      <Separator size="md" />
      <div css={ctaRowStyle}>
        <Btn color="accent" gradient long to={heroConfig.ctaTo}>
          {heroConfig.ctaLabel}
        </Btn>
        <SocialIcons size={22} />
      </div>
    </div>
  );
}

function HeroVisual() {
  const containerStyle = css`
    width: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2em 0;
  `;

  const imgStyle = css`
    height: 310px;
    width: 260px;
    border-radius: 12px;
    border: 1px solid ${colors.borderSubtle};
    object-fit: cover;
  `;

  return (
    <div css={containerStyle}>
      <img src={SimonPic} css={imgStyle} />
    </div>
  );
}

// Shared with AboutMe.jsx so the two sections' columns share the same
// horizontal anchor points instead of drifting based on each section's own
// content width. Keep these two values in sync if either changes.
export const HOME_ROW_MAX_WIDTH = "1140px";
export const HOME_ROW_PADDING = "0 3em";

function Hero() {
  const heroStyle = css`
    max-width: ${HOME_ROW_MAX_WIDTH};
    margin: 0 auto;
    padding: ${HOME_ROW_PADDING};
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 720px;
    @media (max-width: 1023px) {
      flex-direction: column;
      justify-content: center;
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
