/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from '../styles/colors';

const color = 'white';

function Header() {
    return (
        <>
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
                Header Component
            </div>
        </>
    );
}

export default Header;