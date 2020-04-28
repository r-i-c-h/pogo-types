import React from 'react';
import styled from 'styled-components/macro';

const TheHeader = styled.thead`
  position: sticky;
  top: 0;
  border-spacing: 0;
`;

const SuperTitle = styled.th`
  width: 45%;
  background: var(--clr-light);
  background-clip: padding-box; /* <~~ Need for Firefox */
  border: var(--blk-border);
  border-right: var(--tbody-border);
  border-left: var(--tbody-border);
  white-space: nowrap;
  @media screen and (max-width: 479px){
    font-size: 0.8rem;
    line-height: 0.9;
    padding: 0;
  }
  @media screen and (min-width: 1100px){ /* scale back down for horizontal lappy/desktop display */
    font-size: 0.8rem;
    line-height: 0.9;
    padding:0;
  }
`;
const CenterColumnTitle = styled.th`
  width: 10%;
  /* width: 12vw; This doesn't take a max\min-width. ONLY a width = MAGIC NUMBER :-( */
  background: var(--clr-header-white);
  background-clip: padding-box; /* <~~ Need for Firefox */
  text-transform: uppercase;
  text-align: center;
  border-top: var(--row-border);
  border-bottom: var(--row-border);
  border-left: var(--center-col-border);
  border-right: var(--center-col-border);
`;

const HeaderBottomRow = styled.tr`
  text-transform: uppercase;
  text-align: center;
  border-top: var(--blk-border);
  border-bottom: var(--row-border);
  box-shadow: var(--boxshadow);
`;

const ColTitle = styled.th`
  white-space: nowrap;
  color: ${props => props.color};
  background: var(--clr-header-white);
  background-clip: padding-box;
  border-right: var(--col-border);
  /* &:nth-of-type(1),
  &:nth-of-type(4){ width: 30% } */
`;

const EmojiSpan = styled.span`
  @media screen and (max-width: 419px){
    display: none;
  }
`;

const TableHeading = () => (
  <TheHeader>
    <tr>
      <SuperTitle colSpan={2} scope="colgroup">
        <EmojiSpan role="img" aria-label="swords">⚔️⚔️</EmojiSpan> {/* eslint-disable-line */}
        Attacks
        <EmojiSpan role="img" aria-label="swords">⚔️⚔️</EmojiSpan> {/* eslint-disable-line */}
      </SuperTitle>
      <CenterColumnTitle scope="col" colSpan={1} rowSpan={2}>Type</CenterColumnTitle>
      <SuperTitle colSpan={2} scope="colgroup">
        <EmojiSpan role="img" aria-label="shields">🛡🛡</EmojiSpan>
        Poké<EmojiSpan>mon</EmojiSpan> Weakness
        <EmojiSpan role="img" aria-label="shields">🛡🛡</EmojiSpan>
      </SuperTitle>
    </tr>

    <HeaderBottomRow>
      <ColTitle scope="col" color="var(--header-red)">Bad VS</ColTitle>
      <ColTitle scope="col" color="var(--header-green)">Good VS</ColTitle>
      {/* <th className="col-heading-null">&nbsp;</th> */}
      <ColTitle scope="col" color="var(--header-red)">Danger</ColTitle>
      <ColTitle scope="col" color="var(--header-green)">Safe From</ColTitle>
    </HeaderBottomRow>
  </TheHeader >
);

export default TableHeading;