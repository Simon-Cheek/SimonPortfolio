/** @jsxImportSource @emotion/react */
import Button from 'react-bootstrap/Button';
import { colors } from '../styles/colors';
import { css } from '@emotion/react';



function Btn({ color, shade = "normal", gradient = false, ...rest }) {

  let btnShade;

  switch (shade) {
    case "light":
      btnShade = "03";
      break;
    case "dark":
      btnShade = "06";
      break;
    default:
      btnShade = "05";
  }


  const clr = `${color}${btnShade}`;

  const generalStyle = css`
    padding: 0.5em 1em;
    border: none !important;
    border-radius: 8px;
  `;

  let btnStyle;

  if (!gradient) {
    btnStyle = css`
      background-color: ${colors[clr]} !important;
    `;
  } else {

    const darkShade = btnShade - 1;
    const darkClr = `${color}0${darkShade}`;

    btnStyle = css`
      background-image: linear-gradient(to right, ${colors[darkClr]}, ${colors[clr]}) !important;
    `;
  }


  return (
    <>
      <Button {...rest} css={[btnStyle, generalStyle]}>
        {rest.children}
      </Button>
    </>
  );

}

export default Btn;