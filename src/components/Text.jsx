/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';




export function Paragraph({ children }) {

  const pStyle = css`
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 4px 0;
  `

  return (
    <p css={pStyle}>
      {children}
    </p>
  );
}

export function H1() {
  return;
}

export function H2() {
  return;
}

export function H3() {
  return;
}

export function H4() {
  return;
}

export function H5() {
  return;
}

export function H6() {
  return;
}