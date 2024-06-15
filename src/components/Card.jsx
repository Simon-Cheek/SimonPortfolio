/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Card({ children, customCSS, full = false }) {
  const cardStyle = css`
    padding: 12px;
    margin: 4px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  `;

  const fullStyle = full
    ? css`
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1),
          -1px -1px 4px rgba(0, 0, 0, 0.1);
      `
    : css``;

  return <div css={[cardStyle, fullStyle, customCSS]}>{children}</div>;
}

export default Card;
