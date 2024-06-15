/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { H2, H4, H6, Paragraph } from "../Text";
import { colors } from "../../styles/colors";
import Card from "../Card";

import javaLogo from "../../assets/java-logo.png";
import reactLogo from "../../assets/react-logo.jpg";
import musicLogo from "../../assets/treble-clef.png";
import Separator from "../Separator";
import Btn from "../Button";

function SkillsList({ skills }) {
  const listStyle = css`
    display: flex;
    flex-direction: column;
    padding: 1em 0;
    align-items: center;
  `;

  const pStyle = css`
    font-size: 0.9em;
    font-weight: 600;
    text-align: center;
  `;

  return (
    <div css={listStyle}>
      {skills &&
        skills.map((skill) => (
          <Paragraph key={skill} customCSS={pStyle}>
            {skill}
          </Paragraph>
        ))}
    </div>
  );
}

function SkillsPromo() {
  const skillsCards = [
    {
      title: "WEB DEVELOPMENT",
      img: reactLogo,
      skills: [
        "HTML",
        "CSS",
        "Javascript / TypeScript",
        "Bootstrap",
        "React",
        "Node",
        "UI / UX",
        "Figma",
        "Unit Testing via Jest",
      ],
    },
    {
      title: "SOFTWARE ENGINEERING",
      img: javaLogo,
      skills: [
        "Python",
        "Java",
        "C++",
        "MySQL / MongoDB / DynamoDB",
        "Data Structures / Algorithms",
        "SDLC & CI/CD",
        "AWS (EC2, Lambda, CDK, and More)",
        "Flutter SDK",
      ],
    },
    {
      title: "MUSIC",
      img: musicLogo,
      skills: [
        "Music Composition",
        "Arranging / Copying",
        "Orchestration",
        "Clarinet Performance",
        "Teaching Experience",
      ],
    },
  ];

  const skillStyle = css`
    display: flex;
    padding: 0 2em;
    justify-content: center;
    align-items: center;
    @media (max-width: 1023px) {
      flex-direction: column;
    }
  `;

  const skillCardStyle = css`
    border-radius: 20px;
    background-color: ${colors.gray01}79;
    margin: 0 1em;
    max-width: 85vw;
    transition: transform 0.5s;
    &:hover {
      transform: scale(1.05);
    }
    @media (max-width: 1023px) {
      margin: 2em 0;
      width: 350px;
    }
  `;

  const innerCardStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    min-width: 200px;
    padding: 1em 0.5em;
  `;

  const imgStyle = css`
    height: 52px;
    width: 52px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-bottom: 0.5em;
  `;

  const headerStyle = css`
    font-style: italic;
    color: ${colors.brown07};
    letter-spacing: 1px;
    margin: 0.5em 0;
    font-size: 0.9em;
    text-align: center;
  `;

  return (
    <div css={skillStyle}>
      {skillsCards.map((card) => (
        <Card key={card.title} customCSS={skillCardStyle}>
          <div css={innerCardStyle}>
            <img src={card.img} css={imgStyle} />
            <H6 customCSS={headerStyle}>{card.title}</H6>
            <SkillsList skills={card.skills} />
          </div>
        </Card>
      ))}
    </div>
  );
}

function Header() {
  const headerStyle = css`
    font-style: italic;
    color: ${colors.blue07};
    font-weight: 600;
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
      <Btn color="blue" shade="light" gradient long>
        Download Resume
      </Btn>
    </div>
  );
}

function Skills() {
  return (
    <>
      <Header />
      <Separator size="xl" />
      <SkillsPromo />
      <Separator size="xl" />
      <ResumeBtn />
      <Separator />
    </>
  );
}

export default Skills;
