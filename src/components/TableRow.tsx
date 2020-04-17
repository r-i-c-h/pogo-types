import React from 'react';
import styled from 'styled-components/macro';

import Ico from './Ico';
import TableRowHeader from './TableRowHeader';

import { lookupObj } from '../globalValues/GlobalConstants';

const TRow = styled.tr`
  border-bottom: var(--row-border);
`;
const TData = styled.td`
  padding: 0;
  & :nth-of-type(2),
  & :nth-of-type(4) {
    border-left: var(--col-border);
  }
`;
const CellContentsToRight = styled.div`
  --normal-sort-order: 0; /** resorting for "double-resist" icons in Ico.jsx **/
  --override-sort-order: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const CellContentsToLeft = styled(CellContentsToRight)`
  --normal-sort-order: 1;   /** resorting for "double-resist" icons in Ico.jsx **/
  --override-sort-order:0;
  /* justify-content: flex-start; */
  justify-content: center;
`;

interface Props {
  pogoType: string;
}
const TableRow: React.FC<Props> = ({ pogoType }): JSX.Element => {
  const typeData = lookupObj[pogoType];

  return (
    <TRow>
      <TData><CellContentsToRight>{
        typeData.isBadVs.map((theName: string) => (
          <Ico key={theName + 'icoBad'} name={theName} isExtra={typeData.isExtraBadVs.includes(theName)} />
        ))
      }</CellContentsToRight></TData>
      <TData><CellContentsToRight>{typeData.isGoodVs.map((theName: string) => (<Ico key={theName + 'icoGood'} name={theName} />))}</CellContentsToRight></TData>

      <TableRowHeader pogoType={pogoType} />

      <TData><CellContentsToLeft>{typeData.isWeakTo.map((theName: string) => (<Ico key={theName + 'icoWeak'} name={theName} />))}</CellContentsToLeft></TData>
      <TData><CellContentsToLeft>{
        typeData.isSafeFrom.map((theName: string) => (
          <Ico key={theName + 'icoSafe'} name={theName} isExtra={typeData.isExtraSafeFrom.includes(theName)} />)
        )}
      </CellContentsToLeft></TData>

    </TRow>
  );
};

export default TableRow;