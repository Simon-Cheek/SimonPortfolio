/** @jsxImportSource @emotion/react */
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ColorPage from "./components/ColorPage";
import { H1, H2, H3, H4, H5, H6, Paragraph } from "./components/Text";
import Hero from "./components/Home/Hero";
import Btn from "./components/Button";

function App() {
  return (
    <>
      <Header />

      <Hero />

      <BrowserRouter>
        <Routes>
          <Route path="/colors" element={<ColorPage />} />
          {/* <Route exact path="/" element={ } /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
