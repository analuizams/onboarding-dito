import { useSelector } from 'react-redux'
import Card from './ResultsCard';
import { satisfactionProps } from './resultsSlice';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: center;
`

export function ResultsList() {
  const satisfaction = useSelector((state: any) => state.results)

  return (
    <Container>
      { satisfaction.map(
        (store: satisfactionProps, index: number) => <Card key={ index } store={ store } />
      )}
    </Container>
  );
}
