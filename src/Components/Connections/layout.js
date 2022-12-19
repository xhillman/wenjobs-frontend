import React from 'react';
import { Layout } from 'antd';
import PeopleTable from './table';
import PeopleForm from './form';
const { Content, Sider } = Layout;

function ConnectionsLayout() {

  return (
    <Layout>

      <PeopleForm />
      <PeopleTable />
    </Layout>


  );
}

export default ConnectionsLayout;