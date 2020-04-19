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
    font-size: 2vw;
    font-weight: 700;
    letter-spacing: 2px;
    margin: 0.6em;
    padding: 2px;
    line-height: 0.2;
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