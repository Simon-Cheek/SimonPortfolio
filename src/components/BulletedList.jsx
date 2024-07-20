/** @jsxImportSource @emotion/react */

import { Paragraph } from "./Text";

function BulletedList({
  listStyle,
  itemStyle,
  listItems,
  paragraph,
  ...props
}) {
  return paragraph ? (
    <ul css={listStyle}>
      {listItems &&
        listItems.length > 0 &&
        listItems.map((item) => (
          <li key={item}>
            <Paragraph customCSS={itemStyle} {...props}>
              {item}
            </Paragraph>
          </li>
        ))}
    </ul>
  ) : (
    <ul css={listStyle}>
      {listItems &&
        listItems.length > 0 &&
        listItems.map((item) => (
          <li key={item}>
            <span css={itemStyle}>{item}</span>
          </li>
        ))}
    </ul>
  );
}

export default BulletedList;
