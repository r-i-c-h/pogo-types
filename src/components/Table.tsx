import React from 'react';
import styled from 'styled-components/macro';

import TableHeading from './TableHeading';
import TableBody from './TableBody';

const TheTable = styled.table`
  margin: auto;
  margin-top: 0.4em;
  margin-bottom: 1rem;
  table-layout: fixed;
  width: 100%;
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

/**
 <table class="types-table">
      <thead>
        <tr>
          <th class="col-superheading" colspan="2">Attacking</th>
          <th class="col-superheading-middle" scope="col" rowspan="2">Type</th>
          <th class="col-superheading" colspan="2">Defending</th>
        </tr>
        <tr>
          <th scope="col" class="col-heading">Destroys</th>
          <th scope="col" class="col-heading">Bad VS</th>
          <!-- <th class="col-heading-null">&nbsp;</th> -->
          <th scope="col" class="col-heading">Safe From</th>
          <th scope="col" class="col-heading">Killed By</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="col-destroys"></td>
          <td class="col-bad">rock ghost steel</td>
          <th class="col-type" scope="row">Normal</th>
          <td class="col-safe">Ghost</td>
          <td class="col-killed">Fighting</td>
        </tr>
        <tr>
          <td class="col-destroys">
            <use xlink:href="#steel" href="#steel" />
            Steel Rock Normal Ice Dark</td>
          <td class="col-bad">Flying Poison Psychic Bug Ghost Fairy</td>
          <th class="col-type">Fighting</th>
          <td class="col-safe">Rock Bug Dark</td>
          <td class="col-killed">Flying Psychic Fairy</td>
        </tr>
      </tbody>
    </table>
*/