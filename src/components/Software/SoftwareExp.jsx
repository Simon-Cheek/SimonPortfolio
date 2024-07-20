/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import BlueRow from "../BlueRow";
import { H3, H4, H5, H6 } from "../Text";
import { colors } from "../../styles/colors";
import BulletedList from "../BulletedList";
import { sweExp } from "../../softwareConfig";
import Separator from "../Separator";

function ExpSection({ title, company, details }) {
  const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    margin: 0 0.5em;
  `;
  const headerStyle = css`
    text-align: center;
  `;
  const itemStyle = css`
    margin: 0;
    padding: 0;
    font-size: 0.75em;
  `;
  return (
    <div css={containerStyle}>
      <div css={headerStyle}>
        <H6>{company}</H6>
        <H5>{title}</H5>
      </div>
      <Separator size="xs" />
      <BulletedList
        listItems={details}
        paragraph
        weight="semibold"
        itemStyle={itemStyle}
      />
    </div>
  );
}

function SoftwareExp() {
  const headerStyle = css`
    color: ${colors.blue08};
    font-style: italic;
    font-weight: 600;
    font-size: 1.75em;
    text-align: center;
  `;
  const containerStyle = css`
    display: flex;
    justify-content: center;
  `;
  return (
    <BlueRow>
      <Separator />
      <H3 customCSS={headerStyle}>Work and Educational Experience</H3>
      <Separator size="lg" />
      <div css={containerStyle}>
        {sweExp.map((exp) => (
          <ExpSection
            key={exp.title}
            title={exp.title}
            company={exp.company}
            details={exp.details}
          />
        ))}
      </div>
      <Separator />
    </BlueRow>
  );
}

export default SoftwareExp;
