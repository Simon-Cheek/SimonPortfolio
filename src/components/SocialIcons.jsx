/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { colors } from "../styles/colors";

const LINKS = [
  { label: "GitHub", href: "https://github.com/Simon-Cheek", Icon: FiGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/simon-cheek/",
    Icon: FiLinkedin,
  },
  { label: "Email", href: "mailto:simon.cheek@yahoo.com", Icon: FiMail },
];

function SocialIcons({ size = 20, iconColor, hoverColor, customCSS }) {
  const rowStyle = css`
    display: flex;
    align-items: center;
    gap: 0.9em;
  `;

  const linkStyle = css`
    display: flex;
    color: ${iconColor || colors.textSecondary};
    transition: color 0.2s;
    &:hover {
      color: ${hoverColor || colors.accent03};
    }
  `;

  return (
    <div css={[rowStyle, customCSS]}>
      {LINKS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={label}
          css={linkStyle}
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
