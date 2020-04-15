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
// const PageHead = styled.div`
//   text-align: center;
//   & h1 {
//     font-size: 1.2rem;
//     font-weight: 700;
//     letter-spacing: 2px;
//     margin: 0;
//     padding: 0;
//     text-decoration:
//   }
// `;
// const PageHeading = () => {
//   return (<PageHead>
//     <h1>POKÉMON GO TYPE EFFECTIVENESS</h1>
//   </PageHead>);
// };

function App() {
  return (<>
    <SVGSymbols />
    <AppWrapper>
      {/* <PageHeading /> */}
      <Table />
    </AppWrapper>
  </>);
};

export default App;