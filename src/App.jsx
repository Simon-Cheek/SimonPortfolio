/** @jsxImportSource @emotion/react */
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import ColorPage from './components/ColorPage';
import { H1, H2, H3, H4, H5, H6, Paragraph } from './components/Text';




function App() {

  return (
    <>
      <Header />
      <Paragraph>Will this work???</Paragraph>
      <H1>This is H1</H1>
      <H2>This is H2</H2>
      <H3>This is H3</H3>
      <H4>This is H4</H4>
      <H5>This is H5</H5>
      <H6>This is H6</H6>

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