import React from 'react';
import styled from 'styled-components/macro';

import Ico from './Ico';

const StyledRowHeader = styled.th`
  padding: 0;
  font-size: 1.4rem; /* controls svg icon sizes */
  border-left: var(--center-col-border);
  border-right: var(--center-col-border);
  text-align: center;
`;

const RowHeaderTitle = styled.h4`
  font-size: 0.7rem;
  margin: -0.6em 0 -0.1em 0;
  padding: 0 2px;
  text-transform: uppercase;
`;
interface Props {
  pogoType: string;
}
const TableRowHeader: React.FC<Props> = ({ pogoType }): JSX.Element => {
  return (
    <StyledRowHeader scope="row" tabIndex={0}>
      <Ico name={pogoType} />
      <RowHeaderTitle>{pogoType.charAt(0).toUpperCase() + pogoType.slice(1)}</RowHeaderTitle>
    </StyledRowHeader>);
};

export default TableRowHeader;