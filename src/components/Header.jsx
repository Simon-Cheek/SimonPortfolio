/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../styles/colors";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Btn from "./Button";
import SocialIcons from "./SocialIcons";

function Header() {
  const navbarStyle = css`
    margin-bottom: 12px;
    background-color: ${colors.bgPage} !important;
    border-bottom: 1px solid ${colors.borderSubtle};
    padding: 4px 12px;
    min-height: 64px;
  `;

  const navbarText = css`
    font-family: "Inter", sans-serif !important;
    color: ${colors.textPrimary} !important;
    font-weight: 500;
    font-size: 0.9em;
    padding: 0.1em 0 !important;
    margin: 0.2em 0.65em;
    }
  `;

  const navbarAnimated = css`
    position: relative;
    transition: transform 0.3s ease-out;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      border-radius: 16%;
      bottom: 0;
      left: 0;
      background-color: ${colors.accent03};
      transition: transform 0.25s ease-out;
    }

    &:hover {
      display: inline-block;
      transform: scale(1.1);
    }

    &:hover::after {
      transform: scaleX(1);
    }
  `;

  const navbarHead = css`
    font-family: "JetBrains Mono", monospace !important;
    font-size: 1.2em;
    font-weight: 700 !important;
    padding-left: 0;
  `;

  const pushRight = css`
    display: flex !important;
    justify-content: flex-end !important;
    align-items: center !important;
    flex-basis: 100% !important;
    gap: 0.5em;
  `;

  return (
    <Navbar expand="md" fixed="top" variant="dark" css={navbarStyle}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" css={[navbarText, navbarHead]}>
          Simon Cheek
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          css={css`
            border-width: 3px;
          `}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" css={pushRight}>
            <Nav.Link as={Link} to="/software" css={[navbarText, navbarAnimated]}>
              Software
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" css={[navbarText, navbarAnimated]}>
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" css={navbarText}>
              <Btn color="accent" bold>
                Contact
              </Btn>
            </Nav.Link>
            <SocialIcons
              size={18}
              customCSS={css`
                margin-left: 0.5em;
              `}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
