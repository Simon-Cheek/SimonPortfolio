/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../styles/colors";
import { H3, H5, Mono, Paragraph } from "../Text";
import Card from "../Card";

function FeaturedProject({
  title,
  tagline,
  description,
  stack,
  links,
  compact = false,
}) {
  const cardStyle = css`
    max-width: 800px;
    width: 90%;
    margin: 0 auto;
  `;

  const innerStyle = css`
    padding: ${compact ? "1.5em" : "2em"};
  `;

  const eyebrowStyle = css`
    color: ${colors.accent03};
    letter-spacing: 1px;
    font-size: 0.8em;
  `;

  const titleStyle = css`
    color: ${colors.textPrimary};
    margin: 0.2em 0;
  `;

  const taglineStyle = css`
    color: ${colors.textSecondary};
    font-style: italic;
  `;

  const descStyle = css`
    color: ${colors.textSecondary};
    line-height: 1.5;
    margin-top: 1em;
    ${compact && `font-size: 0.9em;`}
  `;

  const stackRowStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    margin-top: 1.25em;
  `;

  const chipStyle = css`
    border: 1px solid ${colors.borderSubtle};
    border-radius: 999px;
    padding: 0.3em 0.9em;
    color: ${colors.textSecondary};
  `;

  const linksRowStyle = css`
    display: flex;
    gap: 1em;
    margin-top: 1.5em;
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
    <Card customCSS={cardStyle}>
      <div css={innerStyle}>
        <Mono customCSS={eyebrowStyle}>FEATURED PROJECT</Mono>
        <H3 customCSS={titleStyle}>{title}</H3>
        <H5 customCSS={taglineStyle}>{tagline}</H5>
        <Paragraph customCSS={descStyle}>{description}</Paragraph>
        <div css={stackRowStyle}>
          {stack.map((item) => (
            <Mono key={item} customCSS={chipStyle}>
              {item}
            </Mono>
          ))}
        </div>
        <div css={linksRowStyle}>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              css={linkStyle}
            >
              {label} →
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default FeaturedProject;
