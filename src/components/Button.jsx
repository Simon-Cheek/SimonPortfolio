/** @jsxImportSource @emotion/react */
import Button from "react-bootstrap/Button";
import { colors } from "../styles/colors";
import { css } from "@emotion/react";

function Btn({
  color,
  shade = "normal",
  gradient = false,
  customCSS,
  ...rest
}) {
  let btnShade;

  switch (shade) {
    case "light":
      btnShade = "03";
      break;
    case "dark":
      btnShade = "05";
      break;
    default:
      btnShade = "04";
  }

  const clr = `${color}${btnShade}`;

  // Darker and Lighter Variant
  const darkerShade = parseInt(btnShade) + 2;
  const darkerClr = `${color}0${darkerShade}`;
  const darkShade = parseInt(btnShade) + 1;
  const darkClr = `${color}0${darkShade}`;
  const lightShade = parseInt(btnShade) - 1;
  const lightClr = `${color}0${lightShade}`;

  // General Button Styling
  const generalStyle = css`
    padding: 0.5em 1em;
    border: none !important;
    border-radius: 8px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  `;

  let hoverStyle = css``;

  // Lighter Upon Hover
  const lightHover = css`
    transition: background-color 0.2s;
    &:hover {
      background-color: ${colors[lightClr]} !important;
    }
  `;

  // Darker Upon Hover
  const darkHover = css`
    transition: background-color 0.2s;
    &:hover {
      background-color: ${colors[darkClr]} !important;
    }
  `;

  // Apply normal OR gradient styling
  let btnStyle;

  if (!gradient) {
    btnStyle = css`
      background-color: ${colors[clr]} !important;
    `;
    if (shade == "light") {
      hoverStyle = darkHover;
    } else {
      hoverStyle = lightHover;
    }
  } else {
    btnStyle = css`
      background-image: linear-gradient(
        to right,
        ${colors[darkClr]},
        ${colors[clr]}
      ) !important;
    `;

    hoverStyle = css`
      transition: transform 0.2s !important;
      &:hover {
        transform: scale(1.08) !important;
      }
    `;
  }

  return (
    <>
      <Button {...rest} css={[generalStyle, btnStyle, hoverStyle, customCSS]}>
        {rest.children}
      </Button>
    </>
  );
}

export default Btn;
