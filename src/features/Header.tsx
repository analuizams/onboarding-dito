import { PageHeader as AntPageHeader } from 'antd';
import styled from 'styled-components';


const PageHeader = styled(AntPageHeader)`
  &.site-page-header {
  border: 1px solid rgb(235, 237, 240);
}
`

const Header = () => {
  return (
    <PageHeader
      backIcon={false}
      onBack={() => null}
      title="PESQUISA"
    />
);
};

export default Header;
