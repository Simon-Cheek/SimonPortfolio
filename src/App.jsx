/** @jsxImportSource @emotion/react */
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from './components/Header';
import ColorPage from './components/ColorPage';




function App() {

  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route exact path="/colors" element={<ColorPage />} />
          {/* <Route exact path="/" element={ } /> */}
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;