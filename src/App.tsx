import React from 'react';
import styled from 'styled-components/macro';
import { GlobalStyle } from './GlobalStyling';
import Title from './components/Title';

const AppWrapper = styled.div`
  margin: auto;
`;

function App() {
  return (<>
    <GlobalStyle />
    <AppWrapper>
      <Title />
    </AppWrapper>
  </>);
};

export default App;
