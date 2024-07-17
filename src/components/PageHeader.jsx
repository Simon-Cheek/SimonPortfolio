/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Separator from "./Separator";
import { H2 } from "./Text";

function PageHeader({ header }) {
  const headerStyle = css`
    font-style: italic;
    font-weight: 600;
    text-align: center;
  `;

  return (
    <>
      <Separator size="xl" />
      <H2 customCSS={headerStyle}>{header}</H2>
      <Separator size="xl" />
    </>
  );
}

export default PageHeader;
