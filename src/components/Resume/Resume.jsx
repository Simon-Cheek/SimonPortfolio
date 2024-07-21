/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MusicResume from "./MusicResume";
import SoftwareResume from "./SoftwareResume";
import PageHeader from "../PageHeader";

function Resume() {
  const containerStyle = css`
    display: flex;
  `;

  return (
    <>
      <PageHeader header="Resume" />
      <div css={containerStyle}>
        <MusicResume />
        <SoftwareResume />
      </div>
    </>
  );
}

export default Resume;
