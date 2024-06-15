/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../styles/colors";

import linkedIn from "../assets/linkedin.png";
import { Paragraph } from "./Text";

function FooterIcons() {
  const sectionStyle = css`
    display: flex;
  `;

  const iconStyle = css`
    height: 40px;
    width: 40px;
    border-radius: 8px;
  `;

  const iconList = [
    {
      src: linkedIn,
      link: "https://www.linkedin.com/in/simon-cheek-83726b175/",
    },
  ];

  return (
    <div>
      {iconList.map((icon) => (
        <a href={icon.link} key={icon.link}>
          <img src={icon.src} css={iconStyle} />
        </a>
      ))}
    </div>
  );
}

function FooterInfo() {
  const infoStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items; center;
  `;

  // Using P instead of Paragraph here for Copyright Symbol
  const pStyle = css`
    color: ${colors.gray01};
    font-size: 0.75em;
    font-weight: 600;
    text-align: center;
    margin: 0;
    font-family: "Montserrat", sans-serif;
  `;

  const info = ["simon.cheek@yahoo.com", `&copy; 2024 Simon Cheek`];

  return (
    <div css={infoStyle}>
      {info.map((i) => (
        <p key={i} css={pStyle} dangerouslySetInnerHTML={{ __html: i }} />
      ))}
    </div>
  );
}

function Footer() {
  const footerStyle = css`
    background-image: linear-gradient(${colors.gray07}, ${colors.gray09});
    min-height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `;

  return (
    <div css={footerStyle}>
      <FooterIcons />
      <FooterInfo />
    </div>
  );
}

export default Footer;
