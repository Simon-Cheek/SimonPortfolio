/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Separator({ size = "md", direction = "horizontal" }) {
  let orient = (direction === "horizontal") ? "height" : "width";
  let span;
  switch (size) {
    case "xs":
      span = "4";
      break;
    case "sm":
      span = "8";
      break;
    case "lg":
      span = "16";
      break;
    case "xl":
      span = "24";
      break;
    default:
      span = "12";
  }

  const sepStyle = css`
    ${orient}: ${span}px;
  `;

  return (
    <div css={sepStyle}></div>
  );
}



export default Separator;