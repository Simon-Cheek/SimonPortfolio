/** @jsxImportSource @emotion/react */
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import ColorPage from './components/ColorPage';
import { Paragraph } from './components/Text';




function App() {

  return (
    <>
      <Header />
      <Paragraph>Will this work???</Paragraph>

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