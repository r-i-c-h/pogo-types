import React from 'react';
import styled from 'styled-components/macro';

import Ico from './Ico';
import TableRowHeader from './TableRowHeader';

import { lookupObj } from '../globalValues/GlobalConstants';

const TRow = styled.tr`
  background: lightcyan;
  border-bottom: 1px solid gray;
`;
const FloatRightCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  max-width: 25vw;
  padding: 2px;
`;

const FloatLeftCell = styled(FloatRightCell)`
  justify-content: flex-start;
`;

interface Props {
  pogoType: string;
}
const TableRow: React.FC<Props> = ({ pogoType }): JSX.Element => {
  const typeData = lookupObj[pogoType];

  return (
    <TRow>
      <td><FloatRightCell>{typeData.isGoodVs.map((x: string) => (<Ico key={x + 'ico'} name={x} />))}</FloatRightCell></td>
      <td><FloatRightCell>{typeData.isBadVs.map((x: string) => (<Ico key={x + 'ico'} name={x} />))}</FloatRightCell></td>
      <TableRowHeader pogoType={pogoType} />
      <td><FloatLeftCell>{typeData.isSafeFrom.map((x: string) => (<Ico key={x + 'ico'} name={x} />))}</FloatLeftCell></td>
      <td><FloatLeftCell>{typeData.isWeakTo.map((x: string) => (<Ico key={x + 'ico'} name={x} />))}</FloatLeftCell></td>
    </TRow>
  );
};

export default TableRow;