/** @jsxImportSource @emotion/react */
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

import Header from "./components/Header";
import ColorPage from "./components/ColorPage";
import Footer from "./components/Footer";

const Home = lazy(() => import("./components/Home/Home"));

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

      <Footer />
    </>
  );
}

export default App;
