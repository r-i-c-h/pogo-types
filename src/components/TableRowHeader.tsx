import React from 'react';
import styled from 'styled-components/macro';

import Ico from './Ico';

const StyledRowHeader = styled.th`
  /* controls Row-Header SVG icon sizes */
  font-size: var(--tr_header-font-size);
  border-left: var(--center-col-border);
  border-right: var(--center-col-border);
  text-align: center;
  padding: 0;
  padding-top: 1px;
`;

const RowHeaderTitle = styled.h4`
  margin-bottom: var(--tr_header-margin-bottom);
  font-size: 0.5em;
  padding: 0 2px;
  margin-top: -0.6em;
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