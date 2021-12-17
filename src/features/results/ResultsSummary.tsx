import { useSelector } from 'react-redux'
import { Divider as AntDivider } from 'antd';
import { companyProps } from './resultsSlice';
import styled from 'styled-components';

const ResultsSummary = () => {
  const satisfaction = useSelector((state: any) => state.results)

  const { excelente, muitoBom, razoavel, ruim, horrivel, total} = satisfaction.reduce(
    (prev: companyProps, curr: companyProps) => ({
      excelente: prev.excelente + curr.excelente,
      muitoBom: prev.muitoBom + curr.muitoBom,
      razoavel: prev.razoavel + curr.razoavel,
      ruim: prev.ruim + curr.ruim,
      horrivel: prev.horrivel + curr.horrivel,
      total: prev.total + curr.total,
    }), {
      excelente: 0,
      muitoBom: 0,
      razoavel: 0,
      ruim: 0,
      horrivel: 0,
      total: 0,
    }
  );

  const satisfactionPercent = ((excelente + muitoBom) / total) * 100
  const getPercentage = (value: number, total: number) => (value / total) * 100;

  return (
    <Grid>
      <Col>
        <Title>Satisfação</Title>
        <Value>{satisfactionPercent}%</Value>
      </Col>
      <Divider type="vertical" />
      <Col>
      <Title>Avaliações</Title>
        <Value>{total}</Value>
      </Col>
      <Divider type="vertical" />
      <Col>
        <Title>Excelente</Title>
        <Value>&#128525; {getPercentage(excelente, total)}%</Value>
      </Col>
      <Divider type="vertical" />
      <Col>
        <Title>Muito Bom</Title>
        <Value>&#x1F603; {getPercentage(muitoBom, total)}%</Value>
      </Col>
      <Divider type="vertical" />
      <Col>
        <Title>Razoável</Title>
        <Value>&#x1F610; {getPercentage(razoavel, total)}%</Value>
      </Col>
      <Divider type="vertical" />
      <Col>
        <Title>Ruim</Title>
        <Value>&#x1F641; {getPercentage(ruim, total)}%</Value>
      </Col>
      <Divider type="vertical" />
      <Col>
        <Title>Horrível</Title>
        <Value>&#x1F620; {getPercentage(horrivel, total)}%</Value>
      </Col>
    </Grid>
  )
};

const Grid = styled.div`
  border: 1px solid #9b9b9bab;
  padding: 10px;
  margin: 10px auto;
  justify-content: space-between;
  display: flex;
  height: 150px;
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  justify-content: space-around;
`

const Title = styled.p`
  color: #2b2b2b;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
`

const Value = styled.p`
  color: black;
  font-size: 25px;
  text-align: center;
`

const Divider = styled(AntDivider)`
  background-color: #9b9b9bab;
  height: 100%;
  margin: 0;
`

export default ResultsSummary;
