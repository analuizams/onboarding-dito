import { PageHeader as AntPageHeader } from 'antd';
import styled from 'styled-components';

const Header = () => {
  return (
    <PageHeader
      backIcon={false}
      onBack={() => null}
      title="PESQUISA"
    />
  );
};

const PageHeader = styled(AntPageHeader)`
  &.site-page-header {
  border: 1px solid rgb(235, 237, 240);
}
`

export default Header;
