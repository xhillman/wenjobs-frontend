import React from 'react';
import { Layout } from 'antd';
import PeopleTable from './table';
import PeopleForm from './form';
import './style.css';
const { Content, Sider } = Layout;
function ConnectionsLayout() {

  return (
    <Layout className='layout'>

      <Sider className='sider' width='20rem' theme='light'>
        <PeopleForm />
      </Sider>

      <Content className='content'>
      <PeopleTable />
    </Content>

    </Layout >


  );
}

export default ConnectionsLayout;