/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../styles/colors";

function Card({ children, customCSS, fullShadow = false }) {
  const cardStyle = css`
    padding: 1em;
    margin: 4px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    background-color: ${colors.gray01}6a;
  `;

  const fullStyle = fullShadow
    ? css`
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1),
          -1px -1px 4px rgba(0, 0, 0, 0.1);
      `
    : css``;

  return <div css={[cardStyle, fullStyle, customCSS]}>{children}</div>;
}

export default Card;
