import React from 'react';
import ResultsList from './features/results/ResultsList';
import Tabs from './features/Tabs';
import Header from './features/Header'
import 'antd/dist/antd.css';
import styled from 'styled-components';
import ResultsSummary from './features/results/ResultsSummary';
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <Background>
        <Wrapper>
          <Header />
          <Tabs />
          <ResultsSummary />
          <ResultsList />
        </Wrapper>
      </Background>
    </>
  );
}

const Wrapper = styled.div`
  background-color: white;
  width: 80%;
  margin: auto;
  height: 100vw;
  padding: 20px;
`

const Background = styled.div`
  background-color: #e6e6e67a;
  height: 100vw;
`

export default App;
