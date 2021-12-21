import { Tabs as AntTabs } from 'antd';
import styled from 'styled-components';

const { TabPane } = AntTabs;

const Tabs = () => (
  <StyledTab defaultActiveKey="1" type="card">
    <TabPane className="test" tab="PONTO DE VENDA" key="1">
      <Title>Consolidado das Lojas</Title>
    </TabPane>
  </StyledTab>
);

const Title = styled.p`
  color: black;
  font-size: 20px;
  margin-top: 25px;
`

const StyledTab = styled(AntTabs)`
  .ant-tabs-tab {
    &.ant-tabs-tab-active {
      .ant-tabs-tab-btn {
        color: grey;
        text-decoration: none;
      }
    }
  }
`

export default Tabs;
