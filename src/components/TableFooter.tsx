import React from 'react';
import styled from 'styled-components/macro';

/* Technically, under an old spec <tfoot> element goes in a table after <thead> but BEFORE <tbody>. Changing the <table> to display:grid seems to need everything go back to the logical order */
const TheFooter = styled.tfoot`
  font-style: normal;
  background: var(--clr-light);
  border: var(--row-border);
  box-shadow: var(--boxshadow);
  & td {
    padding: 0 1em;
  }
`;

const Quote = styled.blockquote`
  font-style: italic;
  font-weight: normal;
`;
const Shadowed = styled.span`
  box-shadow: var(--boxshadow);
`;
const TableFooter = () => (
  <TheFooter>
    <tr>
      <td colSpan={5}>
        <p><Shadowed>Emphasized</Shadowed> icons denote a type that is <Shadowed>&quot;double-resisted&quot;</Shadowed>. For example: Poison moves do very little damage to Steel-type Pokémon. </p>
        <p>Apologies that all text is shrunk down and hard to read on mobile - The challenge was to fit the entire table on-screen at once for moble-viewing while playing. So, given the raw quantity of information present, function took over form.</p>
        <Quote>May the blessings of RNG be with you &mdash; May all of your hatches be rare, and catches be shiny.</Quote>
      </td>
    </tr>
  </TheFooter>
);

export default TableFooter;