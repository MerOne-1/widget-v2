import { useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import DevPage from './pages/DevPage';
import { DebugLogger } from './components/DebugLogger';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  padding: 20px;
  color: #000000;
`;

const Header = styled.h1`
  font-size: 24px;
  color: #000000;
  margin-bottom: 20px;
  border-bottom: 2px solid #F5BBC9;
  padding-bottom: 10px;
`;

const TestBox = styled.div`
  background-color: #F5BBC9;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
  color: #000000;
`;

function App() {
  useEffect(() => {
    console.log('App component mounted');
    console.log('Current environment:', import.meta.env);
    
    try {
      throw new Error('Test error logging');
    } catch (error) {
      console.error('Caught test error:', error);
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header>Booking Widget Development</Header>
        <TestBox>
          If you can see this box with pink background, styled-components is working!
        </TestBox>
        <DevPage />
      </AppContainer>
      <DebugLogger />
    </>
  );
}

export default App;
