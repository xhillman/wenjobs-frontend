import React, { useState } from 'react';
import { Layout } from 'antd';
import RoleTable from './table';
import RoleForm from './form';
const { Content } = Layout;

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


      <RoleForm getKeyword={getKeyword} applyFilter={applyFilter} clearFilter={clearFilter} getRemote={getRemote} />
      <RoleTable filterParams={filterParams} needReset={needReset} />


    </Layout>
  );
}

export default JobsLayout