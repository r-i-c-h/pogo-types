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
  p:nth-of-type(3) {
    border-top: var(--center-col-border);
    padding-top: 0.5em;
  }
`;

const Quote = styled.blockquote`
  font-style: italic;
  font-weight: normal;
  margin: auto;
  padding: 0 1rem 1rem 1rem;
`;
const Shadowed = styled.span`
  box-shadow: var(--boxshadow);
`;
const TableFooter = () => (
  <TheFooter>
    <tr>
      <td colSpan={5}>
        <p><Shadowed>Emphasized</Shadowed> icons denote a type that has <Shadowed>&quot;double-resistance&quot;</Shadowed>.</p>
        <p><em>Example</em>: <Shadowed>Poison</Shadowed> moves do very little damage to <Shadowed>Steel</Shadowed>-type Pokémon. </p>
        <p>Obviously the challenge is to fit the entire table on-screen at once for mobile-viewing while playing. So, given the quantity of information, function > form.</p>

        <Quote>May the blessings of RNG be upon you; May all your hatches be rare, encounters be shiny, battles be victorious, and candy be plentiful...
          <footer><cite>- Trainer Shluckyuckle</cite></footer>
        </Quote>
      </td>
    </tr>
  </TheFooter>
);

export default TableFooter;