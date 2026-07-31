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
    max-width: 480px;
    padding: 12px;
    @media (max-width: 1023px) {
      text-align: center;
    }
  `;

  const pStyle = css`
    color: ${colors.textSecondary};
    font-size: 1em;
    line-height: 1.5;
  `;

  const eyebrowStyle = css`
    color: ${colors.accent03};
    font-size: 0.95em;
    letter-spacing: 0.5px;
  `;

  const h1Style = css`
    color: ${colors.textPrimary};
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
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
    width: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2em 0;
  `;

  const imgStyle = css`
    height: 260px;
    width: 220px;
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

function Hero() {
  const heroStyle = css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-height: 540px;
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
