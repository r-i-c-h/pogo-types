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
`;

const PageHead = styled.div`
  text-align: center;
  & h1, h2, h5 {
    margin: 0;
    padding: 0;
  }
`;
const PageHeading = () => {
  return (<PageHead><h1>POKEMON GO TYPES</h1>
    <h5>(AKA &quot;Type Effectiveness&quot;)</h5>
  </PageHead>
  );
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