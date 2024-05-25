/** @jsxImportSource @emotion/react */
import 'bootstrap/dist/css/bootstrap.min.css';
import { css } from '@emotion/react';
import { colors } from './styles/colors';

import { Header } from './components/Header';
import Button from 'react-bootstrap/Button';

const pStyle = css`
  color: ${colors.blue};
  font-size: 30px;
`;

const color = 'white';

function App() {
  return (
    <>
      <Header />

    </>
  );
}

export default App;