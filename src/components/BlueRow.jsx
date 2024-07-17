/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../styles/colors";

function BlueRow({ children, customCSS }) {
  const blueStyle = css`
    padding: 1em 1em;
    background-image: linear-gradient(
      to right,
      ${colors.blue02},
      ${colors.blue01},
      ${colors.blue00}
    );
  `;

  return <div css={[blueStyle, customCSS]}>{children}</div>;
}

export default BlueRow;
