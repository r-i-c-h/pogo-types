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
  margin-bottom: 0.4em;
  box-shadow: var(--boxshadow);
  border-right: var(--tbody-border);
  border-left: var(--tbody-border);
`;

const TitleLine = styled.caption`
  h1 {
    line-height: 0.4;
    font-size: 1.2rem;
    letter-spacing: 2px;
    font-weight: 700;
    margin: 0.4em;
    padding: 2px;

    @media screen and (max-width: 450px){
      font-size: calc(0.8 * 1rem);
      line-height: 0.1;
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