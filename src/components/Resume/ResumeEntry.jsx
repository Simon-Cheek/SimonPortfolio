/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { H4, Paragraph } from "../Text";
import Separator from "../Separator";
import Btn from "../Button";
import Card from "../Card";
import { colors } from "../../styles/colors";
import BulletedList from "../BulletedList";

function ResumeEntry({ title, desc1, desc2, listItems, resume }) {
  const headerStyle = css`
    color: ${colors.textPrimary};
  `;

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const cardStyle = css`
    margin: 1.5em;
    max-width: 600px;
    width: 90%;
  `;

  const pStyle = css`
    color: ${colors.textSecondary};
    text-align: center;
    line-height: 1.5;
  `;

  return (
    <Card customCSS={cardStyle}>
      <div css={containerStyle}>
        <H4 customCSS={headerStyle}>{title}</H4>
        <Separator />
        <Paragraph weight="semibold" customCSS={pStyle}>
          {desc1}
        </Paragraph>
        <Separator size="sm" />
        <a href={`/${resume}`} download={resume}>
          <Btn color="accent" gradient long>
            Download Resume
          </Btn>
        </a>
        <Separator size="sm" />
        <Paragraph weight="semibold" customCSS={pStyle}>
          {desc2}
        </Paragraph>
        <Separator size="sm" />
        <BulletedList paragraph listItems={listItems} />
      </div>
    </Card>
  );
}

export default ResumeEntry;
