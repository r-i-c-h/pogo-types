import React from 'react';
import styled from 'styled-components/macro';

const TheHeader = styled.thead`
  /* display: block; */
  width: 100%;
  position: sticky;
  top: 0;
`;
const SuperTitle = styled.th`
  background: var(--clr-light);
  margin: 0.2rem;
`;
const TypeColumnTitle = styled.th`
  font-weight: bold;
  width: 12vw; /* This doesn't take a max\min-width. ONLY a width :-/  7rem = MAGIC NUMBER */
  background: var(--header-white);
  text-transform: uppercase;
  text-align: center;
  border-top: 1px solid var(--clr-light);
  border-bottom: var(--row-border);
  border-left: var(--center-col-border);
  border-right: var(--center-col-border);
`;

const ColTitle = styled.th`
  font-size: 0.8rem;
  font-weight: bold;
  color: ${props => props.color};
  background: var(--header-white);
  text-transform: uppercase;
  text-align: center;
  border-left: var(--col-border);
  border-right: var(--col-border);
`;

const HeaderBottomRow = styled.tr`
  border-top: var(--row-border);
  border-bottom: var(--row-border);
  box-shadow: var(--boxshadow);
`;

const EmojiSpan = styled.span`
  @media screen and (max-width: 960px){
    display: none;
  }
`;

const DropWordOnMobile = styled.span`
  @media screen and (max-width: 640px){
    display: none;
  }
`;


const TableHeading = () => (
  <TheHeader>
    <tr>
      <SuperTitle colSpan={2} scope="colgroup" color="green">
        <EmojiSpan role="img" aria-label="swords">⚔️⚔️</EmojiSpan> {/* eslint-disable-line */}
        <DropWordOnMobile>Move</DropWordOnMobile> Effectiveness
        <EmojiSpan role="img" aria-label="swords">⚔️⚔️</EmojiSpan> {/* eslint-disable-line */}
      </SuperTitle>
      <TypeColumnTitle scope="col" colSpan={1} rowSpan={2}>Type</TypeColumnTitle>
      <SuperTitle colSpan={2} scope="colgroup" color="red">
        <EmojiSpan role="img" aria-label="shield">🛡</EmojiSpan>
        <DropWordOnMobile>Pokémon</DropWordOnMobile> Weaknesses
        <EmojiSpan role="img" aria-label="shield">🛡</EmojiSpan>
      </SuperTitle>
    </tr>

    <HeaderBottomRow>
      <ColTitle scope="col" color="green">Destroys</ColTitle>
      <ColTitle scope="col" color="red">Bad VS</ColTitle>
      {/* <th className="col-heading-null">&nbsp;</th> */}
      <ColTitle scope="col" color="green">Safe From</ColTitle>
      <ColTitle scope="col" color="red">Killed By</ColTitle>
    </HeaderBottomRow>
  </TheHeader>
);

export default TableHeading;