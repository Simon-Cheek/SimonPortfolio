/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../styles/colors";
import SocialIcons from "./SocialIcons";

function FooterInfo() {
  const infoStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.35em;
  `;

  // Using p instead of Paragraph here for the copyright symbol
  const pStyle = css`
    color: ${colors.textSecondary};
    font-size: 0.75em;
    font-weight: 600;
    text-align: center;
    margin: 0;
    font-family: "Inter", sans-serif;
  `;

  const info = ["simon.cheek@yahoo.com", `&copy; 2026 Simon Cheek`];

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
    background-color: ${colors.bgPage};
    border-top: 1px solid ${colors.borderSubtle};
    min-height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 1em 0;
  `;

  return (
    <div css={footerStyle}>
      <SocialIcons size={22} />
      <FooterInfo />
    </div>
  );
}

export default Footer;
