import React from 'react';
import styled from 'styled-components/macro';
import { typesArr } from '../globalValues/GlobalConstants';
import TableRow from './TableRow';

const TBody = styled.tbody`
  box-shadow: var(--boxshadow);
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