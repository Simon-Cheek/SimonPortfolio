/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Btn from "../Button";
import PageHeader from "../PageHeader";
import Separator from "../Separator";
import { Paragraph } from "../Text";

function Contact() {
  const pStyle = css`
    padding: 0 1em;
  `;

  return (
    <>
      <PageHeader header="Contact" />
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Paragraph weight="semibold">Thank you for your interest!</Paragraph>
        <Separator size="lg" />
        <Paragraph customCSS={pStyle}>
          If you would like to get in touch with me, the best way to do so is
          via Email:
        </Paragraph>
        <Paragraph weight="semibold">simon.cheek@yahoo.com</Paragraph>
        <Separator size="lg" />
        <Paragraph customCSS={pStyle}>
          Other potential pages of interest are listed here:
        </Paragraph>
        <Separator />
        <Btn
          to="https://www.linkedin.com/in/simon-cheek-83726b175/"
          color="blue"
        >
          LinkedIn
        </Btn>
        <Separator />
        <Btn to="https://github.com/Simon-Cheek" color="blue">
          GitHub
        </Btn>
        <Separator />
        <Btn to="https://www.youtube.com/@simoncheek992" color="blue">
          YouTube
        </Btn>
      </div>
    </>
  );
}

export default Contact;
