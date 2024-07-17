/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../styles/colors";
import { H3, H4, Paragraph } from "../Text";
import Separator from "../Separator";
import { upcomingProjects } from "../../musicConfig";
import BlueRow from "../BlueRow";

function ProjectEntry({ title, date }) {
  const containerStyle = css`
    text-align: center;
    margin-top: 1.5em;
  `;

  const pStyle = css`
    font-style: italic;
  `;

  const h4Style = css`
    padding-top: 0;
    margin-top: 0;
    font-size: 1.2em;
  `;
  return (
    <div css={containerStyle}>
      <Paragraph weight="semibold" customCSS={pStyle}>
        {date}
      </Paragraph>
      <H4 customCSS={h4Style}>{title}</H4>
    </div>
  );
}

function MusicInfo() {
  const backgroundStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const headerStyle = css`
    color: ${colors.blue08};
    font-style: italic;
    font-weight: 600;
    font-size: 1.75em;
    text-align: center;
  `;

  return (
    <BlueRow customCSS={backgroundStyle}>
      <H3 customCSS={headerStyle}>Recent and Upcoming Projects</H3>
      <Separator size="lg" />
      <div>
        {upcomingProjects.map((project) => (
          <ProjectEntry
            key={project.title}
            title={project.title}
            date={project.date}
          />
        ))}
      </div>
    </BlueRow>
  );
}

export default MusicInfo;
