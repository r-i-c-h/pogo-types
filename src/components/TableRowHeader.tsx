import React from 'react';
import styled from 'styled-components/macro';

import Ico from './Ico';

const StyledRowHeader = styled.th`
  font-size: 1rem;
  border-left: var(--center-col-border);
  border-right: var(--center-col-border);
  text-align: center;
  text-transform: uppercase;
  background: var(--header-white);
  @media screen and (max-width: 500px){
    padding: 0;
  }
`;
const RowHeaderIco = styled(Ico)`
  font-size: 3rem;
`;

const RowHeaderTitle = styled.h4`
  color: inherit;
  margin: 0;
  padding: 0;
  font-size: 0.6rem;
`;
interface Props {
  pogoType: string;
}
const TableRowHeader: React.FC<Props> = ({ pogoType }): JSX.Element => {
  return (
    <StyledRowHeader scope="row" tabIndex={0}>
      <RowHeaderIco name={pogoType} />
      <RowHeaderTitle>{pogoType.charAt(0).toUpperCase() + pogoType.slice(1)}</RowHeaderTitle>
    </StyledRowHeader>);
};

export default TableRowHeader;