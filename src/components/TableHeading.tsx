import React from 'react';
import styled from 'styled-components/macro';

const TheHeader = styled.thead`
  /* display: block; */
  width: 100%;
  position: sticky;
  top: 0;
`;

const SuperTitle = styled.th`
  background: lightgray;
  color: ${props => props.color};
  margin: 0.2rem;
`;
const ColTitle = styled.th`
  background: #fefefe;
  font-size: 1rem;
  text-align: center;
`;
const TypeColTitle = styled.th`
  background: #fefefe;
  font-size: 1.4rem;
  text-transform: capitalize;
  border-bottom: 1px solid #bbb;
  border-left: 4px double #000;
  border-right: 4px double #000;
`;

const HeaderBottomRow = styled.tr`
  border-top: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  box-shadow: 0px 2px 3px 0px rgba(50,50,50,0.5);
  & th:nth-child(1) {
    border-right: 1px red solid;
  }
  &  th:nth-child(4) {
    border-left: 1px red solid;
  }
`;

const TableHeading = () => (
  <TheHeader>
    <tr>
      <SuperTitle colSpan={2} scope="colgroup" color="green"><span role="img" aria-label="swords">⚔️⚔️</span>Move Effectiveness<span role="img" aria-label="swords">⚔️⚔️</span></SuperTitle>
      <TypeColTitle scope="col" colSpan={1} rowSpan={2}>Type</TypeColTitle>
      <SuperTitle colSpan={2} scope="colgroup" color="red"><span role="img" aria-label="shield">🛡</span>Pokemon Weaknesses<span role="img" aria-label="shield">🛡</span></SuperTitle>
    </tr>

    <HeaderBottomRow>
      <ColTitle scope="col">Destroys</ColTitle>
      <ColTitle scope="col">Bad VS</ColTitle>
      {/* <th className="col-heading-null">&nbsp;</th> */}
      <ColTitle scope="col">Safe From</ColTitle>
      <ColTitle scope="col">Killed By</ColTitle>
    </HeaderBottomRow>
  </TheHeader>
);

export default TableHeading;