import React from 'react';
import styled from 'styled-components/macro';

import TableHeading from './TableHeading';
import TableBody from './TableBody';

const TheTable = styled.table`
  margin: auto;
  table-layout: fixed;
  width: 98%;
  border-collapse: collapse;
  border-spacing: 0;
`;

const TitleLine = styled.caption`
  h1 {
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 2px;
    margin: 0.2rem;
    padding: 0;
  }
  & .dropWordOnMobile {
    @media screen and (max-width: 640px){
    display: none;
  }
  }
`;
const Table = () => (
  <TheTable>
    <TitleLine><h1>POKÉMON GO TYPES<span className="dropWordOnMobile"> EFFECTIVENESS</span></h1></TitleLine>
    <colgroup span={2}></colgroup>
    <colgroup span={1}></colgroup>
    <colgroup span={2}></colgroup>
    <TableHeading />
    <TableBody />
  </TheTable>
);

export default Table;