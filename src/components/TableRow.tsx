import React from 'react';
import styled from 'styled-components/macro';

import Ico from './Ico';
import TableRowHeader from './TableRowHeader';

import { lookupObj } from '../globalValues/GlobalConstants';

const TRow = styled.tr`
  border-bottom: var(--row-border);
`;
const CellContentsToRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding: 2px;
`;

const CellContentsToLeft = styled(CellContentsToRight)`
  justify-content: flex-start;
`;

interface Props {
  pogoType: string;
}
const TableRow: React.FC<Props> = ({ pogoType }): JSX.Element => {
  const typeData = lookupObj[pogoType];

  return (
    <TRow>
      <td><CellContentsToRight>{typeData.isGoodVs.map((theName: string) => (<Ico key={theName + 'icoGood'} name={theName} />))}</CellContentsToRight></td>
      <td><CellContentsToRight>{
        typeData.isBadVs.map((theName: string) => (
          <Ico key={theName + 'icoBad'} name={theName} isExtra={typeData.isExtraBadVs.includes(theName)} />
        ))
      }</CellContentsToRight></td>

      <TableRowHeader pogoType={pogoType} />

      <td><CellContentsToLeft>{
        typeData.isSafeFrom.map((theName: string) => (
          <Ico key={theName + 'icoSafe'} name={theName} isExtra={typeData.isExtraSafeFrom.includes(theName)} />)
        )}
      </CellContentsToLeft></td>
      <td><CellContentsToLeft>{typeData.isWeakTo.map((theName: string) => (<Ico key={theName + 'icoWeak'} name={theName} />))}</CellContentsToLeft></td>
    </TRow>
  );
};

export default TableRow;