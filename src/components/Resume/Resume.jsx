/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ResumeEntry from "./ResumeEntry";
import PageHeader from "../PageHeader";
import { musicResumeConfig } from "../../resumeConfig";

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
          title={musicResumeConfig.title}
          desc1={musicResumeConfig.desc1}
          desc2={musicResumeConfig.desc2}
          color={musicResumeConfig.color}
          listItems={musicResumeConfig.listItems}
        />
        <ResumeEntry
          title={musicResumeConfig.title}
          desc1={musicResumeConfig.desc1}
          desc2={musicResumeConfig.desc2}
          color={musicResumeConfig.color}
          listItems={musicResumeConfig.listItems}
        />
      </div>
    </>
  );
}

export default Resume;
