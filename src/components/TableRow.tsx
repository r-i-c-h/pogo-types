import React from 'react';
import styled from 'styled-components/macro';

import Ico from './Ico';
import TableRowHeader from './TableRowHeader';

import { lookupObj } from '../globalValues/GlobalConstants';

const TRow = styled.tr`
  border-bottom: var(--row-border);
  & :nth-child(1) > td> div:nth-child(1){
    padding:0;
  }
  & :nth-child(even){
      background: var(--clr-2);
  }
  &:first-of-type {
    th {
      padding-top: 3px;
    }
  }
`;
const TData = styled.td`
  padding: 0;
  & :nth-of-type(2),
  & :nth-of-type(4) {
    border-left: var(--col-border);
  }
`;
const CellContents = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const CellContentsToRight = styled(CellContents)`
  --normal-sort-order: 0; /** resorting for "double-resist" icons in Ico.jsx **/
  --override-sort-order: 1;
  justify-content: flex-end;
  padding-right: var(--col-interior-side-pad);
`;

const CellContentsToLeft = styled(CellContents)`
  --normal-sort-order: 1;   /** resorting for "double-resist" icons in Ico.jsx **/
  --override-sort-order:0;
  justify-content: flex-start;
  padding-left: var(--col-interior-side-pad);
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