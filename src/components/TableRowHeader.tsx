import React from 'react';
import styled from 'styled-components/macro';

import Ico from './Ico';

const StyledRowHeader = styled.th`
  /* controls Row-Header SVG icon sizes */
  font-size: 130%;
  border-left: var(--center-col-border);
  border-right: var(--center-col-border);
  text-align: center;
  padding: 0;
  padding-top: 1px;
`;

const RowHeaderTitle = styled.h4`
  font-size: 0.5em;
  padding: 0 2px;
  margin-top: -0.6em;
  margin-bottom: -0.1em;
  @media screen and (max-width: 400px){
    margin-bottom: -0.2em;
  }
  @media screen and (min-width: 900px){ /* shrink back down for desktop */
    margin-bottom: -0.2em;
  }
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