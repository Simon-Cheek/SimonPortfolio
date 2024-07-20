/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Paragraph({ children, weight = "normal", customCSS }) {
  let fontWgt;

  switch (weight) {
    case "light":
      fontWgt = "300";
      break;
    case "semibold":
      fontWgt = "500";
      break;
    case "bold":
      fontWgt = "700";
      break;
    default:
      fontWgt = "400";
  }

  const pStyle = css`
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 4px 0;
    font-weight: ${fontWgt};
  `;

  return <p css={[pStyle, customCSS]}>{children}</p>;
}

export function H1({ children, customCSS }) {
  const h1Style = css`
    font-family: "Montserrat", sans-serif;
    font-size: 3em;
    font-weight: 700;
    margin: 8px 4px;
    padding: 4px 0;
  `;

  return <h1 css={[h1Style, customCSS]}>{children}</h1>;
}

export function H2({ children, customCSS }) {
  const h2Style = css`
    font-family: "Montserrat", sans-serif;
    font-size: 2.5em;
    font-weight: 700;
    margin: 8px 4px;
    padding: 4px 0;
  `;

  return <h2 css={[h2Style, customCSS]}>{children}</h2>;
}

export function H3({ children, customCSS }) {
  const h3Style = css`
    font-family: "Montserrat", sans-serif;
    font-size: 2em;
    font-weight: 700;
    margin: 4px 4px;
    padding: 4px 0;
  `;

  return <h3 css={[h3Style, customCSS]}>{children}</h3>;
}

export function H4({ children, customCSS }) {
  const h4Style = css`
    font-family: "Montserrat", sans-serif;
    font-size: 1.5em;
    font-weight: 700;
    margin: 4px 4px;
    padding: 4px 0;
  `;

  return <h4 css={[h4Style, customCSS]}>{children}</h4>;
}

export function H5({ children, customCSS }) {
  const h5Style = css`
    font-family: "Montserrat", sans-serif;
    font-size: 1.2em;
    font-weight: 700;
    margin: 0 4px;
    padding: 4px 0;
  `;

  return <h5 css={[h5Style, customCSS]}>{children}</h5>;
}

export function H6({ children, customCSS }) {
  const h6Style = css`
    font-family: "Montserrat", sans-serif;
    font-size: 0.8em;
    font-weight: 700;
    margin: 0 4px;
    padding: 0;
  `;

  return <h6 css={[h6Style, customCSS]}>{children}</h6>;
}
