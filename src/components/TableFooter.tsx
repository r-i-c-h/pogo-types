import React from 'react';
import styled from 'styled-components/macro';

/* Technically, under an old spec <tfoot> element goes in a table after <thead> but BEFORE <tbody>. Changing the <table> to display:grid seems to need everything go back to the logical order */
const TheFooter = styled.tfoot`
  background: var(--clr-light);
  border: var(--row-border);
  box-shadow: var(--boxshadow);
  & td {
    padding: 0 2em;
  }
`;
const Shadowed = styled.span`
  box-shadow: var(--boxshadow);
`;
const TableFooter = () => (
  <TheFooter>
    <tr>
      <td colSpan={5}>
        <p><Shadowed>Emphasized</Shadowed> icons denote a <Shadowed>doubled</Shadowed> multiplier applies, which means that type-icon is "double-resisted" </p>
      </td>
    </tr>
  </TheFooter>
);

export default TableFooter;