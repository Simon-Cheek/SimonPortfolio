/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { H2, Mono, Paragraph } from "../Text";
import { colors } from "../../styles/colors";
import Card from "../Card";
import Separator from "../Separator";
import Btn from "../Button";
import FeaturedProject from "./FeaturedProject";
import {
  skillsConfig,
  featuredProjectConfig,
  researchConfig,
} from "../../homeConfig";

function SkillsCategory({ title, skills }) {
  const cardStyle = css`
    margin: 0.75em;
    width: 260px;
  `;

  const innerStyle = css`
    padding: 0.5em;
  `;

  const titleStyle = css`
    color: ${colors.accent03};
    letter-spacing: 1px;
    font-size: 0.85em;
  `;

  const chipListStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    margin-top: 0.75em;
  `;

  const chipStyle = css`
    border: 1px solid ${colors.borderSubtle};
    border-radius: 10px;
    padding: 0.65em 1.4em;
    line-height: 1.4;
    color: ${colors.textSecondary};
    font-size: 0.8em;
    max-width: 100%;
  `;

  return (
    <Card customCSS={cardStyle}>
      <div css={innerStyle}>
        <Mono customCSS={titleStyle}>{title}</Mono>
        <div css={chipListStyle}>
          {skills.map((skill) => (
            <Mono key={skill} customCSS={chipStyle}>
              {skill}
            </Mono>
          ))}
        </div>
      </div>
    </Card>
  );
}

function SkillsPromo() {
  const skillStyle = css`
    display: flex;
    flex-wrap: wrap;
    padding: 0 2em;
    justify-content: center;
    align-items: stretch;
  `;

  return (
    <div css={skillStyle}>
      {skillsConfig.map((category) => (
        <SkillsCategory key={category.title} {...category} />
      ))}
    </div>
  );
}

function ResearchStrip() {
  const wrapStyle = css`
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    padding: 0 1.5em;
  `;

  const pStyle = css`
    color: ${colors.textSecondary};
    font-size: 0.95em;
    line-height: 1.5;
  `;

  const linkStyle = css`
    color: ${colors.accent03};
    text-decoration: none;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  `;

  return (
    <div css={wrapStyle}>
      <Paragraph customCSS={pStyle}>
        {researchConfig.text}
        {researchConfig.linkHref && (
          <>
            {" "}
            <a
              href={researchConfig.linkHref}
              target="_blank"
              rel="noopener noreferrer"
              css={linkStyle}
            >
              {researchConfig.linkLabel} →
            </a>
          </>
        )}
      </Paragraph>
    </div>
  );
}

function Header() {
  const headerStyle = css`
    color: ${colors.textPrimary};
    font-weight: 700;
  `;

  return (
    <div style={{ textAlign: "center" }}>
      <H2 customCSS={headerStyle}>Skills</H2>
    </div>
  );
}

function ResumeBtn() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <a href="/sweResume.pdf" download="sweResume.pdf">
        <Btn color="accent" gradient long>
          Download Resume
        </Btn>
      </a>
    </div>
  );
}

function Skills() {
  return (
    <>
      <FeaturedProject {...featuredProjectConfig} />
      <Separator size="xl" />
      <ResearchStrip />
      <Separator size="xl" />
      <Header />
      <Separator size="lg" />
      <SkillsPromo />
      <Separator size="xl" />
      <ResumeBtn />
      <Separator />
    </>
  );
}

export default Skills;
