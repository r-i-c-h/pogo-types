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
  color: ${props => props.color};
  margin: 0.2rem;
`;
const TypeColumnTitle = styled.th`
  font-weight: bold;
  width: 7rem; /* MAGIC NUMBER */
  background: var(--header-white);
  text-transform: uppercase;
  border-top: 1px solid var(--clr-light);
  border-bottom: var(--row-border);
  border-left: var(--center-col-border);
  border-right: var(--center-col-border);
`;

const ColTitle = styled.th`
  background: var(--header-white);
  font-size: 1rem;
  text-align: center;
  border-left: var(--col-border);
  border-right: var(--col-border);
`;

const HeaderBottomRow = styled.tr`
  border-top: var(--row-border);
  border-bottom: var(--row-border);
  box-shadow: var(--boxshadow);
`;

const TableHeading = () => (
  <TheHeader>
    <tr>
      <SuperTitle colSpan={2} scope="colgroup" color="green"><span role="img" aria-label="swords">⚔️⚔️</span>Move Effectiveness<span role="img" aria-label="swords">⚔️⚔️</span></SuperTitle>
      <TypeColumnTitle scope="col" colSpan={1} rowSpan={2}>Pokemon Type</TypeColumnTitle>
      <SuperTitle colSpan={2} scope="colgroup" color="red"><span role="img" aria-label="shield">🛡</span>Pokemon Weaknesses<span role="img" aria-label="shield">🛡</span></SuperTitle>
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