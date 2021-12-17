import { useSelector } from 'react-redux'
import { Divider as AntDivider } from 'antd';
import { satisfactionProps } from './resultsSlice';
import styled from 'styled-components';

const ResultsSummary = () => {
  const satisfaction = useSelector((state: any) => state.results)
  const allReviews = satisfaction.reduce((tot: number, obj: satisfactionProps) => obj.total + tot,0)
  const excelenteNum = satisfaction.reduce((exc: number, obj: satisfactionProps) => obj.excelente + exc,0);
  const excelente = (excelenteNum / allReviews) * 100;
  const muitoBomNum = satisfaction.reduce((mb: number, obj: satisfactionProps) => obj.muitoBom + mb,0);
  const muitoBom = (muitoBomNum / allReviews) * 100;
  const razoavel = ((satisfaction.reduce((raz: number, obj: satisfactionProps) => obj.razoavel + raz,0)) / allReviews) * 100
  const ruim = ((satisfaction.reduce((ruim: number, obj: satisfactionProps) => obj.ruim + ruim,0)) / allReviews) * 100
  const horrivel = ((satisfaction.reduce((hor: number, obj: satisfactionProps) => obj.horrivel + hor,0)) / allReviews) * 100
  const satisfactionPercent = ((excelenteNum + muitoBomNum) / allReviews) * 100

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

  return (
    <Grid>
      <Col>
        <Title>Satisfação</Title>
        <Value>{satisfactionPercent}%</Value>
      </Col>
      <Divider type="vertical" />
      <Col>
      <Title>Avaliações</Title>
        <Value>{allReviews}</Value>
      </Col>
      <Divider type="vertical" />
      <Col>
        <Title>Excelente</Title>
        <Value>&#128525; {excelente}%</Value>
      </Col>
      <Divider type="vertical" />
      <Col>
        <Title>Muito Bom</Title>
        <Value>&#x1F603; {muitoBom}%</Value>
      </Col>
      <Divider type="vertical" />
      <Col>
        <Title>Razoável</Title>
        <Value>&#x1F610; {razoavel}%</Value>
      </Col>
      <Divider type="vertical" />
      <Col>
        <Title>Ruim</Title>
        <Value>&#x1F641; {ruim}%</Value>
      </Col>
      <Divider type="vertical" />
      <Col>
        <Title>Horrível</Title>
        <Value>&#x1F620; {horrivel}%</Value>
      </Col>
    </Grid>
);
};

export default ResultsSummary;

