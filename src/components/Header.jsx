/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../styles/colors";
import { Container, Nav, Navbar } from "react-bootstrap";
import Btn from "./Button";

function Header() {
  const navbarStyle = css`
    margin-bottom: 12px;

    background-image: linear-gradient(
      ${colors.blue05},
      ${colors.blue06}
    ) !important;
    padding: 4px 12px;
    min-height: 64px;
  `;

  const navbarText = css`
    font-family: "Montserrat", sans-serif !important;
    color: ${colors.gray00} !important;
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
      background-color: rgb(228, 236, 255);
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
    font-style: italic;
    font-size: 1.5em;
    font-weight: 700 !important;
    padding-left: 0;
  `;

  const pushRight = css`
    display: flex !important;
    justify-content: flex-end !important;
    align-items: center !important;
    flex-basis: 100% !important;
  `;

  return (
    <Navbar
      expand="md"
      className="bg-body-tertiary"
      fixed="top"
      variant="dark"
      css={navbarStyle}
    >
      <Container fluid>
        <Navbar.Brand href="/" css={[navbarText, navbarHead]}>
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          css={css`
            border-width: 3px;
          `}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" css={pushRight}>
            <Nav.Link href="/about" css={[navbarText, navbarAnimated]}>
              About
            </Nav.Link>
            <Nav.Link href="/music" css={[navbarText, navbarAnimated]}>
              Music
            </Nav.Link>
            <Nav.Link href="/software" css={[navbarText, navbarAnimated]}>
              Software
            </Nav.Link>
            <Nav.Link href="/contact" css={navbarText}>
              <Btn shade="light" color="blue" gradient bold>
                Contact
              </Btn>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
