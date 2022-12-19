import React from 'react';
import { Layout } from 'antd';
import CompaniesTable from './table';
const { Content } = Layout;

function CompaniesLayout() {

  return (

    <Layout className='layout'>

      <Content className='content'>
        <CompaniesTable />
      </Content>

    </Layout >

  );
}

export default CompaniesLayout;