/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { H3, H5, Mono } from "../Text";
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
    @media (max-width: 767px) {
      margin: 0.75em 0.5em;
    }
  `;
  const headerStyle = css`
    text-align: center;
  `;
  const companyStyle = css`
    color: ${colors.accent03};
    letter-spacing: 0.5px;
  `;
  const titleStyle = css`
    color: ${colors.textPrimary};
  `;
  const itemStyle = css`
    margin: 0;
    padding: 0;
    font-size: 0.75em;
    color: ${colors.textSecondary};
  `;
  return (
    <div css={containerStyle}>
      <div css={headerStyle}>
        <Mono customCSS={companyStyle}>{company}</Mono>
        <H5 customCSS={titleStyle}>{title}</H5>
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
    color: ${colors.textPrimary};
    font-weight: 700;
    font-size: 1.75em;
    text-align: center;
  `;
  const containerStyle = css`
    display: flex;
    justify-content: center;
    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
  `;
  return (
    <div>
      <Separator />
      <H3 customCSS={headerStyle}>Experience</H3>
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
    </div>
  );
}

export default SoftwareExp;
