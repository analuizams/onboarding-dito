import React from 'react';
import { satisfactionProps } from './resultsSlice';
import { Collapse as antCollapse } from 'antd';
import styled from 'styled-components';

const { Panel } = antCollapse;

const ResultCard: React.FC<{store: satisfactionProps}> = ({ store }) => {
  const { storeName, storeId, excelente, muitoBom,
  razoavel, ruim, horrivel } = store

  const surveyTotal = (excelente + muitoBom + razoavel + ruim + horrivel)

  const calculateSat = () => (((excelente + muitoBom) / surveyTotal) * 100)

  return (
    <Card>
      <CardHeader>{ storeId }</CardHeader>
      <Title>{ storeName }</Title>
      <Satisfaction>Satisfação: {calculateSat()} %</Satisfaction>
      <Collapse>
        <Panel header={`${surveyTotal} Avaliações`} key={ storeId }>
          <ul>
            <li>Excelente: {excelente}</li>
            <li>Muito Bom: {muitoBom}</li>
            <li>Razoável: {razoavel}</li>
            <li>Ruim: {ruim}</li>
            <li>Horrível: {horrivel}</li>
          </ul>
        </Panel>
      </Collapse>
    </Card>
  );
};

const Title = styled.p`
  font-size: 20px;
  color: #444;
  background-color: lightgrey;
  padding: 5px;
  text-align: center;
  margin: 0;
`

const CardHeader = styled.p`
  font-size: 20px;
  color: white;
  background-color: black;
  padding: 5px;
  margin: 0;
  text-align: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`

const Card = styled.div`
  border: 1px solid gray;
  width: 250px;
  border-radius: 10px;
  white-space: nowrap;
  margin: 10px;
`

const Satisfaction = styled.p`
  font-size: 18px;
  color: black;
  text-align: center;
  &:before {
    content: '\uD83D\uDC4D ';
  }
`

const Collapse = styled(antCollapse)`
  &.ant-collapse {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    .ant-collapse-item {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      // & referencia o elemento pai
      &:last-child {
        > .ant-collapse-content {
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      }
      > .ant-collapse-header {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }
`

export default ResultCard;
