import React from 'react';
import PeopleTable from './table';
import PeopleForm from './form';
import UploadConnections from './uploadConnections';
import './style.css';

import { Layout } from 'antd';
const { Content, Sider } = Layout;

function ConnectionsLayout() {

  return (
    <Layout className='layout'>

      <Sider className='sider' width='15rem' theme='light'>
        <div className='formHeader'>
          <h4>Search</h4>
        </div>
        <PeopleForm />
        <UploadConnections />
      </Sider>

      <Content className='content'>
        <PeopleTable />
      </Content>

    </Layout >


  );
}

export default ConnectionsLayout;