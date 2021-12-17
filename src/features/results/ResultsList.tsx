import { useSelector } from 'react-redux'
import Card from './ResultsCard';
import { satisfactionProps } from './resultsSlice';
import styled from 'styled-components';

const ResultsList = () => {
  const satisfaction = useSelector((state: any) => state.results)

  return (
    <Container>
      { satisfaction.map(
        (store: satisfactionProps, index: number) => <Card key={ index } store={ store } />
      )}
    </Container>
  );
}

const Container = styled.div`
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  justify-content: center;
`
export default ResultsList;
