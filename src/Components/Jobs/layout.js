import React, { useState } from 'react';
import { Layout } from 'antd';
import RoleTable from './table';
import RoleForm from './form';
const { Content, Sider } = Layout;

function JobsLayout() {

  const [keyword, setKeyword] = useState();
  const [isRemote, setIsRemote] = useState(false);
  const [filterParams, setFilterParams] = useState({});
  const [needReset, setNeedReset] = useState(false);

  const getKeyword = (e) => {
    setKeyword(e);
  }

  const getRemote = (e) => {
    setIsRemote(e.target.checked);
  }

  const applyFilter = () => {
    if (keyword) {
      setFilterParams({
        ...filterParams,
        keyword: keyword
      })
    }
    if (isRemote) {
      setFilterParams({
        ...filterParams,
        remote: isRemote
      })
    }
    setNeedReset(false);
  }

  const clearFilter = () => {
    setFilterParams({});
    setNeedReset(true);
  }

  return (
    <Layout>
      <Sider theme='light' style={{margin: '2rem 1rem 5.5rem 2rem'}}>
        <RoleForm getKeyword={getKeyword} applyFilter={applyFilter} clearFilter={clearFilter} getRemote={getRemote} />
      </Sider>
      <Content style={{ margin: '2rem', }}>
        <RoleTable filterParams={filterParams} needReset={needReset} />
      </Content>
    </Layout>
  );
}

export default JobsLayout