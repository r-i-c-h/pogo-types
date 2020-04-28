import React from 'react';
import styled from 'styled-components/macro';

import Ico from './Ico';

const StyledRowHeader = styled.th`
  /* controls Row-Header SVG icon sizes */
  font-size: 125%;
  border-left: var(--center-col-border);
  border-right: var(--center-col-border);
  text-align: center;
  padding-top: 1px;
  @media screen and (max-width:720px ){
    padding: 0;
  }
  @media screen and (min-width: 800 px){
    padding-top: 4px; /* <~? */
  }
  @media screen and (min-width: 1100px){ /* scale back down for horizontal lappy/desktop display */
    font-size: 100%;
    padding: 0;
  }
`;

const RowHeaderTitle = styled.h4`
  font-size: 0.6em;
  padding: 0 2px;
  margin-top: -0.6em;
  margin-bottom: -0.2em;
  @media screen and (min-width: 401px){
    margin-bottom: -0.1em;
  }
  @media screen and (min-width: 720px){
    margin-top: -0.4em;
    margin-bottom: 0;
  }
  @media screen and (min-width: 799px){
    margin-top: -0.2em;
  }
  @media screen and (min-width: 1100px){ /* scale back down for horizontal lappy/desktop display */
    margin-top: -0.4em;
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