/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ResumeEntry from "./ResumeEntry";
import PageHeader from "../PageHeader";
import { musicResumeConfig, softwareResumeConfig } from "../../resumeConfig";
import Separator from "../Separator";

function Resume() {
  const containerStyle = css`
    display: flex;
    justify-content: center;
    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
  `;

  return (
    <>
      <PageHeader header="Resume" />
      <div css={containerStyle}>
        <ResumeEntry
          title={musicResumeConfig.title}
          desc1={musicResumeConfig.desc1}
          desc2={musicResumeConfig.desc2}
          listItems={musicResumeConfig.listItems}
        />
        <ResumeEntry
          title={softwareResumeConfig.title}
          desc1={softwareResumeConfig.desc1}
          desc2={softwareResumeConfig.desc2}
          listItems={softwareResumeConfig.listItems}
        />
      </div>
      <Separator size="lg" />
    </>
  );
}

export default Resume;
