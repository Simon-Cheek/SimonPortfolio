/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ResumeEntry from "./ResumeEntry";
import PageHeader from "../PageHeader";
import { resumeConfig } from "../../resumeConfig";
import Separator from "../Separator";

function Resume() {
  const containerStyle = css`
    display: flex;
    justify-content: center;
  `;

  return (
    <>
      <PageHeader header="Resume" />
      <div css={containerStyle}>
        <ResumeEntry
          title={resumeConfig.title}
          desc1={resumeConfig.desc1}
          desc2={resumeConfig.desc2}
          listItems={resumeConfig.listItems}
          resume={resumeConfig.resume}
        />
      </div>
      <Separator size="lg" />
    </>
  );
}

export default Resume;
