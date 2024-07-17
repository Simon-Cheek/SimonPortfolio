/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "../Card";
import { H5 } from "../Text";
import Separator from "../Separator";

import javaLogo from "../../assets/java-logo.png";
import jsLogo from "../../assets/jslogo.png";
import pythonLogo from "../../assets/python.png";
import reactLogo from "../../assets/react-logo.png";
import nodeLogo from "../../assets/node-logo.png";
import springLogo from "../../assets/spring-logo.png";

function HeroText() {}

function HeroCards() {
  const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const cardStyle = css`
    text-align: center;
    padding: 1.75em 2.5em;
  `;
  const iconStyle = css`
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 12px;
    background-color: #fbfbfe;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  `;

  const iconContainerStyle = css`
    display: flex;
    justify-content: center;
  `;

  const h5Style = css`
    font-size: 1.2em;
    font-weight: 600;
    font-style: italic;
  `;

  return (
    <div css={containerStyle}>
      <Card customCSS={cardStyle}>
        <H5 customCSS={h5Style}>Top Languages</H5>
        <Separator size="sm" />
        <div css={iconContainerStyle}>
          <img src={javaLogo} css={iconStyle} />
          <Separator size="sm" direction="vertical" />
          <img src={jsLogo} css={iconStyle} />
          <Separator size="sm" direction="vertical" />
          <img src={pythonLogo} css={iconStyle} />
        </div>
      </Card>
      <Separator />
      <Card customCSS={cardStyle}>
        <H5 customCSS={h5Style}>Top Frameworks</H5>
        <Separator size="sm" />
        <div css={iconContainerStyle}>
          <img src={reactLogo} css={iconStyle} />
          <Separator size="sm" direction="vertical" />
          <img src={nodeLogo} css={iconStyle} />
          <Separator size="sm" direction="vertical" />
          <img src={springLogo} css={iconStyle} />
        </div>
      </Card>
    </div>
  );
}

function SoftwareHero() {
  return (
    <div>
      <HeroText />
      <HeroCards />
    </div>
  );
}

export default SoftwareHero;
