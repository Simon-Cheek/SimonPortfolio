/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Paragraph } from "../Text";

import clarinetPic from "../../assets/clarinetPic.jpg";

function AboutHero() {
  const containerStyle = css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 3em 0;
  `;

  const imgStyle = css`
    height: 250px;
    width: 200px;
    object-fit: cover;
    border-radius: 18px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  `;

  return (
    <div css={containerStyle}>
      <img src={clarinetPic} css={imgStyle} />
      <Paragraph>Some things are here!</Paragraph>
    </div>
  );
}

export default AboutHero;
