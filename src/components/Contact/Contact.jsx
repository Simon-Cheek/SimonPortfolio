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
        <Paragraph weight="semibold">
          <a href="mailto:simon.cheek@yahoo.com">simon.cheek@yahoo.com</a>
        </Paragraph>
        <Separator size="lg" />
        <Paragraph customCSS={pStyle}>
          Other potential pages of interest are listed here:
        </Paragraph>
        <Separator />
        <a
          href="https://www.linkedin.com/in/simon-cheek/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Btn color="accent">LinkedIn</Btn>
        </a>
        <Separator />
        <a
          href="https://github.com/Simon-Cheek"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Btn color="accent">GitHub</Btn>
        </a>
      </div>
    </>
  );
}

export default Contact;
