import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux'
import { companyProps } from './resultsSlice';
import styled from 'styled-components';
import { Input, Space } from 'antd';

const { Search } = Input;

type columnType = {
  title: string;
  dataIndex: string;
  key: number;
}

const ResultsTable = () => {
  const [innitialCias, setInnitialCias] = useState<Array<companyProps>>();
  const [companies, setCompanies] = useState<Array<companyProps>>();

  const results = useSelector((state: any) => state.results);

  useEffect(() => {
    if (results) {
      const cias = results.map((store: companyProps) => ({
          ...store,
          satisfacao: `${store.satisfacao}%`
        })
      )
      setInnitialCias(cias);
      setCompanies(cias);
    };
  }, [results])

  const onSearch = (value: string) => {
    if (companies) {
      const filteredCompanies = companies.filter((store: companyProps) => (
        store.storeName.toString().toLowerCase().includes(value.toLowerCase())
      ));
      setCompanies(filteredCompanies);
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setCompanies(innitialCias);
    }
  }


  return (
    <>
      <Space direction="vertical" size={[0, 15]} style={{ width: '100%' }}>
        <Title>Lojas</Title>
        <Search placeholder="Buscar Loja"  onSearch={onSearch} enterButton onChange={onChange} style={{ width: '40%' }} />
        <Table columns={columns} dataSource={companies} />
      </Space>
    </>
  )
};

const columns:Array<columnType> = [
  {
    title: 'Nome da Loja',
    dataIndex: 'storeName',
    key: 0,
  },
  {
    title: 'Satisfação',
    dataIndex: 'satisfacao',
    key: 1,
  },
  {
    title: 'Avaliações',
    dataIndex: 'total',
    key: 2,
  },
  {
    title: 'Excelente',
    dataIndex: 'excelente',
    key: 3,
  },
  {
    title: 'Muito Bom',
    dataIndex: 'muitoBom',
    key: 4,
  },
  {
    title: 'Razoável',
    dataIndex: 'razoavel',
    key: 5,
  },
  {
    title: 'Ruim',
    dataIndex: 'ruim',
    key: 6,
  },
  {
    title: 'Horrível',
    dataIndex: 'horrivel',
    key: 7,
  }
]

const Title = styled.p`
  color: black;
  font-size: 20px;
  margin-top: 40px;
`

export default ResultsTable;
