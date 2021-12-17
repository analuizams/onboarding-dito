import { Tabs as AntTabs } from 'antd';
import styled from 'styled-components';

const { TabPane: AntTabPane } = AntTabs;

const Title = styled.p`
    color: black;
    font-size: 20px;
    margin-top: 25px;
`

const TabPane = styled(AntTabPane)`
&.ant-tabs-tab {
  &.ant-tabs-tab-btn {
    color: grey;
    text-decoration: none;
  }
}
`

const Tabs = () => {
  return (
    <AntTabs defaultActiveKey="1" type="card">
      <TabPane tab="PONTO DE VENDA" key="1">
        <Title>Consolidado das Lojas</Title>
      </TabPane>
    </AntTabs>
  )
};

export default Tabs;
