/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from './styles/colors';

const color = 'white';

function Header() {
    return (
        <>
            <p css={pStyle}>{colors.blue}</p>
            <div
                css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
            >
                Hover to change color.
            </div>
        </>
    );
}

export default App;