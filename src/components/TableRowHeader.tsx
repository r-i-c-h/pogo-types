import React from 'react';
import styled from 'styled-components/macro';

import Ico from './Ico';

const StyledRowHeader = styled.th`
  font-size: 1.4rem; /* controls svg icon sizes */
  border-left: var(--center-col-border);
  border-right: var(--center-col-border);
  text-align: center;
  text-transform: uppercase;
  background: var(--header-white);
  @media screen and (max-width: 500px){
    padding: 0;
  }
`;

const RowHeaderTitle = styled.h4`
  color: inherit;
  font-size: 0.8rem;
  margin: -0.6em 1px 0 1px;
  padding: 0;
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