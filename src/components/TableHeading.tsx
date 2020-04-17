import React from 'react';
import styled from 'styled-components/macro';

const TheHeader = styled.thead`
  width: 100%;
  position: sticky;
  top: 0;
`;
const SuperTitle = styled.th`
  background: var(--clr-light);
  font-size: 0.8rem;
  padding: 0;
  border-right: var(--tbody-border);
  border-left: var(--tbody-border);
  border-top: var(--col-border);
`;
const TypeColumnTitle = styled.th`
  width: 12vw; /* This doesn't take a max\min-width. ONLY a width :-/  7rem = MAGIC NUMBER */
  background: var(--clr-header-white);
  text-transform: uppercase;
  text-align: center;
  border-top: 1px solid var(--clr-light);
  border-bottom: var(--row-border);
  border-left: var(--center-col-border);
  border-right: var(--center-col-border);
`;

const ColTitle = styled.th`
  font-size: 0.9rem;
  line-height: 0.8;
  white-space: nowrap;
  color: ${props => props.color};
  background: var(--clr-header-white);
  text-transform: uppercase;
  text-align: center;
  border-left: var(--col-border);
  border-right: var(--col-border);
`;

const HeaderBottomRow = styled.tr`
  line-height: 0;
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
        <DropWordOnMobile>Pokémon</DropWordOnMobile> Weakness
        <EmojiSpan role="img" aria-label="shield">🛡</EmojiSpan>
      </SuperTitle>
    </tr>

    <HeaderBottomRow>
      <ColTitle scope="col" color="red">Bad VS</ColTitle>
      <ColTitle scope="col" color="green">Destroys</ColTitle>
      {/* <th className="col-heading-null">&nbsp;</th> */}
      <ColTitle scope="col" color="red">Killed By</ColTitle>
      <ColTitle scope="col" color="green">Safe From</ColTitle>
    </HeaderBottomRow>
  </TheHeader>
);

export default TableHeading;