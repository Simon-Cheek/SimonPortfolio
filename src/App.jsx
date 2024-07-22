/** @jsxImportSource @emotion/react */
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

import Header from "./components/Header";
import ColorPage from "./components/ColorPage";
import Footer from "./components/Footer";
import { css } from "@emotion/react";

const Home = lazy(() => import("./components/Home/Home"));
const Music = lazy(() => import("./components/Music/Music"));
const Software = lazy(() => import("./components/Software/Software"));
const Resume = lazy(() => import("./components/Resume/Resume"));

const minHeightStyle = css`
  min-height: calc(100vh - 72px - 64px);
`;

function App() {
  return (
    <>
      <Header />

      <div css={minHeightStyle}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/colors" element={<ColorPage />} />
            <Route path="/music" element={<Music />} />
            <Route path="/software" element={<Software />} />
            <Route path="/resume" element={<Resume />} />
            {/* <Route exact path="/" element={ } /> */}
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />
    </>
  );
}

export default App;
