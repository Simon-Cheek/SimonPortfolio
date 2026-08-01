/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { H3, Mono, Paragraph } from "../Text";
import { colors } from "../../styles/colors";
import { skillsConfig } from "../../homeConfig";

function SoftwareHero() {
  const containerStyle = css`
    max-width: 700px;
    margin: 2em auto;
    padding: 0 2em;
  `;

  const h3Style = css`
    margin-left: 0;
    color: ${colors.accent03};
  `;

  const pStyle = css`
    color: ${colors.textSecondary};
    max-width: 90%;
    line-height: 1.5;
  `;

  const categoryStyle = css`
    margin-top: 1.5em;
  `;

  const categoryTitleStyle = css`
    color: ${colors.textMuted};
    letter-spacing: 1px;
    font-size: 0.75em;
  `;

  const chipListStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    margin-top: 0.5em;
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
    <div css={containerStyle}>
      <Paragraph weight="semibold">As a</Paragraph>
      <H3 customCSS={h3Style}>Backend & Distributed Systems Engineer,</H3>
      <Paragraph weight="semibold" customCSS={pStyle}>
        I build software end-to-end, with a focus on backend systems and
        infrastructure. The stack I work in:
      </Paragraph>
      {skillsConfig.map((category) => (
        <div key={category.title} css={categoryStyle}>
          <Mono customCSS={categoryTitleStyle}>{category.title}</Mono>
          <div css={chipListStyle}>
            {category.skills.map((skill) => (
              <Mono key={skill} customCSS={chipStyle}>
                {skill}
              </Mono>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SoftwareHero;
