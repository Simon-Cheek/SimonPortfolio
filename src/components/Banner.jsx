/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { H1 } from "./Text";
import { colors } from "../styles/colors";

function Banner({ title = "" }) {
  const bannerStyle = css`
    height: 90px;
    background-image: linear-gradient(${colors.blue00}, ${colors.blue02});
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const headerStyle = css`
    font-weight: 600;
    color: ${colors.gray07};
    font-style: italic;
  `;

  return (
    <div css={bannerStyle}>
      <H1 customCSS={headerStyle}>{title}</H1>
    </div>
  );
}

export default Banner;
