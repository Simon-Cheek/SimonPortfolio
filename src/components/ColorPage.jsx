/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from '../styles/colors';


export function ColorPage() {

    const containerStyle = css`
        display: grid;
        grid-template-columns: minmax(100px, 300px) auto;
        grid-gap: 16px;
    `;

    const divStyle = css`
        display: flex;
        flex-direction: horizontal;
        align-items: center;
        margin: 32px 0;
    `;

    const blockStyle = css`
        width: 100px;
        height: 50px;
        box-shadow: 3px 3px 5px rgba(0,0,0,0.2);
        border-radius: 12px;
    `;

    const colorEntries = Object.entries(colors);


    return (
        <>
            <h1>Colors:</h1>
            <div css={containerStyle}>
                {colorEntries.map(([key, value]) => (
                    <div css={divStyle} key={key}>
                        <p css={css`margin: 0 12px;`}>{`${key}: ${value}`}</p>
                        <div css={[blockStyle, css`background-color: ${value};`]}></div>
                    </div>
                ))}
            </div>
        </>

    )
}


export default ColorPage;