import React from 'react';
import styled from 'styled-components/macro';
import SVGSymbols from './components/SVGSymbols';
import Table from './components/Table';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 960px;
`;

const PageHead = styled.div`
  text-align: center;
  & h1 {
    font-size: 1rem;
    font-weight: bold;
    /* margin: 0; */
    /* padding: 0; */
  }
`;
const PageHeading = () => {
  return (<PageHead>
    <h1>POKEMON GO TYPE EFFECTIVENESS</h1>
  </PageHead>);
};

function App() {
  return (<>
    <SVGSymbols />
    <AppWrapper>
      <PageHeading />
      <Table />
    </AppWrapper>
  </>);
};

export default App;

/* ~~~~~ Mini CSS-Reset ~~~~~~ */