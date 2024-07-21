/** @jsxImportSource @emotion/react */
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

import Header from "./components/Header";
import ColorPage from "./components/ColorPage";
import Footer from "./components/Footer";
import Software from "./components/Software/Software";

const Home = lazy(() => import("./components/Home/Home"));
const Music = lazy(() => import("./components/Music/Music"));
const Resume = lazy(() => import("./components/Resume/Resume"));

function App() {
  return (
    <>
      <Header />

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

      <Footer />
    </>
  );
}

export default App;
