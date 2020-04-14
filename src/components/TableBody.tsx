import React from 'react';
import styled from 'styled-components/macro';
import { typesArr } from '../globalValues/GlobalConstants';
import TableRow from './TableRow';

const TBody = styled.tbody`
  box-shadow: 0px 2px 2px 0px rgba(50,50,50,0.5);
  border-right: 1px solid rgba(50,50,50,0.5);
  border-left: 1px solid rgba(50,50,50,0.5);
`;


const TableBody: React.FC = (): JSX.Element => (
  <TBody>
    {typesArr.map((x: string) => {
      return (<TableRow pogoType={x} key={x + 'row'} />);
    })}
  </TBody>
);

export default TableBody;

/**


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