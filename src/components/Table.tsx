import React from 'react';
import styled from 'styled-components/macro';

import TableHeading from './TableHeading';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

const TheTable = styled.table`
  margin: auto;
  table-layout: auto;
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
    @media screen and (max-width: 500px){
      font-size: 1vh;
      line-height: 1;
    }
  }
`;

const Table = () => (
  <TheTable>
    <TitleLine><h1>POKÉMON GO &mdash; TYPE EFFECTIVENESS</h1></TitleLine>
    <colgroup span={2}></colgroup>
    <colgroup span={1}></colgroup>
    <colgroup span={2}></colgroup>
    <TableHeading />
    <TableBody />
    <TableFooter />
  </TheTable>
);

export default Table;