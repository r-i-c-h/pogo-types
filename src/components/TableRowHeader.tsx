import React from 'react';
import styled from 'styled-components/macro';

import Ico from './Ico';

const StyledRowHeader = styled.th`
  font-size: 1.2rem;
  border-left: var(--center-col-border);
  border-right: var(--center-col-border);
  margin: .2rem;
  text-transform: uppercase;
  background: var(--header-white);
`;
const RowHeaderIco = styled(Ico)`
  display: block;
  font-size: 4rem;
`;

interface Props {
  pogoType: string;
}
const TableRowHeader: React.FC<Props> = ({ pogoType }): JSX.Element => {
  return (
    <StyledRowHeader scope="row">
      <RowHeaderIco name={pogoType} />
      <div>{pogoType.charAt(0).toUpperCase() + pogoType.slice(1)}</div>
    </StyledRowHeader>);
};

export default TableRowHeader;