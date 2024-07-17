/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../styles/colors";
import { H4, H5, H6, Paragraph } from "./Text";
import Separator from "./Separator";
import Btn from "./Button";
import { useMemo, useState } from "react";

const checkValue = (config, searchValue) => {
  if (
    config.title &&
    config.title.toLowerCase().includes(searchValue.toLowerCase())
  )
    return true;
  if (config.sideText && config.sideText.length > 0) {
    for (const text of config.sideText) {
      if (text.toLowerCase().includes(searchValue.toLowerCase())) return true;
    }
  }
  if (config.searchTerms && config.searchTerms.length > 0) {
    for (const term of config.searchTerms) {
      if (term.toLowerCase().includes(searchValue.toLowerCase())) return true;
    }
  }
  return false;
};

function ListCard({ title, desc, sideText, inviteLink }) {
  const workCardStyle = css`
    background-color: ${colors.brown00};
    display: flex;
    flex-direction: column;
    padding: 1em;
    border-radius: 12px;
    box-shadow: 2.5px 2.5px 4px rgba(0, 0, 0, 0.15);
    margin: 1em 0;
    width: 100%;
    @media (max-width: 767px) {
    }
  `;

  const h5Style = css`
    color: ${colors.brown09};
    font-weight: 600;
    font-size: 1.2em;
  `;

  const pStyle = css`
    font-size: 0.85em;
    display: block;
    margin-right: 1.5em;
    margin-top: -0.75em;
    @media (max-width: 767px) {
      margin-bottom: 0.5em;
    }
  `;

  const sideTextStyle = css`
    white-space: nowrap;
    color: ${colors.blue09};
    margin-bottom: 2px;
    text-align: right;
    @media (max-width: 767px) {
      text-align: left;
    }
  `;

  const topStyle = css`
    display: flex;
    justify-content: space-between;
    @media (max-width: 767px) {
      flex-direction: column;
      margin-bottom: 1em;
    }
  `;

  const bottomStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: end;
    @media (max-width: 767px) {
      flex-direction: column;
      align-items: start;
    }
  `;

  return (
    <div css={workCardStyle}>
      <div css={topStyle}>
        <H5 customCSS={h5Style}>{title}</H5>
        <div style={{ paddingTop: "4px" }}>
          {sideText &&
            sideText.map((text) => (
              <H6 key={text} customCSS={sideTextStyle}>
                {text}
              </H6>
            ))}
        </div>
      </div>
      <div css={bottomStyle}>
        <Paragraph weight="semibold" customCSS={pStyle}>
          {desc}
        </Paragraph>
        {inviteLink && (
          <a href={inviteLink}>
            <Btn shade="dark" color="blue">
              <span style={{ whiteSpace: "nowrap" }}>Listen Here</span>
            </Btn>
          </a>
        )}
      </div>
    </div>
  );
}

function ListOfWorks({ config }) {
  const searchStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const inputStyle = css`
    border-radius: 8px;
    padding: 6px;
    border: 1px solid ${colors.gray09};
    width: 300px;
    background-color: ${colors.white};
  `;

  const listStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 600px;
    overflow-y: scroll;
    padding: 1.5em;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.15);
    width: 90%;
    max-width: 1200px;
    border-radius: 20px;
    background-color: ${colors.white};
  `;

  const [searchValue, setSearchValue] = useState("");

  const filteredConfigs = useMemo(() => {
    return config.filter((item) =>
      !searchValue ? true : checkValue(item, searchValue)
    );
  }, [config, searchValue]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div css={searchStyle}>
        <Paragraph>Search</Paragraph>
        <Separator size="xs" direction="vertical" />
        <input
          onChange={handleChange}
          value={searchValue || ""}
          css={inputStyle}
        ></input>
      </div>
      <Separator size="lg" />
      <div css={listStyle}>
        <H6>Scroll to see more</H6>
        <Separator size="xs" />
        {filteredConfigs.length > 0 ? (
          filteredConfigs.map((config) => (
            <ListCard
              key={config.title}
              title={config.title}
              desc={config.desc}
              sideText={config.sideText}
              inviteLink={config.inviteLink}
            />
          ))
        ) : (
          <ListCard desc="Nothing matches your search!" />
        )}
      </div>
    </>
  );
}

function FilteredList({ config, header }) {
  const headerStyle = css`
    color: ${colors.blue08};
    font-style: italic;
    font-weight: 600;
    font-size: 1.75em;
  `;

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 0;
  `;

  return (
    <div css={containerStyle}>
      <H4 customCSS={headerStyle}>{header}</H4>
      <Separator size="lg" />
      <ListOfWorks config={config} />
    </div>
  );
}

export default FilteredList;
