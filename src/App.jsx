/** @jsxImportSource @emotion/react */
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ColorPage from "./components/ColorPage";
import { H1, H2, H3, H4, H5, H6, Paragraph } from "./components/Text";
import Hero from "./components/Home/Hero";
import Btn from "./components/Button";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/colors" element={<ColorPage />} />
          {/* <Route exact path="/" element={ } /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
