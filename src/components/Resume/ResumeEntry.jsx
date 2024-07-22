/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { H3, H4, Paragraph } from "../Text";
import Separator from "../Separator";
import Btn from "../Button";
import Card from "../Card";
import { colors } from "../../styles/colors";
import BulletedList from "../BulletedList";

function ResumeEntry({ title, desc1, desc2, listItems, resume }) {
  const headerStyle = css`
    font-style: italic;
  `;

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const cardStyle = css`
    background-color: ${colors.brown00}a6;
    margin: 1.5em;
    max-width: 600px;
    flex: 1;
  `;

  return (
    <Card customCSS={cardStyle}>
      <div css={containerStyle}>
        <H4 customCSS={headerStyle}>{title}</H4>
        <Separator />
        <Paragraph weight="semibold">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {desc1}
        </Paragraph>
        <Separator size="sm" />
        <Btn color="blue" shade="light" long>
          Resume
        </Btn>
        <Separator size="sm" />
        <Paragraph
          weight="semibold"
          customCSS={css`
            text-align: center;
          `}
        >
          {desc2}
        </Paragraph>
        <Separator size="sm" />
        <BulletedList paragraph listItems={listItems} />
      </div>
    </Card>
  );
}

export default ResumeEntry;
