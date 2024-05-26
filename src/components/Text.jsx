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

export function H1({ children }) {

  const h1Style = css`
    font-family: "Montserrat", sans-serif;
    font-size: 3em;
    font-weight: 700;
    margin: 8px 4px;
    padding: 4px 0;
  `

  return (
    <h1 css={h1Style}>
      {children}
    </h1>
  )
}

export function H2({ children }) {

  const h2Style = css`
    font-family: "Montserrat", sans-serif;
    font-size: 2.5em;
    font-weight: 700;
    margin: 8px 4px;
    padding: 4px 0;
  `

  return (
    <h2 css={h2Style}>
      {children}
    </h2>
  )
}

export function H3({ children }) {

  const h3Style = css`
    font-family: "Montserrat", sans-serif;
    font-size: 2em;
    font-weight: 700;
    margin: 4px 4px;
    padding: 4px 0;
  `

  return (
    <h3 css={h3Style}>
      {children}
    </h3>
  )
}

export function H4({ children }) {

  const h4Style = css`
    font-family: "Montserrat", sans-serif;
    font-size: 1.5em;
    font-weight: 700;
    margin: 4x 4px;
    padding: 4px 0;
  `

  return (
    <h4 css={h4Style}>
      {children}
    </h4>
  )
}

export function H5({ children }) {

  const h5Style = css`
    font-family: "Montserrat", sans-serif;
    font-size: 1em;
    font-weight: 700;
    margin: 0x 4px;
    padding: 4px 0;
  `

  return (
    <h5 css={h5Style}>
      {children}
    </h5>
  )
}

export function H6({ children }) {

  const h6Style = css`
    font-family: "Montserrat", sans-serif;
    font-size: 0.75em;
    font-weight: 700;
    margin: 0 4px;
    padding: 0;
  `

  return (
    <h6 css={h6Style}>
      {children}
    </h6>
  )
}