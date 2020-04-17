import React from 'react';
import styled from 'styled-components/macro';
import { typesArr } from '../globalValues/GlobalConstants';
import TableRow from './TableRow';

const TBody = styled.tbody`
  box-shadow: var(--boxshadow);
  border-right: var(--tbody-border);
  border-left: var(--tbody-border);
`;


const TableBody: React.FC = (): JSX.Element => (
  <TBody>
    {typesArr.map((x: string) => {
      return (<TableRow pogoType={x} key={x + 'row'} />);
    })}
  </TBody>
);

export default TableBody;