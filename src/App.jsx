/** @jsxImportSource @emotion/react */
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "./components/Header";
import ColorPage from "./components/ColorPage";
import Footer from "./components/Footer";
import { css, Global } from "@emotion/react";
import { colors } from "./styles/colors";

const globalStyle = css`
  body {
    background-color: ${colors.bgPage};
    color: ${colors.textPrimary};
  }
`;

const Home = lazy(() => import("./components/Home/Home"));
// Music page is cut from the site for now (kept in the codebase to bring back later).
const Software = lazy(() => import("./components/Software/Software"));
const Resume = lazy(() => import("./components/Resume/Resume"));
const Contact = lazy(() => import("./components/Contact/Contact"));

// Ensures Footer sticks to bottom
const minHeightStyle = css`
  min-height: calc(100vh - 72px - 64px);
`;

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Header />

      <div css={minHeightStyle}>
        <Suspense fallback={null}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/colors" element={<ColorPage />} />
            <Route path="/software" element={<Software />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route exact path="/" element={ } /> */}
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
