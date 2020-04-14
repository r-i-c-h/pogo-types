import React from 'react';
import styled from 'styled-components/macro';

import Ico from './Ico';
import TableRowHeader from './TableRowHeader';

import { lookupObj } from '../globalValues/GlobalConstants';

const TRow = styled.tr`
  border-bottom: var(--row-border);
`;
const CellContentOnRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding: 2px;
`;

const CellContentOnLeft = styled(CellContentOnRight)`
  justify-content: flex-start;
`;

interface Props {
  pogoType: string;
}
const TableRow: React.FC<Props> = ({ pogoType }): JSX.Element => {
  const typeData = lookupObj[pogoType];

  return (
    <TRow>
      <td><CellContentOnRight>{typeData.isGoodVs.map((x: string) => (<Ico key={x + 'icoGood'} name={x} />))}</CellContentOnRight></td>
      <td><CellContentOnRight>{typeData.isBadVs.map((x: string) => (<Ico key={x + 'icoBad'} name={x} />))}</CellContentOnRight></td>
      <TableRowHeader pogoType={pogoType} />
      <td><CellContentOnLeft>{typeData.isSafeFrom.map((x: string) => (<Ico key={x + 'icoSafe'} name={x} />))}</CellContentOnLeft></td>
      <td><CellContentOnLeft>{typeData.isWeakTo.map((x: string) => (<Ico key={x + 'icoWeak'} name={x} />))}</CellContentOnLeft></td>
    </TRow>
  );
};

export default TableRow;