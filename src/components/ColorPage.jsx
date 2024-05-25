/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from '../styles/colors';
import { Container, Table } from 'react-bootstrap';


export function ColorPage() {

  const tableStyle = css`
    min-width: 400px;
    max-width: 800px;
    justify-content: center;
  `

  const colorEntries = Object.entries(colors);


  return (

    <Container fluid css={tableStyle}>
      <h1 css={css`text-align: center;`}>Colors</h1>

      <Table bordered >

        <thead>
          <tr>
            <th>Color</th>
            <th>00</th>
            <th>01</th>
            <th>02</th>
            <th>03</th>
            <th>04</th>
            <th>05</th>
            <th>06</th>
            <th>07</th>
            <th>08</th>
            <th>09</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Blue</td>
            <td css={css`background-color: ${colors.blue00} !important;`}></td>
            <td css={css`background-color: ${colors.blue01} !important;`}></td>
            <td css={css`background-color: ${colors.blue02} !important;`}></td>
            <td css={css`background-color: ${colors.blue03} !important;`}></td>
            <td css={css`background-color: ${colors.blue04} !important;`}></td>
            <td css={css`background-color: ${colors.blue05} !important;`}></td>
            <td css={css`background-color: ${colors.blue06} !important;`}></td>
            <td css={css`background-color: ${colors.blue07} !important;`}></td>
            <td css={css`background-color: ${colors.blue08} !important;`}></td>
            <td css={css`background-color: ${colors.blue09} !important;`}></td>
          </tr>

          <tr>
            <td>Brown</td>
            <td css={css`background-color: ${colors.brown00} !important;`}></td>
            <td css={css`background-color: ${colors.brown01} !important;`}></td>
            <td css={css`background-color: ${colors.brown02} !important;`}></td>
            <td css={css`background-color: ${colors.brown03} !important;`}></td>
            <td css={css`background-color: ${colors.brown04} !important;`}></td>
            <td css={css`background-color: ${colors.brown05} !important;`}></td>
            <td css={css`background-color: ${colors.brown06} !important;`}></td>
            <td css={css`background-color: ${colors.brown07} !important;`}></td>
            <td css={css`background-color: ${colors.brown08} !important;`}></td>
            <td css={css`background-color: ${colors.brown09} !important;`}></td>
          </tr>

          <tr>
            <td>Gray</td>
            <td css={css`background-color: ${colors.gray00} !important;`}></td>
            <td css={css`background-color: ${colors.gray01} !important;`}></td>
            <td css={css`background-color: ${colors.gray02} !important;`}></td>
            <td css={css`background-color: ${colors.gray03} !important;`}></td>
            <td css={css`background-color: ${colors.gray04} !important;`}></td>
            <td css={css`background-color: ${colors.gray05} !important;`}></td>
            <td css={css`background-color: ${colors.gray06} !important;`}></td>
            <td css={css`background-color: ${colors.gray07} !important;`}></td>
            <td css={css`background-color: ${colors.gray08} !important;`}></td>
            <td css={css`background-color: ${colors.gray09} !important;`}></td>
          </tr>


        </tbody>

      </Table>

    </Container>

  )
}


export default ColorPage;