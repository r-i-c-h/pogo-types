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

const Table = () => (
  <TheTable>
    <colgroup span={2}></colgroup>
    <col />
    <colgroup span={2}></colgroup>
    <TableHeading />
    <TableBody />
  </TheTable>
);

export default Table;