/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { sweCardConfig } from "../../softwareConfig";
import { featuredProjectConfig } from "../../homeConfig";
import PageHeader from "../PageHeader";
import Separator from "../Separator";
import SoftwareExp from "./SoftwareExp";
import SoftwareHero from "./SoftwareHero";
import FeaturedProject from "../Home/FeaturedProject";
import Card from "../Card";
import { H5, Mono, Paragraph } from "../Text";
import { colors } from "../../styles/colors";

function OtherProjects({ config }) {
  const wrapStyle = css`
    max-width: 800px;
    width: 90%;
    margin: 0 auto;
  `;

  const headerStyle = css`
    color: ${colors.textMuted};
    letter-spacing: 1px;
    font-size: 0.8em;
    text-align: center;
    display: block;
    margin-bottom: 1em;
  `;

  const cardListStyle = css`
    display: flex;
    flex-direction: column;
    gap: 1.25em;
  `;

  const cardInnerStyle = css`
    padding: 1.25em 1.5em;
  `;

  const titleStyle = css`
    color: ${colors.textPrimary};
  `;

  const descStyle = css`
    color: ${colors.textSecondary};
    font-size: 0.9em;
    line-height: 1.5;
  `;

  const chipRowStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.4em;
    margin-top: 0.75em;
  `;

  const chipStyle = css`
    border: 1px solid ${colors.borderSubtle};
    border-radius: 999px;
    padding: 0.2em 0.7em;
    color: ${colors.textSecondary};
    font-size: 0.75em;
  `;

  const linkStyle = css`
    color: ${colors.accent03};
    text-decoration: none;
    font-weight: 600;
    display: inline-block;
    margin-top: 1em;
    &:hover {
      text-decoration: underline;
    }
  `;

  return (
    <div css={wrapStyle}>
      <Mono customCSS={headerStyle}>OTHER PROJECTS</Mono>
      <div css={cardListStyle}>
        {config.map(({ title, desc, sideText, inviteLink }) => (
          <Card key={title}>
            <div css={cardInnerStyle}>
              <H5 customCSS={titleStyle}>{title}</H5>
              <Paragraph customCSS={descStyle}>{desc}</Paragraph>
              <div css={chipRowStyle}>
                {sideText.map((tag) => (
                  <Mono key={tag} customCSS={chipStyle}>
                    {tag}
                  </Mono>
                ))}
              </div>
              {inviteLink && (
                <a
                  href={inviteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  css={linkStyle}
                >
                  View Code →
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Software() {
  return (
    <>
      <PageHeader header="Software" />
      <SoftwareHero />
      <Separator size="xls" />
      <SoftwareExp />
      <Separator size="xl" />
      <FeaturedProject {...featuredProjectConfig} compact />
      <Separator size="xl" />
      <OtherProjects config={sweCardConfig} />
      <Separator size="xl" />
    </>
  );
}

export default Software;
