/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../styles/colors";

function Card({ children, customCSS, fullShadow = false }) {
  const cardStyle = css`
    padding: 1em;
    margin: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
    border: 1px solid ${colors.borderSubtle};
    border-radius: 12px;
    background-color: ${colors.bgSurface};
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
