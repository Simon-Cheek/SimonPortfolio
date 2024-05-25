/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from '../styles/colors';
import { Col, Container, Row } from 'react-bootstrap';


export function ColorPage() {

    const blockStyle = css`
        display: block;
        width: 100px;
        height: 50px;
        margin-bottom: 32px;
        box-shadow: 3px 3px 5px rgba(0,0,0,0.1);
    `

    const colorEntries = Object.entries(colors)




    return (
        <Container>
            <h1>Colors</h1>
            {colorEntries.map(([key, value], index) => (
                index % 2 === 0 ? (
                    <Row key={index}>
                        <Col xs={6} lg={2}>
                            <div>
                                <p>{`${key}: ${value}`}</p>
                                <div css={[blockStyle, css`background-color: ${value}`]}></div>
                            </div>
                        </Col>
                        {colorEntries[index + 1] && (
                            <Col xs={6} lg={2}>
                                <p>{`${colorEntries[index + 1][0]}: ${colorEntries[index + 1][1]}`}</p>
                                <div css={[blockStyle, css`background-color: ${colorEntries[index + 1][1]}`]}></div>
                            </Col>
                        )}
                    </Row>
                ) : null
            ))}
        </Container>
    );
}


export default ColorPage;